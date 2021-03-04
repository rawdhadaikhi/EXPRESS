const verify =( req ,res ,next) => {

        var today = new Date();
        var day = today.getDay();
        var time = today.getHours();
        const fs = require ('fs')

        let dataR=""
        fs.readFile('./views/Error.html',(err,data)=>{
            dataR=data.toString()
        })

     if(time <= 9 || time >=21|| day ==0 || day ==6){
         res.send('<h1>Oups !!! Sorry... we are only available from monday to friday, 9.a.m to 7.p.m</h1>')
     }else {
         next();
     }

    }
module.exports = verify;
