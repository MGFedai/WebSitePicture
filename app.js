const express = require("express");
const mongoose = require('mongoose');
const ejs =require('ejs');
const path = require("path");
const Photo = require('./models/Photo');
const app = express();

// connect  DB

mongoose.connect('mongodb://localhost/pcat-test-db');

//TEMPLATE ENGİNE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static('public')); // Static dosyaları koyacağımız klasörü seçtik
app.use(express.urlencoded({ extended: true })); // Body parser okuyoruz
app.use(express.json()); // Body parser dönüştürüyoruz
// ROUTES
app.get("/", async (req, res) => {
  const photos = await Photo.find({})
  // dosyayo içeri çektik
  // express static middleware kullandık
  //res.sendFile(path.resolve(__dirname, "tmp/index.html"));
  res.render('index',{
    photos
      })
});
app.get("/about", (req, res) => {
  res.render('about')
});
app.get("/add", (req, res) => {
  res.render('add')
});
app.post('/photos', async (req, res) => { // async - await yapısı kullanacğız.
  await Photo.create(req.body)// body bilgisini Photo modeli sayesinde veritabanında dökümana dönüştürüyoruz.
  res.redirect('/')
});
app.get('/', async (req, res) => {
  const photos = await Photos.find({})
  res.render('index', {
    photos
  })});



const port = 5000;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatıldı`);
});
