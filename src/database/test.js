const Database = require('./db');
const createProffy = require('./createProffy');

Database.then((db) => {
    // Inserir dados
    proffyValue = {
        name: "Júnior Silva",
        avatar: "https://avatars.githubusercontent.com/u/43589505?s=460&u=7c7159850e84526c0127a00fa34e70da1a938e4f&v=4", 
        whatsapp: "83 996719622", 
        bio: "Enstusiasta das melhores tecnologias de programação avançadas do mercado.", 
    }
    classValue = {
        subject: "Programação", 
        cost: "20", 
        // o proffy id virá pelo banco de dados
    }
    classScheduleValues = [
        // class_id virá pelo banco de dados, após cadastrar a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // createProffy(db, {proffyValue, classValue, classScheduleValue}) 

    // Consultar os dados inseridos
})