var speed = 30;
var i = 0;
var add = "\nWelcome to my command line website, if its your first time please enter help to see a list of all avaible commands:\n\nUsers\\Thomas_Clipston\\Website>";
var nam = "\nUsers\\Thomas_Clipston\\Website>";
var help = "\n\n\xa0\xa0\xa0\xa0 Socials \xa0\xa0\xa0\xa0\n\xa0\xa0\xa0 -----------\n\xa0\xa0\xa0\xa0:Linkden \xa0\xa0\xa0\xa0 -Opens a link to my Linkden \n\xa0\xa0\xa0\xa0:Instagram\xa0\xa0\xa0\xa0 -Opens a link to my Instagram\n\xa0\xa0\xa0\xa0:Github\xa0\xa0\xa0\xa0 -Opens a link to my Github \n\n\xa0\xa0\xa0\xa0 Info \n\xa0\xa0\xa0 -----------\n\xa0\xa0\xa0\xa0:Contact \xa0\xa0\xa0\xa0 -Prints out my different contact info\n\xa0\xa0\xa0\xa0:Fun_Facts \xa0\xa0\xa0\xa0 -Writes a fun fact about me\n\xa0\xa0\xa0\xa0:Projects \xa0\xa0\xa0\xa0 -Shows a list of projects I have completed\n\n\xa0\xa0\xa0\xa0 Fun/Helpful sutff \xa0\xa0\xa0\xa0\n\xa0\xa0\xa0 ------------------\n\xa0\xa0\xa0\xa0 Color_change\xa0\xa0\xa0-Changes the theme\n\xa0\xa0\xa0\xa0 Clear\xa0\xa0\xa0-Clears previous entrys\n\n\nUsers\\Thomas_Clipston\\Website>";
var projects = "\n\n -C scientific calculator\xa0\xa0\xa0 -A single line calulator that has binary and unary operations\n-Python file organizer\xa0\xa0\xa0 -Creates and organizes files based on file extensions \n-Brick Breaker emulation\xa0\xa0\xa0 - An emulation of the original brick breaker game \n-Lava Jump\xa0\xa0\xa0 -A 2d game in which you must collect all the coins before the lava reaches you\n\nTo see more please go to my github page(Enter github to be taken directly)\n\n\nUsers\\Thomas_Clipston\\Website>"
var contacts = "\n\nPhone number: 226-920-5536\nEmail#1:clipstot@uwindsor.ca\nEmail#2:clashfire2@gmail.com\n\nUsers\\Thomas_Clipston\\Website>"
var Fun_Facts = [];
Fun_Facts.push("\n\n-I was in cadets\n\nUsers\\Thomas_Clipston\\Website>");
Fun_Facts.push("\n\n-I love going to the gym\n\nUsers\\Thomas_Clipston\\Website>");
Fun_Facts.push("\n\n-I have a good sense of humor\n\nUsers\\Thomas_Clipston\\Website>");
Fun_Facts.push("\n\n-My favourtie food is steak\n\nUsers\\Thomas_Clipston\\Website>");
Fun_Facts.push("\n\n-I have two dogs\n\nUsers\\Thomas_Clipston\\Website>");


function typing(){
    if (i < add.length){
      //console.log(add + add.length);
        document.getElementById("line").innerText += add.charAt(i);
        i++;
        window.scrollBy(0,50)
        setTimeout(typing, speed);
      }

}


document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && i >= add.length) {
    if(document.getElementById("in").value == "help"){//gives list of commands
      document.getElementById("line").innerText += document.getElementById("in").value;//adds what was in the input box to the line you just left
      document.getElementById("in").value = null;//emptys input box
      i = 0;
      add = help;
      typing();
    }
    else if(document.getElementById("in").value == "linkden" ||document.getElementById("in").value == "Linkden" ){
      window.open("https://www.linkedin.com/in/thomas-clipston-898a12217");
      document.getElementById("line").innerText += document.getElementById("in").value;
      document.getElementById("in").value = null;
      i = 0;
      add = nam;
      typing();
    }
    else if(document.getElementById("in").value == "Instagram" ||document.getElementById("in").value == "instagram" ){
      window.open("https://www.instagram.com/thomasclipston/");
      document.getElementById("line").innerText += document.getElementById("in").value;
      document.getElementById("in").value = null;
      i = 0;
      add = nam;
      typing();
    }
    else if(document.getElementById("in").value == "Github" ||document.getElementById("in").value == "github" ){
      window.open("https://github.com/Thomas-Clipston");
      document.getElementById("line").innerText += document.getElementById("in").value;
      document.getElementById("in").value = null;
      i = 0;
      add = nam;
      typing();
    }
    else if(document.getElementById("in").value == "fun_facts" ||document.getElementById("in").value == "Fun_facts" ){
      document.getElementById("line").innerText += document.getElementById("in").value;
      document.getElementById("in").value = null;
      i = 0;
      add = Fun_Facts[Math.floor(Math.random() * 6)];
      typing();
    }
    else if(document.getElementById("in").value == "projects" ||document.getElementById("in").value == "Projects" ){
      document.getElementById("line").innerText += document.getElementById("in").value;
      document.getElementById("in").value = null;
      i = 0;
      add = projects;
      typing();
    }
    else if(document.getElementById("in").value == "projects" ||document.getElementById("in").value == "Projects" ){
      document.getElementById("line").innerText += document.getElementById("in").value;
      document.getElementById("in").value = null;
      i = 0;
      add = projects;
      typing();
    }
    else if(document.getElementById("in").value == "Contact" ||document.getElementById("in").value == "contact" ){
      document.getElementById("line").innerText += document.getElementById("in").value;
      document.getElementById("in").value = null;
      i = 0;
      add = contacts;
      typing();
    }
    else if(document.getElementById("in").value == "Color_change" ||document.getElementById("in").value == "color_change" ){
      document.getElementById("line").innerText += document.getElementById("in").value;
      document.getElementById("in").value = null;

      if(document.getElementById("line").className == "name"){
        document.getElementById("line").className = "name2";
        document.getElementById("in").className = "input2"; 
        document.getElementById("bac").className = "back2"; 
        document.getElementById('welcome').src='welcome2.JPG'
      }
      else{
        document.getElementById("line").className = "name";
        document.getElementById("in").className = "input"; 
        document.getElementById("bac").className = "back"; 
        document.getElementById('welcome').src='welcome.JPG'
      }
      i = 0;
      add = nam;
      typing();
    }
    else if(document.getElementById("in").value == "clear" ||document.getElementById("in").value == "Clear" ){
      document.getElementById("line").innerText = null;
      document.getElementById("welcome").style.display='none';
      document.getElementById("in").value = null;
      i = 0;
      add = nam;
      typing();
    }
    else{
      i = 0;
      document.getElementById("line").innerText += document.getElementById("in").value;
      document.getElementById("in").value = null;
      add = nam;
      typing();
    }

  }
});
