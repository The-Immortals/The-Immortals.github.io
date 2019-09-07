function getAnswer() {

var value = document.getElementById("test").value;

  if(value == "Y" || value == "y"){
  //If is true
  alert("Yes /*parameters*/");
  //If is false
  alert("That is incorrect /*parameters*/");
  }
  
  else if(value == "N" || value == "n"){
  //See above
  }
  
  else {
  alert("We don't know what you mean, please try again.");
  }
}
//This is the function for the test.
