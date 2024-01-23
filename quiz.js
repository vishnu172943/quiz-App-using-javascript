const questionObj1 = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      answers: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?"
    };
    const questionObj2 = 
    {
      category: 'days',
      id: 'qa-2',
      correctAnswer: 'seven',
      answers: ['Two', 'Three ', 'seven', 'Five'],
      question:
        "How many days in a week?"
    };
    const questionOb3 = 
    {
      category: 'cricket',
      id: 'qa-3',
      correctAnswer: 'six',
      answers: ['Two', 'six ', 'Four', 'Five'],
      question:
        "How many balls in a over?"
    };
    const questionObj4= 
    {
      category: 'cricket',
      id: 'qa-4',
      correctAnswer: 'Three',
      answers: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many worldcups india won?"
    };
    const questions=[questionObj1,questionObj2,questionOb3,questionObj4];
    var updatedScore=0,i=0;

 const questionDiv=document.getElementById("question");
 const options=document.getElementById("options");
 const option1=document.getElementById("option1");
 const option2=document.getElementById("option2");
 const option3=document.getElementById("option3");
 const option4=document.getElementById("option4");
 const score=document.getElementById("score");
 const next=document.getElementById("next")

 questionDiv.textContent=questions[i].question;
 option1.textContent=questions[i].answers[0];
 option2.textContent=questions[i].answers[1];
 option3.textContent=questions[i].answers[2];
 option4.textContent=questions[i].answers[3];
 option1.addEventListener("click", () => {
  let ans = option1.textContent; 
  if (ans.toLowerCase().trim() === questions[i].correctAnswer.toLowerCase().trim()) {
   updatedScore++;
} else {
    updatedScore=updatedScore-0.25;
}
score.innerHTML=`score :${updatedScore}`;

  });
  option2.addEventListener("click", () => {
    let ans = option2.textContent; 
    if (ans.toLowerCase().trim() === questions[i].correctAnswer.toLowerCase().trim()) {
     updatedScore++;
  } else {
      updatedScore=updatedScore-0.25;
  }
  score.innerHTML=`score :${updatedScore}`;
  
    });
    option3.addEventListener("click", () => {
      let ans = option3.textContent; 
      if (ans.toLowerCase().trim() === questions[i].correctAnswer.toLowerCase().trim()) {
       updatedScore++;
    } else {
        updatedScore=updatedScore-0.25;
    }
    score.innerHTML=`score :${updatedScore}`;
    
      });
      option4.addEventListener("click", () => {
        let ans = option4.textContent; 
        if (ans.toLowerCase().trim() === questions[i].correctAnswer.toLowerCase().trim()) {
         updatedScore++;
      } else {
          updatedScore=updatedScore-0.25;
      }
      score.innerHTML=`score :${updatedScore}`;
      
        });

 next.addEventListener('click',()=>{
  i++;
  if(i==4){
    questionDiv.innerHTML="Thank You";
    options.innerHTML=" ";
    return;
  }
  questionDiv.textContent=questions[i].question;
  option1.textContent=questions[i].answers[0];
  option2.textContent=questions[i].answers[1];
  option3.textContent=questions[i].answers[2];
  option4.textContent=questions[i].answers[3];
   
})
 


