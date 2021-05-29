const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');


//module
module.exports = {

    index(req,res){
        const city= req.query.city;
        return res.render('index', { city });
    },
    async orphanage(req,res){
        const id= req.query.id;

        try {
            const db = await Database;
            const results= await db.all(`SELECT * FROM orphanages WHERE id="${id}"`);
            const orphanage= results[0];

           
            orphanage.images = orphanage.images.split(","); //transforma string em array separado por ,
            orphanage.firstImage= orphanage.images[0];

            orphanage.open_on_weekends == '0'? orphanage.open_on_weekends=false : orphanage.open_on_weekends=true;

            return res.render('orphanage', { orphanage });    
        } catch (error) {
            console.log(error);
            return res.send('erro no banco de dados');
        }
    },
    async orphanages(req,res){
        //colocar orphanage pelo banco
        try {
            const db = await Database;
            const orphanages= await db.all(`SELECT * FROM orphanages`);
            return res.render('orphanages', { orphanages });
        } catch (error) {
            console.log(error);
            return res.send('erro no banco de dados');
        }
        
    },
    createOrphanage(req,res){
            return res.render('create-Orphanage');
    },
    async saveOrphanage(req,res){
        const fields= req.body; 

        //verify if all fields have a value
        if(Object.values(fields).includes('')){
            return res.send('todos os campos devem ser preenchidos');
        }

        try {
            const db=await Database;
            await saveOrphanage(db, {
            lat: fields.lat,
            lng: fields.lng,
            name: fields.name,
            about: fields.about,
            whatsapp: fields.whatsapp,
            images: fields.images.toString(),
            instructions: fields.instructions,
            opening_hours: fields.opening_hours,
            open_on_weekends: fields.open_on_weekends
        })
        } catch (error) {
            console.log(error);
            return res.send('erro no banco de dados')
        }
        //redirecionamento
        return res.redirect('/orphanages');

    }
}