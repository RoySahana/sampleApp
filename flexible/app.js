/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START app]
const express = require('express');
var url = require('url');
//var fs = require('fs');

const app = express();

app.get('/api', (req, res) => {
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(req.url);
	var q = url.parse(req.url, true).query;
	res.write("</br>");
	var name = q.candidatename;
	/*fs.writeFile('1.txt',name,function(err){
		if(err)throw err;
		console.log("saved");
	});*/
	console.log(name);
	res.end(name);
  //res.status(200).send('Hello, world Siyona 1234567!').end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
