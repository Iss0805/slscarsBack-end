const express = require('express');
const cors = require('cors');

const routerUsuarios = require('./routes/routes_Usuario');
const routerCarros = require('./routes/routes_Carros');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', routerUsuarios);
app.use('/', routerCarros);



app.listen(5490, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:5490');
});

