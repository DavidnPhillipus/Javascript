const x = 2;

try{
    console.log("Before error");
    x.toUpperCase();
}catch(err){
    console.log(err.message, err.name);
}finally{
    console.log("Finally block");
}//Use a try...catch block to catch the error that occurs when calling the toUpperCase method on a number. Log the error message and name to the console. Use a finally block to log a message to the console.


try{
    console.log("Before error");
    throw "This is an error"
}catch(err){
    console.log(err);
}finally{
    console.log("Finally block");
}


try{
    console.log("Before error");
    throw Error("This is an error")
}catch(err){
    console.log(err.message, err.name);
}finally{
    console.log("Finally block");
}




try{
    console.log("Before error");
    throw new Error("This is an error");
}catch(err){
    console.log(err.message, err.name);
}finally{
    console.log("Finally block");
}//Use a try...catch block to throw a custom error message. Log the error message and name to the console. Use a finally block to log a message to the console.
