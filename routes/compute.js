var express = require('express');
var router = express.Router();
var value;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
    value=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(value == 0)
      value=Math.random()
    res.write('Math.log2 applied to '+value+" is "+Math.log2(value)+"\n");
    res.write('Math.cosh applied to '+value+" is "+Math.cosh(value)+"\n");
    res.end('Math.floor applied to '+value+" is "+Math.floor(value));
 });

module.exports = router;
