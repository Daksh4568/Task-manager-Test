const mongodb = require('mongodb')
const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb+srv://raam1krishna123:ddfbci8SvvYdTjUp@taskmanagercluster1.gdf4i.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerCluster1';

const databaseName = 'task-manager'

async function  connectTodb() {
    try {
        const client = await MongoClient.connect(connectionURL);

        const db = client.db(databaseName)
        console.log("Connected to database")

        // const upgradeData = await db.collection('tasks').updateOne({
        //     _id: new mongodb.ObjectId("66b9f4a2a877f211acf551d2")
        // } , {

        //    $set: {
        //     name : 'Nishant'
        //    }
        // })

        // upgrade the databse
//     const upgradeData = await db.collection('taskstodo').updateMany({
//         completed: true
//     } , {
//         $set: {
//             completed: false
//         }
//   })
      //  console.log("Upadted" , upgradeData.modifiedCount)

      // delete the data

   const removeData = await db.collection('users').deleteMany({
        age : 256
    })

    console.log("Deleted" ,  removeData)
    } catch (error) {      
         console.log("Unable to perform the task" ,error)
 }
 }
// Close the connection when done
    // client.close(); // Close the MongoDB connection to free up resources
connectTodb()