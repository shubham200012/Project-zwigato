const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://ShubhamSonboir:ALDROWAND@cluster0.uni29ss.mongodb.net/Zwigato?retryWrites=true&w=majority'
const mongoURI = 'mongodb://127.0.0.1:27017/Zwigato'
mongoose.set("strictQuery", false);
const mongoDB = async() =>{
    
    // mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true })
    // .then((result)=>{
    //     console.log("DB Connected")
    //     const fetched_data = mongoose.connection.db.collection("products");
    //     fetched_data.find({}).toArray(function(err, data){
    //         if(err){
    //              console.log(err);
    //         }
    //         else {
    //             global.products = data;
    //             console.log(global.products)
    //         }
    //     })
    // })
    // .catch((err)=> console.log(err+"Unable to connect"))

    // await mongoose.connect(mongoURI,{ useNewUrlParser: true })
    //     .catch((err)=> console.log("---",err))
    //     .then((result)=>{
    //         console.log("connected");
    //         const fetched_data = mongoose.connection.db.collection('products');
    //         fetched_data.find({}).toArray(function(err,data){
    //             if(err) return console.log(err);
    //             else{
    //                 global.products = data;
    //                 console.log(global.products)
    //             }
    //         })
    //     })

    try{
        await mongoose.connect(mongoURI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("DB Connected");
        const fetched_data = await mongoose.connection.db.collection('products').find().toArray();
            // fetched_data.find({}).toArray(function(err,data){
            //     if(err) return console.log(err);
            //     else{
            //         global.products = data;
            //         console.log(global.products)
            //     }
            // })
            // console.log(fetched_data)
            global.products = fetched_data;
            // console.log(global.products)
    } catch(err){
        console.log("DB Connection failed")
    }
}

module.exports = mongoDB;