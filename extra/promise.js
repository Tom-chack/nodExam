const {longProcess, showTime, showDiffTime} = require('./utils');


async function readAll( startTime ){

    let T1 = showTime('>> F1 START: ');
    let f1 = await longProcess(2000);
    showDiffTime('-- F1 diff: ', T1);

    let T2 = showTime('>> F2 START: ');
    let f2 = await longProcess(2000);
    showDiffTime('-- F2 diff: ', T2);

    let T3 = showTime('>> F3 START: ');
    let f3 = await longProcess(2000);
    showDiffTime('-- F3 diff: ', T3);

    let end = showTime('END: ');
    showDiffTime('-------------------------------------------TOTAL: ', T1);
}


///////////////////////////////////////////////////////////////////////////

let START = showTime('=============================================START: ');
console.log('Im doing some work....');
readAll();
showDiffTime('I finished my work in TOTAL: ', START);
showTime('=============================================END: ');






