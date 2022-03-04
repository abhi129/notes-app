import fs from 'fs';
const book = {
    title:"Hi abhijet",
    author: "Abhijeet"
};


const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);
const readBuffer = fs.readFileSync('1-json.json');
console.log(readBuffer.toString());
console.log(JSON.parse(readBuffer.toString()).title);