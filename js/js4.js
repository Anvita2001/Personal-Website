if (document.getElementById("formElement")) {
  var formElement = document.getElementById("formElement");


  var feedBackList=[];
  var submissionCounter = 1

  if(localStorage.getItem('feedBackList')){
      feedBackList = JSON.parse(localStorage["feedBackList"])
      submissionCounter = feedBackList[feedBackList.length-1].entry
    }

    for(i=0; i<feedBackList.length; i++)
    {
      var row = document.getElementById("feedBackTable").insertRow();
      var cell1 = row.insertCell(0);  
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
	    var cell4= row.insertCell(3);

      cell1.innerHTML = feedBackList[i].name;
      cell2.innerHTML = feedBackList[i].skill;
      cell3.innerHTML = feedBackList[i].level;
	         cell4.innerHTML = feedBackList[i].comment;

    } 
    

  formElement.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var personName = document.getElementById("personName").value;
    var skill = document.getElementById("skill").value;
    var level = document.getElementById("level").value;
	      var comment = document.getElementById("comment").value;
    /*alert("Thanks for your feedback");*/
    addFeedback(personName, skill, level,comment);
    clearForm();
  });

  
  function addFeedback(personName, skill, level,comment){

    submissionCounter += 1;

    feedBackList.push({
        name: personName,
        skill: skill,
        level: level,
	    comment:comment
    });
  
    localStorage.setItem('feedBackList', JSON.stringify(feedBackList));

      var row = document.getElementById("feedBackTable").insertRow();
      var cell1 = row.insertCell(0);  
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
	        var cell4 = row.insertCell(3);
      cell1.innerHTML = feedBackList[feedBackList.length-1].name;
      cell2.innerHTML = feedBackList[feedBackList.length-1].skill;
      cell3.innerHTML = feedBackList[feedBackList.length-1].level;
	        cell4.innerHTML = feedBackList[feedBackList.length-1].comment;

    
  }


  function clearForm() {
    document.getElementById("personName").value = ""; 
    document.getElementById("skill").value = ""; 
    document.getElementById("level").selectedIndex = 0;
	     document.getElementById("comment").value = "";
  }

}
