let fs = require('fs');
let readfile = fs.createReadStream('../inputdata/FoodFacts.csv', 'utf-8');
data = '';
readfile.on('data', function(chunk) {
  data = data + chunk;
});
readfile.on('end', function() {
  let line = data.split('\n');
  let head = line[0].split(',');
  fs.writeFile('../outputdata/header.json', JSON.stringify(head), 'utf-8');
});
