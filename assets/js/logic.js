

    var words;          // Array of words
    var Category=0;       // Selected catagory
    var word;           // selected word
    var live=6;           // count of live
    var winner=false;
    var wrongLetters ="";
    // ---- Get a word from data 
    function fetchData (typeOfWord){
        var dataWords = [];
        dataWords[0] = ["Mammal", "Rabbit", "Rhinoceros", "Hippopotamus", "Kangaroo"
                   ,"Cheetah", "Rhinoceros", "Greyhound", "Porcupine", "Tamarin"];
        dataWords[1] = ["Diana Rose", "Laura Branigan", "David Bowie", "Elton John", "Lionel Richie"
                   ,"Donna Summer", "Whitney Stone", "Kim Wilde" , "George Michael", "Mariah Carey"];

         
        var choosedWord = dataWords[typeOfWord][Math.floor(Math.random() * dataWords[typeOfWord].length)];
        return choosedWord;
        

    }

    // ---- check key for letter
    function isLetter(inputletter)
      { 
            var letters = /^[A-Za-z]+$/;
            if(inputletter.match(letters))
                return true;
            else
                return false;
      }


    function compileWord(word){
        var newword=[];
        for(var i=0; i<word.length; i++)
            newword[i] = {l:word[i].toLowerCase(),v:0};
        return newword;
    } 

    
    //------ Show word letter
    function showWordLetter(letter){
        var list = document.getElementById("newWord");
        while (list.hasChildNodes()) {   
            list.removeChild(list.firstChild);
          }

        for(var i=0; i<letter.length; i++){
            var iDiv = document.createElement("div");
            iDiv.className="letterHolder";
            var h1 = document.createElement("h1");
            if (letter[i].v==1)
                h1.textContent=letter[i].l;  
            iDiv.appendChild(h1);
            document.getElementById("newWord").appendChild(iDiv);  
        }    

    }
    //------ Show wrong letter
    function showWrongLetter(letter){

        var list = document.getElementById("wrongLetters");
        while (list.hasChildNodes()) {   
            list.removeChild(list.firstChild);
          }

        for(var i=0; i< 6; i++){
            var iDiv = document.createElement("div");
            iDiv.className="letterHolder";
            var h1 = document.createElement("h1");
            h1.textContent=letter[i]  
            iDiv.appendChild(h1);
            document.getElementById("wrongLetters").appendChild(iDiv);  
        }   
    }

    //------ reset game 
    function resetGame(){
        if ((live<=0)||(winner==true)){
            winner = false;
            live = 6;    
        }
        wrongLetters="";
        hangman(0);
        var list = document.getElementById("wrongLetters");
        while (list.hasChildNodes()) {   
            list.removeChild(list.firstChild);
          }

        for(var i=0; i< 6; i++){
            var iDiv = document.createElement("div");
            iDiv.className="letterHolder";
            var h1 = document.createElement("h1");
            iDiv.appendChild(h1);
            document.getElementById("wrongLetters").appendChild(iDiv);  
        }
        var msg = document.getElementById("msgGreeting");
        msg.textContent= "";

    }



function message(num){
    if (num==1){
        var msg = document.getElementById("msgGreeting");
            msg.textContent= "congratulations";
            msg.className="msgCongras";
            var audio = new Audio("sound/claps.mp3");
            audio.play();
                }
    else {
        var msg = document.getElementById("msgGreeting");
            msg.textContent= "GameOver!";
            msg.className="msgGameOver";
                // ------------- play sound game over
            var audio = new Audio("sound/gameover1.mp3");
            audio.play();
            
    }
}



      // ---- Start Game 
      function startGame(){
            resetGame();
            word = fetchData(Category);
            var gameWord = compileWord(word);
            showWordLetter(gameWord);
            document.onkeyup = function(event){
                var check=false;
                var key = event.key; 


                if ((live>0) && (isLetter(key)) && (winner == false)){
                    for(var i=0; i<gameWord.length; i++)   // check letter in word
                        if (gameWord[i].l == key){
                            gameWord[i].v = 1;
                            check= true;
                            showWordLetter(gameWord);
                        }
                        
                    if (!check){
                        live -=1;
                        wrongLetters += key;
                        showWrongLetter(wrongLetters);
                        hangman(live+1);
                        if (live<=0) 
                        {
                            message(2);
                            winner = false;
                            return 0;
                        } 
                    } 
                    j=0;
                    for(var i=0; i<gameWord.length; i++)   // check letter in word
                        if (gameWord[i].v == 1)
                            j +=1;

                    if (j== gameWord.length){
                        message(1);
                        winner= true;   
                        return 0;
                    }
                    
                }
                

            }
        }

      


