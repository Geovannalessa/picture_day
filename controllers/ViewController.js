const ViewController = {
    monstraHome:(req,res)=>{
        res.render('home.ejs')
    },
    monstraHistory:(req,res)=>{
        res.render('history.ejs')
    }
}

module.exports = ViewController;