const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect  DB

mongoose.connect('mongodb://localhost/pcat-test-db')

// create schema

const PhotoSchema = new Schema({
    title: String,
    description: String


})

const Photo = mongoose.model('Photo', PhotoSchema)

// create a photo

//  Photo.create({
//     title:  'Photo title 2',
//     description: 'Photo description 2 lorem ipsum'

//  });

 // read Photo

//  Photo.find({},(err,data)=>{
//     console.log(data);

//  })

// update Photo
// const id = '62b9ab1fa180361b4ff57bb8';
// Photo.findByIdAndUpdate(
//     id,{
//         title:"Photo Title 12 updated",
//         description:"Photo description 12 updated",
//     },
//     {
        
//             new: true
//         },
        
    
//     (err, data) =>{
//         console.log(data)
//     }
// )

// delete a photo
const id = '62b9ab322f8dd2cbfd6b12cf';
Photo.findByIdAndDelete(id,(err, data)=>{
    console.log('Photo is removed..')

})