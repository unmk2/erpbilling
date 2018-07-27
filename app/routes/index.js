module.exports = (app)=>{

    app.get('/',(req,res)=>{
        var x = 2;
        res.render('index',{name:x});
    })

};