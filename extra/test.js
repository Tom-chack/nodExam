const {longProcess, longProcessSync, showTime, showDiffTime} = require('./utils');

async function test(){
    let a = await longProcess(2000);
    let b = await longProcess(2000);
    console.log('Async Done!');
}

function testSync(){
    let a = longProcessSync(1000);
    let b = longProcessSync(2000);
    console.log('Sync Done!');
}

async function testDependeces(){

    let start = showTime('>>>>>>>>>>START');

    let a = await longProcess(1000, 'a_value'); // insert user info - return ID
    let b = await longProcess(1000, 'b_value'); // update stat in db

    let c = await longProcess(1000, 'c_value'); // requires a - send new user email with ID
    let d = await longProcess(1000, 'd_value'); // insert avatar in db - return avatar ID
    let e = await longProcess(1000, 'e_value'); // upoad avatar in file system

    let f = await longProcess(1000, 'f_value'); // requires d and a --- create relationshiip user ID <> avatar ID in db

    console.log('Async Dependeces Done!');
    showDiffTime('TOTAL: ', start);
    showTime('>>>>>>>>>>END');
}

async function testDependecesFast(){

    let start = showTime('>>>>>>>>>>START');

    let a = longProcess(1000, 'a_value'); // insert user info - return ID
    let b = longProcess(1000, 'b_value'); // update stat in db

    let c = longProcess(1000, 'c_value'); // requires a - send new user email with ID
    let d = longProcess(1000, 'd_value'); // insert avatar in db - return avatar ID
    let e = longProcess(1000, 'e_value'); // upoad avatar in file system

    let f = longProcess(1000, 'f_value'); // requires d and a --- create relationshiip user ID <> avatar ID in db

    await a;
    await b;
    await c;
    await d;
    await e;
    await f;

    console.log('Async Dependeces Done!');
    showDiffTime('TOTAL: ', start);
    showTime('>>>>>>>>>>END');
}


async function testDependecesFastArgs(){

    let start = showTime('>>>>>>>>>>START');

    let a = longProcess(1000, 'a_value'); // insert user info - return ID
    let b = longProcess(1000, 'b_value'); // update stat in db

    //await a;
    //await b;
    let a_b = await Promise.all([a, b]); //Promise.allSettled(iterable);
    console.log(a_b);

    let c = longProcess(1000, 'c_value'); // requires a - send new user email with ID
    let d = longProcess(1000, 'd_value'); // insert avatar in db - return avatar ID
    let e = longProcess(1000, 'e_value'); // upoad avatar in file system

    // await c;
    // await d;
    // await e;
    let c_d_e = await Promise.all([c, d, e]); //Promise.allSettled(iterable);
    console.log(c_d_e);

    let f = longProcess(1000, 'f_value'); // requires d and a --- create relationshiip user ID <> avatar ID in db

    await f;

    console.log('Async Dependeces Done!');
    showDiffTime('TOTAL: ', start);
    showTime('>>>>>>>>>>END');
}


async function printFiles () {
    const files = await getFilePaths();
    const promises = files.map((file) => fs.readFile(file, 'utf8'))
    const contents = await Promise.all(promises)
    contents.forEach(console.log);
  }


async function xLoop(){
    
    let arr = ['a', 'b', 'c', 'd', 'f'];
    let res = [];
    for( let x of arr ){
        res.push( longProcess(1000, 'do: ' + x) );
    }
    console.log( await Promise.all(res) );
}

async function xLoopAsync(){
    let arr = ['a', 'b', 'c', 'd', 'f'];
    let res = [];
    for ( let x of arr ){
        let a =  await longProcess(1000, 'do: ' + x);
        console.log(a);
    }
}

let start = showTime('=================START');

//test();
//testSync();
//testDependeces();
//testDependecesFast();
//testDependecesFastArgs();
//xLoop();
xLoopAsync();

showDiffTime('TOTAL: ', start);
showTime('=================END');