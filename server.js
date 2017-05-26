var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000; //ang const parehas lang ng var ang pinagkaiba lang ang const hndi pde palitan ng value

app.use(function (req, res, next) { //kung https ililipat sa https kc ung https may bayad
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});
//paggumagamit ng const common convention is use UPPERCASE
app.use(express.static('public'));


app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
