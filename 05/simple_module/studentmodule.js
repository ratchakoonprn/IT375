class Student {
    constructor(id, fname, lname,bdate) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        // var byear = bdate.slice(0,4);
        // var bmonth = bdate.slice(4,6);
        // var bday = bdate.slice(6,8);
        // var birthdate = `${byear}/${bmonth}/${bday}`;
        //this.bdate = birthdate;
        this.bdate = bdate;
    }
  
    getStudent() {
      return `
        Id: ${this.id}\n
        Name: ${this.fname} ${this.lname}\n
        Birthdate: ${this.bdate}
      `;
    }
  }
  
module.exports = Student;