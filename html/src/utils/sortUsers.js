export const sortPoints= (users, setUsers) => {
    let sortedElements = users.sort((a, b) => b.points - a.points);
    setUsers(sortedElements)
};

export const sortNickname = (users, setUsers) => {
    let sortedElements = users.sort((a, b) => b.nickname - a.nickname);
    setUsers(sortedElements)
}

export const sortLevel= (users, setUsers) => {
    let sortedElements = users.sort((a, b) => b.level - a.level);
    setUsers(sortedElements)
}