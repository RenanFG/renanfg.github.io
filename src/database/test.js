const Database = require('./db');
const saveOrpahange = require('./saveOrphanage');

Database.then(async (db) => {
    /*
    const orphanage={
        lat:"-27.2195391",
        lng:"-49.6585356",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"11155432",
        images: [
            "https://images.unsplash.com/photo-1570570626315-95c19358f053?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1562790519-76a1627de754?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas Das 13h até 8h",
        open_on_weekends: "0",
    }
    await saveOrpahange(db, orphanage)
    */
     const selectedOrphanages= await db.all(`SELECT * FROM orphanages`);
    //const orphanages= await db.all(`SELECT * FROM orphanages WHERE id=1 `);
 console.log(selectedOrphanages);
})


