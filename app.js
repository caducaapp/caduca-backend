const http = require('http');
var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = 3000;

var dividasAtivas = [
    {
        data: "22/04/2005",
        valor: "2.500,00",
        empresaDivida: "Casas Bahia",
        recuperadora: "Hoepers",
        id: "1",
        cliente: "123.123.123-04",
        propostas: [
            {
                valorParcela: "250,00",
                quantidadeParcela: 10,
                recuperadora: "Hoepers",
                codOferta: 1
            },
            {
                valorParcela: "125,00",
                quantidadeParcela: 20,
                recuperadora: "Hoepers",
                codOferta: 2
            }
        ]
    },
    {
        data: "01/09/2011",
        valor: "4.800,00",
        empresaDivida: "Ponto Frio",
        recuperadora: "Hoepers",
        id: "2",
        cliente: "123.123.123-04",
        propostas: [
            {
                valorParcela: "200,00",
                quantidadeParcela: 30,
                recuperadora: "Hoepers",
                codOferta: 1
            },
            {
                valorParcela: "1.000,00",
                quantidadeParcela: 5,
                recuperadora: "Hoepers",
                codOferta: 2
            }
        ]
    }
]

app.get('/', function (req, res) {
    res.send({
        response: "OK"
    });
});

app.get('/caduca/dividas-ativas', function (req, res) {
    res.send({
        dividasAtivas: dividasAtivas
    });
});

app.get('/caduca/dividas-pagas', function (req, res) {
    var dividasPagas = [
        {
            data: "22/04/2008",
            dataPagamento: "01/12/2020",
            valorDivida: "10.500,00",
            valorPago: "2.800,00",
            empresaDivida: "Pernambucanas",
            recuperadora: "Hoepers",
            id: "3",
            cliente: "123.123.123-04"
        },
        {
            data: "22/04/2001",
            dataPagamento: "01/12/2020",
            valorDivida: "1.500,00",
            valorPago: "120,00",
            empresaDivida: "Americanas",
            recuperadora: "Hoepers",
            id: "4",
            cliente: "123.123.123-04"
        }
    ]

    res.send({
        dividasPagas: dividasPagas
    });
});

app.get('/caduca/dividas-ativas/:id', function (req, res) {
    var id = req.params.id;

    var contains = false;

    dividasAtivas.forEach(element => {
        if (element.id == id) {
            res.send({
                divida: element
            });
            contains = true;
        }
    });


    if (contains == false) {
        res.send({
            cliente: "123.123.123-04",
            divida: "DIVIDA NÃO ENCONTRADA"
        });
    }
});

app.get('/caduca/educacao-financeira-list', function (req, res) {


    res.send({
        links: [
            {
                url: "https://www.youtube.com/watch?v=SiIztrwfg1s",
                pontuacao: 10
            },
            {
                url: "https://www.youtube.com/watch?v=dSLhykOui3Y",
                pontuacao: 20
            },
            {
                url: "https://www.youtube.com/watch?v=SiIztrwfg1s&list=PLrfk0nlDFiXNUt9zGWoiTTzwb5OqjXu-1",
                pontuacao: 80
            }
        ]
    });

});





http.createServer(app, function (req, res) {
    console.log(`Server running at http://${hostname}:${port}/`);
}).listen(3000);

