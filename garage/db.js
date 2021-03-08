const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/garage",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("BD connectée");
    }
  );

const carsSchema = new mongoose.Schema({
    marque: String,
    modèle: String,
    année: Number,
});


const carModel = mongoose.model(" voitures", carsSchema);

carModel.deleteMany({}).then(() => {
    carModel.create([
        {
            marque: "Renault",
            modèle:"Espace",
            année: 1999,
        },
        {
            marque: "Renault",
            modèle:"Scenic",
            année: 2004,
        },
        {
            marque: "Peugeot",
            modèle:"308",
            année: 2017,
        },
        
    ])
})