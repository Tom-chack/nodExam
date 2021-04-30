const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB and Model /////////////////////////////////
const dbLink = 'mongodb+srv://sunny:test@cluster0.owpq5.mongodb.net/Test?retryWrites=true&w=majority';
mongoose.connect(dbLink,{ useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
   if(err) throw err; console.log(`Connected!`);
})
const schema = mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
});
const _USER = mongoose.model('User', schema, 'bg2019_artyom_user');

// Routers /////////////////////////////////////
app.get('/', (req, res) => {
    res.render('index', {message: ''});
});

app.post('/register', async (req, res) => {
    try{
        await _USER.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        });
        console.log('Created!');
        res.render('index', {message: 'Registered Successfully'});
    } 
    catch(e) {
        res.render('index', {message: e.message});
    }
});

app.listen(8007);
