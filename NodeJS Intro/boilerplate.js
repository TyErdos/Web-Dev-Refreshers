const fs = require('fs');
console.log(fs);

const folderName = process.argv[2] || 'Project';


// fs.mkdir('Dogs', {recursive: true}, (err) => 
// {
//     console.log("In the callback")
//     if(err) throw err;
// })

try
{
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/placeholder.html`)
fs.writeFileSync(`${folderName}/placeholder.js`)
fs.writeFileSync(`${folderName}/placeholder.css`)
}
catch(err)
{
    console.log("Something went wrong");
    console.log(err);
}


// console.log("I come after make directory in the file")