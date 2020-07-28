const checkAuth = (id,password)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const authData = 'abcdef';
            console.log('User Authenticated');
            resolve({id:id,password:password,authData:authData});
            //reject(new Error('Unauthenticate user'));
        },1000);
    });
}
const getStudentData = (auth)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = {name:'Suchada',permission:'member'};
            resolve(data);
            //reject(new Error('Could not find student'));
        },2000);
    });
}
const getAuthResult = async()=>{
    try{
        const auth = await checkAuth(15,'p@ssw0rd');
        const data = await getStudentData(auth);
        console.log(data);
    }catch(error){
        console.log(error.message);
    }
}
getAuthResult();