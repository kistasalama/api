const express =require('express');
const app =  express();

app.listen(3500, function(){
    console.log('serveur allume avec succes!');
});
app.get('/subnet',function(req,res){
 res.send('solution numerique des vos entreprises');   
});

app.get('/isig',function(req,res){
res.send('Fier et plein de dignite');  
});


