function userLanguages(users) {
  for(var i=0; i<users.length; i++) {
    var text="";
    var text2="";
    
    text += users[i].fname + " " +users[i].lname + " knows ";
    text2 += users[i].fname + " " + "is also interests in ";
    
    for(var j=0; j<users[i].languages.length; j++) {
      if(j<users[i].languages.length-1) {
        text += users[i].languages[j] + ",";
      } else {
        text += users[i].languages[j] + ".";
      }
    }
    
    var keys = Object.values(users[i].interests);
    for (var l=0; l<keys.length; l++) {
      for(var n=0; n<keys[l].length; n++)
        if(l==keys.length-1 && n==keys[l].length-1) {
          text2 += "and " + keys[l][n] + ".";
        } else {
          text2 += keys[l][n] + ",";
        }
    }
    console.log(text);
    console.log(text2);
  }
}

users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]

userLanguages(users);

