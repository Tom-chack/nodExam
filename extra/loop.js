
let myObject = {
    from: 1,
    to: 5,
    [Symbol.iterator](){
        return {
            current: this.from,
            last: this.to,
            next(){
                if( this.current <= this.last ){
                    return {done: false, value: this.current++ }
                } else {
                    return {done:true}
                }
            }
        }
    }
};

// console.log('Start');
// for ( let value of myObject ){
//     console.log(value);
// }
// console.log('End');


let myObjectAsync = {
    from: 1,
    to: 5,
    [Symbol.asyncIterator](){
        return {
            current: this.from,
            last: this.to,
            async next(){

                await new Promise( resolve => setTimeout( resolve, 1000 ) );

                if( this.current <= this.last ){
                    return {done: false, value: this.current++ }
                } else {
                    return {done:true}
                }
            }
        }
    }
};

// console.log('Start');
// (async () => {
//     for await (let value of myObjectAsync) { 
//        console.log(value);
//     }
// })();
// console.log('End');


//Generators///////////////////////////////////////////////////

async function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}
  
// (async () => {
//     let generator = generateSequence(1, 5);
//     for await (let value of generator) {
//         console.log(value);
//     }
// })();


// Synch generator with composition yield*
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
    // 0..9
    yield* generateSequence(48, 57);
    // A..Z
    yield* generateSequence(65, 90);
    // a..z
    yield* generateSequence(97, 122);
}
  
// let str = '';
// for(let code of generatePasswordCodes()) {
//     str += String.fromCharCode(code);
// }
// console.log(str);; // 0..9A..Za..z


