


class utils{

    longProcess(time, info = Date.now() ){
        return new Promise( (resolve, reject) =>{
            setTimeout( function(){
                resolve( info );
            }, time);
        });
    }

    longProcessSync(){
        let i=0;
        while( i < 1e9 ) {
            i++;
        }
    }

    showTime( hint = '' ){
        let ms = Date.now() / 1000;
        console.log( hint, ms, 'ms' );
        return ms;
    }
    
    showDiffTime( hint = '', diff = 0 ){
        let ms = Date.now() / 1000;
        console.log( hint, ((ms - diff) * 1000).toFixed(2), 'ms' );
        return ms;
    }

}

module.exports = new utils();