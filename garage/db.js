const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/garage",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("BD connectée");
    }
  );

const carsSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    created: Date,
});


const carModel = mongoose.model(" voitures", carsSchema);

/*carModel.deleteMany({}).then(() => {
    carModel.create([
        {
            brand: "Renault",
            model:"Espace",
            year: 1999,
        },
        {
            brand: "Renault",
            model:"Scenic",
            year: 2004,
        },
        {
            brand: "Peugeot",
            model:"308",
            year: 2017,
        },
        
    ])
});*/

/*carModel.findById({
   _id: "60463bef9e04b33a00c75e81"
}).then((response) => console.log(response));*/


/*carModel.find({
   year: {$gt: 2015}
}).then((response) => console.log(response));*/

carModel.find({
   model: /o/
}).then((response) => console.log(response));


/*carModel.update({ model: "Espace" }, {
    year : "2000"
}).then((response) => console.log(response));*/

/*carModel.deleteMany({
    brand: "Renault",
}).then((response) => console.log(response));*/

carModel.insertMany([
    {
        brand: "Aston Martin",
        model:"DB89",
        year: 2010,
    },
    {
        brand: "Range Rover",
        model:"Discovery Sport",
        year: 2017,
    },
]).then((response) => console.log(response));