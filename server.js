//require express
const express = require('express');
// invoke express
const app = express();
// declare port 
const port = 5000;
// require path
const path = require('path');
// invoke routes
const router = express.Router();



// // require middleware 
var verify = require('./middleware');

//  // invoke method middleware
app.use(verify);


app.use(express.static('views'));
//*************************************************************************** */
// router.get('/', (req, res,next) =>{
//     res.sendFile(path.join(__dirname, './views/index.html'));
//    next();
// })

// // go to services page
// router.get('/*', (req, res,next) =>{
//     res.sendFile(path.join(__dirname, './views/Services.html'));
//    next()
// })

// //go to contact page
// router.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, './views/ContactUs.html'));
   
// })

// //redirect error page
// router.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, './views/Error.html'));
// })
//*********************************************************************** */

app.listen(port,(err)=>{
    err ? console.log(err) : console.log('the server is runnig on port 5000..')
  
})
