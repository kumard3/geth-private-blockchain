var express = require('express');
var cookieParser = require('cookie-parser');
var Web3 = require('web3');
var contract = require('truffle-contract');
var path = require('path');

var provider = new Web3.providers.HttpProvider("http://localhost:8543");

var app = new express();
var port = 3000;

app.listen(port, function(err) {
    if (typeof(err) == "undefined") {
        console.log("Your application is running on port " + port +"\nView the application in your favourite browser using url: http://127.0.0.1:3000");
    }
});

app.set('view engine', 'ejs');

var ContractJSON = require(path.join(__dirname, 'build/contracts/HelloWorld.json'));

var Contract = contract(ContractJSON);
Contract.setProvider(provider);

var Res;

app.get('/', function(req, result) {
    
    Contract.deployed().then(function(instance) {
    
        
        instance.GetMessage.call().then(function(res, err) {
            getname = res.toString();
        	console.log("\nRetrieving data from Blockchain:- " + res.toString());
            
            result.render('display', {
                name: getname
            });
            
        });
    });     
});
