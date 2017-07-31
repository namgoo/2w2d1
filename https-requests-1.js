var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    // the callback is invoked when a 'data' chucnk is received
    response.on('data', function(data) {
      console.log(data)
    })

    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    })

  });

}

getAndPrintHTMLChunks()