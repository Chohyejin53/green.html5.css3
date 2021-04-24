// 오늘날짜 구하기 
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today = new Date();
nowYear = today.getFullYear();
nowMonth = monthNames[today.getMonth()];
nowDate = today.getDate();

console.log(nowYear);
console.log(nowMonth);
console.log(nowDate);
