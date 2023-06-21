const passport = require('passport')
const {Strategy} = require('passport-discord')
const userModel = require('../models/userModel')
const {getGuildMember} = require('../utils/api')
const ApiError = require("../exceptions/api-error");

passport.serializeUser((user, done) => {
    console.log('Serializing User...');
    console.log(user);
    done(null, {id: user.id});
});

passport.deserializeUser(async (id, done) => {
    console.log('Deserializing User');
    console.log(id);
    try {
        const user = await userModel.findById(id);
        if (!user) throw new Error('User not found');
        console.log(user);
        done(null, user);
    } catch (err) {
        console.log(err);
        done(err, null);
    }
});

async function discordVerify(accessToken, refreshToken, profile, done) {
    try {
        const guildMember = await getGuildMember(accessToken)
        const {id: discordId, username, discriminator, avatar, guilds} = profile;
        const discordTag = `${username}#${discriminator}`
        const isAdmin = guilds.filter((e) => e.id === '751009422683144203').length

        const adminRole = "1069409593907749004"

        console.log(guildMember)

        if(isAdmin === 0) {
            return done(ApiError.UserNotAdmin(), null)
        }

        if(guildMember.roles.length === 0) return done(ApiError.UserNotAdmin(), null)

        if(!guildMember.roles.includes(adminRole)) return done(ApiError.UserNotAdmin(), null)

        let nickname = guildMember.nick
        if(!guildMember.nick) nickname = guildMember.user.display_name

        const user = await userModel.findOneAndUpdate({discordId}, {discordTag, nickname, avatar}, {new: true});

        if (user) {
            return done(null, user);
        }


        const newUser = await userModel.create({discordId, discordTag, nickname, avatar});

        return done(null, newUser);
    } catch (err) {
        console.log(err);
        return done(err, null);
    }
}

passport.use(
    new Strategy(
        {
            clientID: process.env.DISCORD_CLIENTID,
            clientSecret: process.env.DISCORD_SECRET,
            callbackURL: `${process.env.API_URL}/api/discord/redirect`,
            scope: ['identify', 'guilds', 'guilds.members.read'],
        },
        discordVerify
    )
)