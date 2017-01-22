let fs = require('fs');
let readfile = fs.createReadStream('../inputdata/FoodFacts.csv', 'utf-8');
data = '';
readfile.on('data', function(chunk) {
  data = data + chunk;
});
readfile.on('end', function() {
  let line = data.split('\n');
  let head = line[0].split(',');

  let countries = ['Netherlands', 'Canada', 'United Kingdom', 'United States', 'Australia', 'France', 'Germany', 'Spain', 'South Africa'];
  let countryIndex = head.indexOf('countries_en');
  let saltIndex = head.indexOf('salt_100g');
  let sugarIndex = head.indexOf('sugars_100g');

  console.log(countryIndex + '/' + saltIndex + '/' + sugarIndex); //33/116/102
  //fs.writeFile('../outputdata/header.json', JSON.stringify(head), 'utf-8');
});
