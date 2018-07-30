module.exports = (app)=>{

    app.get('/lab',(req,res)=>{
        res.render('lab');
    })

}