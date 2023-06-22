const app =require('./app.js');
const dotenv=require("dotenv");
const connectDatabase=require("./config/database.js")
process.on("uncaughtException",err=>{
    console.log(`Error:${err.message}`);
    console.log("Shutting down the server");
    server.close(()=>{
       process.exit(1);
    });
})
dotenv.config({path:"backend/config/config.env"});
connectDatabase()
const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on http://127.0.0.1:${process.env.PORT}`)
})
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log("Shutting down the server");
    server.close(()=>{
       process.exit(1);
    });
});