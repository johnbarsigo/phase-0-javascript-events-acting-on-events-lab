const dodger =  document.getElementById( "dodger" );

// dodger.style.backgroundColor = '#FF5820';
// dodger.style.bottom = '100px';

// document.addEventListener ( 'keydown', function (event){
//     if ( event.key === 'ArrowLeft' ){
//         const leftNumbers = dodger.style.left.replace( 'px', '' );
//         const left = parseInt ( leftNumbers, 10 );

//         dodger.style.left = `${ left - 1 }px`;
//     }
// });

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace( "px", "" );
    const left1 = parseInt ( leftNumbers, 10 );

    if ( left1 > 0 ){
        dodger.style.left = ` ${ left1 - 10 }px`;
    }
}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace( "px", "" );
    const left2 = parseInt ( leftNumbers, 10 );

    if ( left2 < 360 ){
        dodger.style.left = ` ${ left2 + 10 }px`;
    }
}

document.addEventListener ( "keydown", function ( event ){
    if ( event.key === "ArrowLeft" ){
        moveDodgerLeft();
        console.log ( dodger.style.left );
    }
    else if ( event.key === "ArrowRight" ){
        moveDodgerRight();
        console.log ( dodger.style.left );
    }
    return dodger.style.left;
});