function fetchData (typeOfWord){
    var words = [];
    words[0] = ["Mammal", "Rabbit", "Rhinoceros", "Hippopotamus", "Kangaroo"
               ,"Cheetah", "Rhinoceros", "Greyhound", "Porcupine", "Tamarin"];
    words[1] = ["Diana Rose", "Laura Branigan", "David Bowie", "Elton John", "Lionel Richie"
               ,"Donna Summer", "Whitney Stone", "Kim Wilde" , "George Michael", "Mariah Carey"]
    return words[typeOfWord];
}

function msgGreeting(msg){
    text = document.getElementById("msgGreeting");
    if (msg==2){
       text.textContent = "GameOver!";
       text.style = "color: red";
    }
    else if(msg == 1)
    {
        text.textContent = "congratulations!";
        text.style = "color: green"; 
    }
    else if (msg==0)
        text.textContent = "";
}
function generateWord(){
    var words=fetchData(0);
    var chooseWord = Math.floor(Math.random() * words.length);

    console.log(chooseWord);
    console.log(words[chooseWord]);
    console.log(words[chooseWord].length);
    for(var i=0; i<words[chooseWord].length; i++){
        var letter = document.createElement('h1');
        letter.className= "letter";
        letter.classList("letter")="display: none;"
        letter.textContent=words[chooseWord][i];


        var iDiv = document.createElement('div');
        iDiv.id="letterHolder";
        iDiv.className= "letterHolder";
        iDiv.appendChild(letter);
        document.getElementById("newWord").appendChild(iDiv);
    }
}
//https://codepen.io/cathydutton/pen/ldazc

function cleanPage(){
    var list = document.getElementById("newWord");
    while (list.hasChildNodes()) {   
        list.removeChild(list.firstChild);
      }
}

function startGame(){
    cleanPage();
    generateWord();
    document.onkeyup =  function(event){



}

}

//-----------------------------------------------------------------------//
msgGreeting(0);