function result(){
    var score = 0;
    var result = document.getElementById("result");
    var marks = document.getElementById("score");

    var quiz = document.getElementById("quiz")
    var rslt = document.getElementById("rslt")
    

    var q1_ans = document.getElementById("q1-1")
    if (q1_ans.checked === true){
        score++;
    }


    var q2_ans = document.getElementById("q2-3")
    if (q2_ans.checked === true){
        score++;
    }
   

    var q3_ans = document.getElementById("q3-3")
    if (q3_ans.checked === true){
        score++;
    }


    var q4_ans = document.getElementById("q4-4")
    if (q4_ans.checked === true){
        score++;
    }




    if (score === 0 || score === 1){
        result.innerHTML = ("Result: <br><br> Sorry You are failed!")
        marks.innerHTML = "Your total Scores are "+score + " out of 4 "
    }

   

    if (score === 2 || score === 3 ){
        result.innerHTML = "Result: <br><br> Good you have passed!"
        marks.innerHTML = "Your total Scores are "+score + " out of 4 "
    }



 if (score === 4 ){
        result.innerHTML = "Result: <br><br> Excellent! You got highest marks."
        marks.innerHTML = "Your total Scores are <b>"+score + "</b> out of <b> 4 </b>"
    }
    quiz.className = "hidden";
    rslt.className = "content";
    // console.log(quiz[0], rslt[0])
  
    
}
