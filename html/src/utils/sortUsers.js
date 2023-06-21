export const sortPoints= (users, setUsers, active) => {
    let sortedElements = users.sort((a, b) => active ? b.points - a.points : a.points - b.points);
    setUsers(sortedElements)
};

export const sortLevel= (users, setUsers, active) => {
    let sortedElements = users.sort((a, b) => active ? b.level - a.level : a.level - b.level);
    setUsers(sortedElements)
}