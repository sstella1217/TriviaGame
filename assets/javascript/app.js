// All are True except for the last one
$(document).ready(function(){
	// Array of Questions
	var questions = ["Dalmations are born without spots?",
     			 "There is at least one dog breed and one cat breed that is hairless?",
				 "Fresh pineapple juice is used to treat hairballs in rabbits?",
				 "Some snakes are born alive while others hatch from eggs?",
				 "Cats can be allergic to mosquito bites?",
				 "Puppies and Kittens have the same number of teeth?"];
	
	// Array of Answers			 
	var answers = [true,true,true,true,true,false];				 
	
	//Global Variables set
	
	var ansRight = 0;
	var correctAns = "";
	var trivia = "";
	var i = 0;
	var intervalId = 0;
	var number = 40;

	//calls Start Function
	start();
	//Get first question from the Array and display it in HTML
	function start() {
		
		if (i < (questions.length))	{

		trivia = questions[i];
		document.getElementById("triviaElement").innerHTML = trivia;
		
		correctAns = answers[i];
		console.log(correctAns)
		run();
		}

		else
		
		trivia = "You have answered All the Questions Correctly"	
		document.getElementById("triviaElement").innerHTML = trivia;

	};

	// Function run if True is clicked on
		$("#truChoice").click(function(){
			
			if (correctAns = true){
				ansRight++
				i++
				start()

			}
			else {

			trivia = "GAME OVER";		
			document.getElementById("triviaElement").innerHTML = trivia  
			stop();
			};
		});		

	//Function run if False is clicked on	

		$("#falChoice").click(function(){
			
			if (correctAns = false){
				ansRight++
				i++
				start()
			}
			else {

			trivia = "Sorry That Was Incorrect GAME OVER";		
			document.getElementById("triviaElement").innerHTML = trivia
			stop();  
			};
		
		});	
		
		function run() {
 		   intervalId = setInterval(decrement, 1000);
		}

		function decrement() {
    //  Decrease number by one.
    	number--;
    
     //  Show the number in the #show-number tag.
     	$("#timer").html(" " + number + " seconds");
    
   //  Once number hits one...
    		if (number === 1) {
        		$("#timer").html(" " + number + " second");
    		}
      //  Once number hits zero...
    		else if (number === 0) {
        //  ...run the stop function.
        		stop();
        	}	
        	
        
		}

		function stop() {
    		
    		clearInterval(intervalId);
		}

});		
		
			
	