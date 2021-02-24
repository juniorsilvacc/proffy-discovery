// Dados
const proffys = [
    {
        name: "Júnior Silva",
        avatar: "https://avatars.githubusercontent.com/u/43589505?s=460&u=7c7159850e84526c0127a00fa34e70da1a938e4f&v=4", 
        whatsapp: "83 996719622", 
        bio: "Enstusiasta das melhores tecnologias de programação avançadas do mercado.", 
        subject: "Programação", 
        cost: "20", 
        weekday: [
            0
        ], 
        time_from: [
            720
        ], 
        time_to: [
            1220
        ]
    }
]

const subjects = [
        "Artes",
        "Biologia",
        "Ciências",
        "Educação Física",
        "Física",
        "Geografia",
        "História",
        "Matemática",
        "Português",
        "Química",
]

const weekdays = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
]

// Funcionalidades da aplicação
function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}


function pageLanding(req, res){
    res.render("index.html");
}


function pageStudy(req, res){
    const filters = req.query
    res.render("study.html", {
        proffys,
        filters,
        subjects,
        weekdays
    });
}


function pageGiveClasses(req, res){
    const data = req.query

    // Se tiver dados (data)
    // Pegando as chaves e transformando em um array [name, link...]
    const isNotEmpty = Object.keys(data).length > 0  
    if(isNotEmpty){

        data.subject = getSubject(data.subject)

        // Adicionar dados a lista de proffys
        proffys.push(data)
        // E retornar para a pagina study
        return res.redirect("/study")
    } 
    // Se não, mostrar a pagina give-classes
    res.render("give-classes.html", {
        subjects,
        weekdays
    });
}


// Servidor
const express = require('express');
const app = express();


// Configurações do nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: app,
    noCache: true,
});

// Configurações de arquivos estáticos (CSS, Scripts, Images)
app.use(express.static("public"));


// Rotas da aplicação
app.get("/", pageLanding);
app.get("/study", pageStudy);
app.get("/give-classes", pageGiveClasses);

app.listen(8888, () =>{
    console.log("App rodando!");
});