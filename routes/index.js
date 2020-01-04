var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});

module.exports = router;


var glob = require('glob');
 
glob('*/sysfile/.xlxs', function (err, files) {
 
    if (err) {
 
        console.log(err);
 
    } else {
 
        // a list of paths to javaScript files in the current working directory
        console.log(files);
 
    }
 
});