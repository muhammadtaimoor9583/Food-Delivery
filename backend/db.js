const mongoose = require('mongoose');

const mongoURI='mongodb://taimoor:123@ac-i025wpf-shard-00-00.v06y2n4.mongodb.net:27017,ac-i025wpf-shard-00-01.v06y2n4.mongodb.net:27017,ac-i025wpf-shard-00-02.v06y2n4.mongodb.net:27017/gofood?replicaSet=atlas-f9mukh-shard-0&ssl=true&authSource=admin'
const mongoDB=async()=>{
    try {
        await mongoose.connect(mongoURI);
        const fetched_data=await mongoose.connection.db.collection('foodData');
        const fetched_cat=await mongoose.connection.db.collection('foodCategory');
        const data=await fetched_data.find({}).toArray();
        const catData=await fetched_cat.find({}).toArray();
        global.foodData=data;
        global.foodCategory=catData;
        // console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=mongoDB;