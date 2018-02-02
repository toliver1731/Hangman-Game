$(document).ready(function() {


    // Create Letter Selection 

function createList() {
  var alphaList = document.getElementById('letters');
  var ul = document.createElement('ul');
  alphaList.appendChild(ul);
  
    for(var i = 0; i <alphabet.length; i++) {
      var listItem = alphabet[i];
      var li = document.createElement('li'); 
      ul.appendChild(li);     
      li.textContent = listItem;
      console.log(listItem);

    }
}




var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaList = document.getElementById('letters');
var lives = 10;
var letterGuess = [];
var splitAnswer = [];
var underScore = [];
var revisedAnswer = [];
var indexes = [];
trueFalse = false;
var wins = 0;
var losses = 0;
var teamsGenerated = [];


// On click of one of the letters it will select

letters.addEventListener('click', function(event) {

    guess = event.target.innerHTML;
    var letterClass = event.srcElement;
    letterClass.setAttribute("class", "disabled");
    console.log(letterClass);



    console.log(guess);


    letterGuess.push(guess);
    console.log(letterGuess[letterGuess.length-1]); 


            
      for (var i = 0; i < splitAnswer.length; i++) {

        if (letterGuess[letterGuess.length-1] === splitAnswer[i]) {



          trueFalse = true;

          indexes.push(i);
    
          var underScoreSplit = underScore.split("");
          
            for (var j = 0; j < indexes.length; j++) {
              underScoreSplit[indexes[j]] = letterGuess[letterGuess.length-1];

              indexes = [];

              underScore = underScoreSplit.join("");
            }

          hold.textContent = underScore;
        
        }   
      }


      
      console.log(trueFalse);

      if (trueFalse === false) {      
          lives--;
        console.log(lives);
        // letterClass.add('inactive');
        myLives.textContent = lives; 
        hangman();
        

      } else {
        // letterClass = guess.setAttribute('class', 'test');
        trueFalse = false;
      
        
      }

      setTimeout(function() {
        winLoss ();
      }, 600);

});

// Figuring out if they have won the game!!

function winLoss() {
  if (answer.toLowerCase() === underScore.toLowerCase()) {
    document.getElementById('popup').style.visibility = "visible";
    document.getElementById('winLossComment').textContent = "Congratulations, you sure know your Sports Teams!!"; 
    changeImage();
    btnHint.setAttribute("class", "disabled");
    letters.setAttribute("class", "disabled");
    wins ++;
    console.log(wins);
    win.textContent = wins;
  } else if (lives === 0) {
    document.getElementById('popup').style.visibility = "visible";
    document.getElementById('winLossComment').innerHTML = "Study up and play again!!<br />" + "Answer:  " + answer;
    losses ++;
    console.log(losses);
    loss.textContent = losses;
    btnHint.setAttribute("class", "disabled");
    letters.setAttribute("class", "disabled");
    
  }
}

//  generate Hint associated with Answer selected

btnHint.addEventListener('click', function(event) {

    clues = event.target.innerHTML;
    document.getElementById('clue').style.color = "red";
    clue.textContent = category[teamsGenerated[teamsGenerated.length-1]][1];
    if(lives > 0) {
      lives--;
      btnHint.setAttribute("class", "disabled");
    }
    myLives.textContent = lives; 

    
    hangman();

    setTimeout(function() {
        winLoss ();
      }, 600);
    
});


//  Hangman function to draw in Canvas

function hangman () {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

// Ground
  if (lives === 9) {   
          
        ctx.beginPath();
        ctx.moveTo(280, 140);
        ctx.lineTo(10, 140);
        ctx.stroke();
      }

// Vertical
  if (lives === 8) {   
        
      ctx.beginPath();
      ctx.moveTo(25,140);
      ctx.lineTo(25,15);
      ctx.stroke();
    }

// Horizontal 
  if (lives === 7) {   
        
      ctx.beginPath();
      ctx.moveTo(25,15);
      ctx.lineTo(80,15);
      ctx.stroke();
    }

// Rope
  if (lives === 6) {   
      
      ctx.beginPath();
      ctx.moveTo(80,15);
      ctx.lineTo(80,30);
      ctx.stroke();
  }
// Head
  if (lives === 5) {   
      
      ctx.beginPath();
      ctx.arc(80,40,10,0,2*Math.PI);
      ctx.stroke();
  }

// Body
  if (lives === 4) {   
      
      ctx.beginPath();
      ctx.moveTo(80,50);
      ctx.lineTo(80,90);
      ctx.stroke();
  }

// Right Arm
  if (lives === 3) {   
      
      ctx.beginPath();
      ctx.moveTo(80,65);
      ctx.lineTo(90,75);
      ctx.lineTo(100,60);
      ctx.stroke();
  }

// Left Arm
  if (lives === 2) {   
      
      ctx.beginPath();
      ctx.moveTo(80,65);
      ctx.lineTo(70,75);
      ctx.lineTo(60,60);
      ctx.stroke();
  }

// Right Leg
  if (lives === 1) {   
      
      ctx.beginPath();
      ctx.moveTo(80,90);
      ctx.lineTo(90,105);
      ctx.lineTo(90,120);
      ctx.stroke();
  }

//  Left leg
  if (lives === 0) {   
      
      ctx.beginPath();
      ctx.moveTo(80,90);
      ctx.lineTo(70,105);
      ctx.lineTo(70,120);
      ctx.stroke();
  }
}

// Builds the page for the first time
createList();
document.getElementById("myLives").innerHTML = lives;  
document.getElementById("win").innerHTML = wins;  
document.getElementById("loss").innerHTML = losses;  

// Category of Teams by Sport

   var nflTeams = [
  ["Arizona  Cardinals", "NFC West", "http://www.nflfootballstadiums.com/images/Arizona-Cardinals-Logo.gif"],
  ["Atlanta  Falcons", "NFC South", "https://s-media-cache-ak0.pinimg.com/originals/ea/38/9e/ea389ee9a06eedb3cce2adc9a0ad6f10.png"],
  ["Baltimore  Ravens", "AFC North", "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Baltimore_Ravens_logo.svg/1280px-Baltimore_Ravens_logo.svg.png"],
  ["Buffalo  Bills", "AFC East", "http://www.tripletonline.com/bills/BillsLogo-New.gif"],
  ["Carolina  Panthers","NFC South", "http://2.bp.blogspot.com/_Lsn4gILJB4Y/TMjuNRlZqcI/AAAAAAAAABI/QBUC9f1nWN0/s1600/panthers.gif"],
  ["Chicago  Bears", "NFC North", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chicago_Bears_logo.svg/1000px-Chicago_Bears_logo.svg.png"],
  ["Cincinnati  Bengals", "AFC North", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cincinnati_Bengals.svg/1280px-Cincinnati_Bengals.svg.png"],
  ["Cleveland  Browns", "AFC North", "http://www.sportsgamblingpodcast.com/sgpod/wp-content/uploads/2017/04/Browns-Logo.png"],
  ["Dallas  Cowboys", "NFC East", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dallas_Cowboys.svg/1000px-Dallas_Cowboys.svg.png"],
  ["Denver  Broncos", "AFC West", "http://cdn.shopify.com/s/files/1/0817/3919/t/16/assets/nfl-logo-2.png?6275502595806424217"],
  ["Detroit  Lions", "NFC North", "http://i330.photobucket.com/albums/l415/mfl08/3DLogos/Lions09BasicSmall.png"],
  ["Green Bay  Packers", "NFC North", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/2000px-Green_Bay_Packers_logo.svg.png"],
  ["Houston  Texans", "AFC South", "http://img.scout.com/sites/default/files/houston_texans.png"],
  ["Indianapolis  Colts", "AFC South", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Indianapolis_Colts_logo.svg/2000px-Indianapolis_Colts_logo.svg.png"],
  ["Jacksonville  Jaguars", "AFC South", "http://content.sportslogos.net/logos/7/159/full/595.gif"],
  ["Kansas  City  Chiefs", "AFC West", "https://cdn1.uvnimg.com/dims4/default/00f88a2/2147483647/thumbnail/240x240%3E/quality/75/?url=https%3A%2F%2Fcdn2.uvnimg.com%2Fae%2Fe2%2F97d1ea9b4bd1bf7742b778b289cf%2FKansas_City_Chiefs_Logo_3x.png"],
  ["Miami  Dolphins", "AFC East", "http://weclipart.com/gimg/1CB192907D0D321F/Football_NFL_AFC_Team_Alt_Logo_Miami_Dolphins_Flordia-240x204Trans.png"],
  ["Minnesota  Vikings", "NFC North", "https://s7d2.scene7.com/is/image/Fathead/lgo_nfl_minnesota_vikings?layer=comp&fit=constrain&hei=300&wid=300&fmt=png-alpha&qlt=95,0&op_sharpen=1&resMode=bicub&op_usm=0.0,0.0,0,0&iccEmbed=0"],
  ["New  England  Patriots", "AFC East", "https://truesportrealtalk.files.wordpress.com/2015/09/patriots-3d-logo.png"],
  ["New  Orleans  Saints","NFC South", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/New_Orleans_Saints.svg/2000px-New_Orleans_Saints.svg.png"],
  ["New  York  Giants", "NFC East", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/New_York_Giants_logo.svg/2000px-New_York_Giants_logo.svg.png"],
  ["New  York  Jets", "AFC East", "http://prod.static.jets.clubs.nfl.com/nfl-assets/img/gbl-ico-team/NYJ/logos/home/large.png"],
  ["Oakland  Raiders", "AFC West", "http://prod.static.raiders.clubs.nfl.com/nfl-assets/img/gbl-ico-team/OAK/logos/home/large.png"],
  ["Philadelphia  Eagles", "NFC East", "http://www.vectorsland.com/imgd/l12508-philadelphia-eagles-logo-52932.png"],
  ["Pittsburgh  Steelers", "AFC North", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/1024px-Pittsburgh_Steelers_logo.svg.png"],
  ["Los Angeles  Chargers", "AFC West", "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/NFL_Chargers_logo.svg/1280px-NFL_Chargers_logo.svg.png"],
  ["San Francisco  Forty  Niners", "NFC West","https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/49ers_Logo.svg/460px-49ers_Logo.svg.png"],
  ["Seattle  Seahawks", "NFC West", "https://www.printyourbrackets.com/nfl-logos/seattle-seahawks-logo.png"],
  ["Los  Angeles  Rams", "NFC West", "http://gcbulldogs.com/wp-content/uploads/2017/03/Ellington-Rams.png"],
  ["Tampa  Bay  Buccaneers", "NFC South", "https://s-media-cache-ak0.pinimg.com/originals/72/c0/d8/72c0d8893ecb44a69ea86fa49c397aa8.png"],
  ["Tennessee  Titans", "AFC South", "https://s-media-cache-ak0.pinimg.com/originals/0d/1e/1d/0d1e1dc48994eb7ff90eb5685c7157a1.png"],
  ["Washington  Redskins", "NFC East", "http://prod.static.redskins.clubs.nfl.com/nfl-assets/img/gbl-ico-team/WAS/logos/home/large.png"]
];

// Setting category to NFL, until I have time to create other categories

var category = nflTeams;

// creates a random number based on length of selected category

randomNumber = Math.floor(Math.random() * category.length);
console.log(randomNumber);

// Pusshes random number to an array to store
teamsGenerated.push(randomNumber);

 function changeImage() {
    var searchPic = category[teamsGenerated[teamsGenerated.length-1]][2];
    console.log(searchPic);
    logo.setAttribute('src', searchPic);
}

function resetImage() {
  var setImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPL-bxWonw1J8XuGNCu3AtG4zfDffi2owmFQ4BOGN86swxiVh";
  logo.setAttribute('src', setImage);
}
// Selects a team by the random number generated above


var answer =  category[teamsGenerated[teamsGenerated.length-1]][0];
      console.log(answer);



      underScore = answer.replace(/[a-zA-Z]/g, "_");
      console.log(underScore);


      splitAnswer = answer.toLowerCase().split("");

      hold.textContent = underScore;

  // Create a new game but keep score 
      
// newGame.addEventListener('click', function(event){

// window.location.href = `index.html?Wins=${keepWins}&Losses=${keepLosses}`



//     // document.getElementById('popup').style.visibility = "hidden"; 
//     // resetImage();
//     // lives = 10;
//     // document.getElementById("myLives").innerHTML = lives;  
//     // btnHint.removeAttribute("class", "disabled");
//     // btnHint.setAttribute("class", "btn-info");
//     // letters.removeAttribute("class", "disabled");
//     // hold.textContent = underScore;

// });

reset.addEventListener('click', function(event){
  location.reload()




});
  

// Got code from Tarik on StackOverflow

// function getQueryVariable(variable) {
//     var query = window.location.search.substring(1);
//     var vars = query.split('&');
//     for (var i = 0; i < vars.length; i++) {
//         var pair = vars[i].split('=');
//         if (decodeURIComponent(pair[0]) == variable) {
//             return decodeURIComponent(pair[1]);
//         }
//     }
//     console.log('Query variable %s not found', variable);
// }

//     var keepWins = getQueryVariable("wins");
//     var keepLosses = getQueryVariable("losses");

});





