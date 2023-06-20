const date = new Date()
date.setHours(0)

const hour = date.getHours()
const minutes = date.getMinutes()
const day = date.getDay();

console.log(`с ${formatDate(new Date(2023, new Date().getMonth(), new Date().getDate()-7))} по ${formatDate(date)}`)

function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
}