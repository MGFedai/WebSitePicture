const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const fileUpload = require('express-fileupload');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo');
const fs = require('fs');
const photoController = require('./controllers/photoControllers')
const pageController = require('./controllers/pagecontrollers')

const app = express();

// connect  DB

mongoose.connect("mongodb+srv://gorkem35:19031903Aa.@cluster0.dlb3l.mongodb.net/pcat-db?retryWrites=true&w=majority").then(()=>{
  console.log('DB CONNECTED')
}).catch((err)=>{
  console.log(err)
});

//TEMPLATE ENGİNE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public")); // Static dosyaları koyacağımız klasörü seçtik
app.use(express.urlencoded({ extended: true })); // Body parser okuyoruz
app.use(express.json()); // Body parser dönüştürüyoruz
app.use(fileUpload());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);
// ROUTES
app.get("/",photoController.getAllPhotos);
app.get("/photos/:id",photoController.getPhoto);
app.post("/photos",photoController.createPhotos);
app.put("/photos/:id",photoController.updatePhoto);
app.delete("/photos/:id",photoController.deletePhoto);
app.get("/photos/edit/:id",pageController.getEditPage);
app.get("/about",pageController.getAboutPage);
app.get("/add",pageController.getAddPage);

app.get("/", async (req, res) => {
  getport()
  const photos = await Photos.find({});
  res.render("index", {
    photos,
  });
});

;

function getport (){
  console.log(port)
}
 

const port = process.env.PORT || 3031;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatıldı`);
});
