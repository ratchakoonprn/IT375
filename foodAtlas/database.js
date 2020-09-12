const mongoose = require('mongoose');
const config = {
    autoIndex: true,
    userNewUrlParser: true,
};
const connectionString = `mongodb+srv://ratchakoon:pa55w0rd@cluster0.26tsw.mongodb.net/nodefood?retryWrites=true&w=majority`;

mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    useUnifiedTopology: true
    }).then(con =>{
        console.log(con.connections);
        console.log('DB connection successful');
    }).catch(err =>{
        console.log('Cannot connect to DB', err);
    });