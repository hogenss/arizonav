const fetch = require('node-fetch')

async function getGuildMember(token) {
    const response = await fetch(`${process.env.DISCORD_API}/users/@me/guilds/${process.env.GUILD_ID}/member`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.json()
}

module.exports = {getGuildMember}