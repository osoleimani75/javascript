gameWord = [{l:'k',v:0},
          {l:'a',v:0},
          {l:'n',v:0},
          {l:'g',v:0},
          {l:'r',v:0},
          {l:'o',v:0},
          {l:'o',v:0}];

var live = 6, gameDone=0;
var wrongLetters= "";

function allLetter(inputletter)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputletter.match(letters))
          return true;
      else
          return false;
      }


function checkWord(key){

    if ((live>0) && allLetter(key) && (winner == false)){
        var check = false, winner =true;
        for(var i=0; i<gameWord.length; i++)
                if (gameWord[i].l ==key){            
                    gameWord[i].v = 1;
                    check = true;
                }
                if (!check){
                    if (wrongLetters.indexOf(key)==-1){
                        live -= 1;
                        wrongLetters += key;
                    }
                    showWrongLetter(wrongLetters);
                }
                    

                if (live<=0)
                    winner = false;
                else{
                    for(var i=0; i<gameWord.length; i++)
                        if (gameWord[i].v == 0){
                            winner=false
                            break;
                        }
                }
            }
    return winner;
}

function showWrongLetter(letter){
    letters="wetcul"
        for(var i=1; i<letters.length+1; i++){
            document.getElementById("wrong").childNodes[1].childNodes[i].textContent=letters[i];
            console.log(document.getElementById("wrong").childNodes[1].childNodes[6]);
            console.log(letters);
            console.log(i);
    }


}
    test = document.getElementById("wrong").childNodes[7-live]
document.onkeyup = function (event){
    win= checkWord(event.key);
  
       if (win)
        msgGreeting(1); 
       else if ((win== false) && (live<= 0))
        msgGreeting(2);
}

