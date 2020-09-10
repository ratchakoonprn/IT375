exports.computeAge = (bdate) =>{
    var today = new Date();
    var birthDate = new Date(bdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    } 
    return `Age: ${age}\n`;
}

//console.log('age: ' + getAge("1980/12/20")); //age: 39
//today is 2020/08/10 (10 Sep 2020)
//birth date: Sat Dec 20 1980 00:00:00 GMT+0700 (Indochina Time)
//today.getFullYear(): 2020
//birthDate.getFullYear(): 1980
//today.getMonth(): 8
//birthDate.getMonth(): 11
//today.getDate(): 10
//birthDate.getDate(): 20

// exports.computeAge = (bdate) =>{
//     var today = new Date();
//     var byear = parseInt(bdate.slice(0,4));
//     var bmonth = parseInt(bdate.slice(4,6));
//     var bday = parseInt(bdate.slice(6,8));
//     var age = today.getFullYear() - byear;
//     var m = today.getMonth() - bmonth;
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return `Age: ${age}\n`;
// }
