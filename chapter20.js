var regexp = process.argv[2];
regexp = new RegExp(regexp);
console.log('args', process.argv)
console.log('regexp', regexp);

var file = process.argv[3];
console.log('file', file);

var {statSync, readdirSync, readFileSync} = require("fs");

const read_file = (file) => {
  let content;
  try {
    content = readFileSync(file, "utf8");
  }
  catch (e) {
    throw e;
  }
  return content.toString();
}

function searchTerm(file){
  let stats = statSync(file);
  if (stats.isDirectory()) {
    for (let f of readdirSync(file))
      searchTerm(file+ '/' +f);
  }else {
    const content = read_file(file);
    if(regexp.test(content)) console.log(file);
  }  
}

searchTerm(file);
