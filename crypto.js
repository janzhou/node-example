var filename = process.argv[2];
var crypto = require('crypto');
var fs = require('fs');

//ciphers
var ciphers = crypto.getCiphers();
console.log("ciphers: " + ciphers); // ['AES-128-CBC', 'AES-128-CBC-HMAC-SHA1', ...]

//hashes
var hashes = crypto.getHashes();
console.log("hashes: " + hashes); // ['sha', 'sha1', 'sha1WithRSAEncryption', ...]

//sha1
var shasum = crypto.createHash('sha1');

var s = fs.ReadStream(filename);
s.on('data', function(d) {
  shasum.update(d);
});

s.on('end', function() {
  var d = shasum.digest('hex');
  console.log(filename + ': ' + d);
});
