 const mongoose = require('mongoose')


 const connectionURL = 'mongodb+srv://raam1krishna123:ddfbci8SvvYdTjUp@taskmanagercluster1.gdf4i.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerCluster1'; 
 


 // This is how we can use mongoose to create a model for our erp software
const connectDB = async ()=>{
    try {
        const connectionDB = await mongoose.connect(connectionURL);
        // console.log(`MongoDB connected: ${connectionDB.connection.host}`)
        // console.log("connected to database ")
    
     } catch (error) {
    //   console.log(error)
       
     }
}
connectDB()
 