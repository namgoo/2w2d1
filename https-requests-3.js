


var https = require('https');


function getAndPrintHTML (options) {

  /* Add your code here */
  var chunk = '';
  /* Add your code here */
  https.get(options, function(response) {

      response.setEncoding('utf8');

      // the callback is invoked when a 'data' chucnk is received
      response.on('data', function(data) {
        chunk += (data +'\n')
      })

      // (the `end` of the stream)
      response.on('end', function() {
        console.log(chunk);
      })

    });
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)