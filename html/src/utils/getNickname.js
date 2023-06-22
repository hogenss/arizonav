export const getNickname = (nickname) => {
    const reg = /^([A-Za-z0-9\._ \$@=\(\)\[\]]{3,25})$/gmsi
    const reg2 = /[|]([A-Za-z0-9\._ \$@=\(\)\[\]]{3,25})/gmsi
    let nick = reg.exec(nickname)
    let nick2 = reg2.exec(nickname)

    if(nick2) return nick2[1]
    else return nick[1]
}
