let fs = require('fs');
let readfile = fs.createReadStream('../inputdata/FoodFacts.csv', 'utf-8');
data = '';
readfile.on('data', function(chunk){
  data = data + chunk;
});
readfile.on('end', function(){
  let line = data.split('\n');
  let head = line[0].split(',');
  let allContent = [];
  let saltcontent =  Array(9).fill(0);
  let sugarcontent =  Array(9).fill(0);

  let countryIndex = head.indexOf('countries_en');
  let saltIndex = head.indexOf('salt_100g');
  let sugarIndex = head.indexOf('sugars_100g');

  let countries = ['Netherlands', 'Canada', 'United Kingdom', 'United States', 'Australia', 'France', 'Germany', 'Spain', 'South Africa'];
  var northEurope = ['United Kingdom', 'Denmark', 'Sweden', 'Norway'];
  var centralEurope = ['France', 'Belgium', 'Germany', 'Switzerland', 'Netherlands'];
  var southEurope = ['Portugal', 'Greece', 'Italy', 'Spain', 'Croatia', 'Albania'];

  var allCountry = [];
  var allC;

  for(let i = 1; i<line.length; i++)
  {

    let content = line[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    //allContent.push(content);
    allC = content[countryIndex];
    allCountry.push(allC);
    let flag1 = countries.includes(content[countryIndex]);
    if(flag1){
      let index = countries.indexOf(content[countryIndex]);
      let saltvalue = content[saltIndex];
      let sugarvalue = content[sugarIndex];

if(saltvalue == '')
saltvalue = 0;

if(sugarvalue == '')
sugarvalue = 0;

saltcontent[index] = saltcontent[index] + parseFloat(saltvalue);
sugarcontent[index] = sugarcontent[index] + parseFloat(sugarvalue);
    }

  }
  console.log(JSON.stringify(allCountry);
//  fs.writeFile('../outputdata/part1.json',JSON.stringify(allContent), 'utf-8');
});
