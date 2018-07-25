var express = require('express');
const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const fs = require('fs')


const AWS = require('aws-sdk');
const Busboy = require('busboy');

const BUCKET_NAME = 'seta-image-test';
const IAM_USER_KEY = 'xxxx';
const IAM_USER_SECRET = 'xxxx';
function uploadToS3(file, res) {
 let s3bucket = new AWS.S3({
   accessKeyId: IAM_USER_KEY,
   secretAccessKey: IAM_USER_SECRET,
   Bucket: BUCKET_NAME,
 });
 s3bucket.createBucket(function () {
  var tmp_path = file.path;
	image = fs.createReadStream(tmp_path);
   var params = {
    Bucket: BUCKET_NAME,
    Key: file.name,
    Body: image,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg',
    ACL: 'public-read',
   };
  //  console.log(params, 'params');
  //  console.log(image, 'file');
   s3bucket.upload(params, function (err, data) {
    if (err) {
     console.log('error in callback', err);
    }
    console.log('result',data);
    res.json({url: data.Location});
   });
 });
}

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(formidable());

app.post('/', (req, res)=> {
    // console.log('request',req.body);
    uploadToS3(req.files.upload, res);
    // res.json(result);
});

app.listen(4444, ()=> console.log('server is running at 4444'));
