const rollButton = document.querySelector( '#roll-button' );
const player1Dice = document.querySelector( '.player1' );
const player2Dice = document.querySelector( '.player2' );
const announcement = document.querySelector( 'h1' );

const diceList = [ 'img/dice1.png' , 'img/dice2.png' , 'img/dice3.png' , 'img/dice4.png' , 'img/dice5.png' , 'img/dice6.png' ];

rollButton.addEventListener( 'click', ()=>{
        player1Dice.classList.add( 'dice1Animation' );
        player2Dice.classList.add( 'dice2Animation' );

        const [ diceIndexValue1, diceIndexValue2 ] = [ Math.floor( Math.random() * 6 ), Math.floor( Math.random() * 6 )]; /*array destructuring */

        // set the 'src' attribute to the corresponding image in diceList

        /* diceList[diceIndexValue1] and diceList[diceIndexValue2] are strings representing paths to images. */
        /* playerDice.src is updated to this path. */
        player1Dice.src = diceList[diceIndexValue1];
        player2Dice.src = diceList[diceIndexValue2];

        player1Dice.addEventListener( 'animationend', () => { /* waits for animation to end, but I can just retrigger anytime.  */
            player1Dice.classList.remove( 'dice1Animation' ); /*removes animation class to be retriggered once complete.  */
          });
        
          player2Dice.addEventListener( 'animationend', () => {
            player2Dice.classList.remove( 'dice2Animation' );
          });

          setTimeout( () =>{
            if ( diceIndexValue1 > diceIndexValue2 ){
                announcement.textContent = 'Player One Wins!!';
            } else if ( diceIndexValue1 < diceIndexValue2){
                announcement.textContent = 'Player Two Wins!!';
            } else {
                announcement.textContent = 'Draw!!';
            }
          }, 2500)



})