const myAsyncFunc = async()=>{
    try{
        const result = await Promise.resolve('Async Function');
        //const result = await Promise.reject(new Error('Reject Async Function'));
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
myAsyncFunc();