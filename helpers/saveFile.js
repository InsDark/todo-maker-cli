import fs from 'fs';

const file = './db/data.json'

export const saveFile =  (data) => {
    fs.writeFileSync(file, JSON.stringify(data))
}

export const readDB =  () => {
    if(!fs.existsSync(file)) return null;
     
    const data = fs.readFileSync(file, {encoding: 'utf8'});
    const dataParse = JSON.parse(data);
    return dataParse
} 