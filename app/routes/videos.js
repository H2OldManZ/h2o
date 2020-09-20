
var path = require('path');
var fs = require('fs');

module.exports = function(app) {



        app.get('/emergency', function(req, res) {   //For emergency livestream
  		    res.sendFile(path.join(__dirname, '/emergency', 'stream.html'));
        });





app.get('/lastweekvid-poster', function(req, res) {


		res.sendFile(path.join('/share/websites/h2o/public/livestreams/sundays/lastweek/', 'lastweek-poster.png'));
	});



app.get('/lastweekvid', function(req, res) {
const path = '././public/livestreams/sundays/lastweek/lastweek.mp4'
const stat = fs.statSync(path)
const fileSize = stat.size
const range = req.headers.range

if (range) {
const parts = range.replace(/bytes=/, "").split("-")
const start = parseInt(parts[0], 10)
const end = parts[1]
? parseInt(parts[1], 10)
: fileSize-1

const chunksize = (end-start)+1
const file = fs.createReadStream(path, {start, end})
const head = {
'Content-Range': `bytes ${start}-${end}/${fileSize}`,
'Accept-Ranges': 'bytes',
'Content-Length': chunksize,
'Content-Type': 'video/mp4',
}

res.writeHead(206, head)
file.pipe(res)
} else {
const head = {
'Content-Length': fileSize,
'Content-Type': 'video/mp4',
}
res.writeHead(200, head)
fs.createReadStream(path).pipe(res)
}
})


app.get('/sept-13-2020-poster', function(req, res) {


		res.sendFile(path.join('/share/websites/h2o/public/livestreams/sundays/sept-13-2020/', 'sept-13-2020-poster.png'));
	});



app.get('/Sept-13-2020', function(req, res) {
const path = '././public/livestreams/sundays/sept-13-2020/sept-13-2020.mp4'
const stat = fs.statSync(path)
const fileSize = stat.size
const range = req.headers.range

if (range) {
const parts = range.replace(/bytes=/, "").split("-")
const start = parseInt(parts[0], 10)
const end = parts[1]
? parseInt(parts[1], 10)
: fileSize-1

const chunksize = (end-start)+1
const file = fs.createReadStream(path, {start, end})
const head = {
'Content-Range': `bytes ${start}-${end}/${fileSize}`,
'Accept-Ranges': 'bytes',
'Content-Length': chunksize,
'Content-Type': 'video/mp4',
}

res.writeHead(206, head)
file.pipe(res)
} else {
const head = {
'Content-Length': fileSize,
'Content-Type': 'video/mp4',
}
res.writeHead(200, head)
fs.createReadStream(path).pipe(res)
}
})

};
