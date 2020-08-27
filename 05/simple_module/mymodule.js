// module.exports = ()=>{
//     var name;
//     this.setName = (fullname) =>{
//         name = fullname;
//     };
//     this.printName = () =>{
//         return 'Hello '+ name;
//     };
// };
class User {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    getUserStats() {
      return `
        Name: ${this.name}
        Age: ${this.age}
        Email: ${this.email}
      `;
    }
  }
  
module.exports = User;
  