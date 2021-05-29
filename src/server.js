//import dependencies 
const express = require('express');
const path = require('path');
const pages= require('./pages.js'); 

//express start
const server = express();
server
        //utilizar body da rec
      .use(express.urlencoded({ extended:true }))
     
      //utilizando arquivos estaticos
      .use(express.static('public'))
       //configurar template views
      .set('views', path.join(__dirname, 'views'))
      .set('view engine', 'hbs')
      //route creation
      .get('/', pages.index)
      .get('/orphanage', pages.orphanage)
      .get('/orphanages', pages.orphanages)
      .get('/create-orphanage', pages.createOrphanage)
      .post('/save-orphanage', pages.saveOrphanage)


//server on
server.listen(5500)
