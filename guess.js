// Game variables

let min=genMin(),
    max=genMax(),
    winningNum=getWinningNum(),
    guessesLeft=3;

// UI elements

const gameUI=document.querySelector('#game'),
    minUI=document.querySelector('.min-num'),
    maxUI=document.querySelector('.max-num'),
    guessBtnUI=document.querySelector('#guess-btn'),
    guessInputUI=document.querySelector('#guess-input'),
    messageUI=document.querySelector('.message');

//Assign UI min and max
minUI.textContent=min;
maxUI.textContent=max;

guessBtnUI.addEventListener('click',btnFunc);

function btnFunc(){
    let num=parseInt(guessInputUI.value);
    
    if(isNaN(num) || (num<min) || (num>max) ){
        msgdisp(`Please enter a number between ${min} and ${max}` , 'red');
    }
    else if(num===winningNum){
        msgdisp(`Great!!.. Your number ${num} is correct`,'green');
        guessInputUI.style.borderColor='green';
        guessInputUI.disabled=true;

        gameOver();
    }
    else{
        guessesLeft-=1;
        if(guessesLeft){
            msgdisp(`${num} is not correct.. You have ${guessesLeft} guesses Left`,'red');
        }
        else{
            guessInputUI.style.borderColor='red';
            guessInputUI.disabled=true;
            msgdisp(`Game Over!!!.. You Lost.. The correct number was ${winningNum}`,'red');
            gameOver();
        }
    }
}

function msgdisp(msg,coll){
    messageUI.style.color=coll;
    messageUI.textContent=msg;
}

function gameOver(){
    guessBtnUI.value='Play Again';
    guessBtnUI.className+='play-again';
}

//play-again

gameUI.addEventListener('mousedown',
    (e)=>{
        if(e.target.className==='play-again'){
            window.location.reload();
        }
    }
)

function genMin(){
    let minn=Math.floor(Math.random()*5+1);
    return minn;
}

function genMax(){
    let maxn=Math.floor(Math.random()*3+8);
    return maxn;
}

function getWinningNum(){
    let num=Math.floor(Math.random() * (max-min+1) + min);
    return num;
}
