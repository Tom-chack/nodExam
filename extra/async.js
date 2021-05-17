const fs = require('fs/promises');
const {showTime, showDiffTime} = require('./utils');



let files = ['./files/f1.txt', './files/f2.txt', './files/f3.txt'];

async function readAll(){

    let T1 = showTime('>> F1 START: ');
    let f1 = await fs.readFile( files[0] );
    showDiffTime('-- F1 diff: ', T1);

    let T2 = showTime('>> F2 START: ');
    let f2 = await fs.readFile( files[1] );
    showDiffTime('-- F2 diff: ', T2);

    let T3 = showTime('>> F3 START: ');
    let f3 = await fs.readFile( files[2] );
    showDiffTime('-- F3 diff: ', T3);

    let end = showTime('END: ');
    showDiffTime('-------------------------------------------TOTAL: ', T1);
}




readAll();






