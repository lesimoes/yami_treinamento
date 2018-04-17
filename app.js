//IMPORTA O MODULO EXPRESS
var express = require('express');

//ATRIBUI O MODULO A UMA VARIAVEL
var app = express();

//APONTA O PATH DA ONDE ESTA O MODULE PESSOA
var pessoa = require('./pessoa');

//SETA UMA ROTA PARA MINHA APLICAÇÃO
app.get('/',function(req,res){
	res.send('tamo dentro');
});

//SETA UMA OUTRA ROTA PARA MINHA APLICAÇÃO
app.get('/pessoa/:id',function(req,res){
	pessoa.getNameById(req.params.id,function(response){
		res.send(response);
	});
});

//SETA A PORTA A SER USADA PELO NODE
app.listen(3000);
