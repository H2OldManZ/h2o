
module.exports = function(app, io) {


  app.get('/premier', function(req, res){
    const file = `${__dirname}/kurt/Premier.rar`;
    res.download(file); // Set disposition and send it.
});

app.get('/aftereffects', function(req, res){
  const file = `${__dirname}/kurt/AfterEffects.rar`;
  res.download(file); // Set disposition and send it.
});

app.get('/lightroom', function(req, res){
const file = `${__dirname}/kurt/Lightroom.rar`;
res.download(file); // Set disposition and send it.
});

app.get('/audition', function(req, res){
const file = `${__dirname}/kurt/Audition.rar`;
res.download(file); // Set disposition and send it.
});


};
