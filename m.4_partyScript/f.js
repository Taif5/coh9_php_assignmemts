 // Security Gaurd, allows people to enter to a party, only people between 18 and 35 years old can enter the party

 const minAge =18;
 const maxAge =35;
 let userAge ;

 //Loop through number of people
do {

    // ask each user about his/her age.
  userAge=prompt("how old are you");
  userAge=parseInt(userAge);
  if (isNaN (userAge) ) 
  {
     continue; 
     //skipped the loop if the user entered words.
  }


  // if younger than 18, print: you are too young
  if(userAge<minAge)
  {
    alert("You are too young!");
    }

    // if older than 35, print: you are too old
    else if(userAge > maxAge)
    {
        alert("you are too old!");
    }

    else
    {
      let userName=prompt("What is your name?");
      alert("Hi" +userName + ",welcome to the party!");
    }
   
 // if between 18 and 35, ask the user about his/her name and welcome the user to the party.
   
}while (confirm("is there anyone else?"));
 