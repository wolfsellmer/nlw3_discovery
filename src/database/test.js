
const Datababe = require('./db');

const saveOrphanage = require('./saveOrphanage');

Datababe.then(async db => {


    await saveOrphanage(db,
        {
            
            lat:"-23.1864166",
            lng:"-45.8880975",
            name: "Lar das Meninos",
            about: "Preste assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp:"121212121211",
            images:[
                "https://images.unsplash.com/photo-1601180964280-88c506668304?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours: "Horário de visita Das 8:00 as 18:00",
            open_on_weekends:"0"
        })
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

        // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
        // console.log(orphanage)

        // console.log(await db.run('DELETE FROM orphanages WHERE id ="7"'))
})