const questions =[
    {
        ques: "how many local government do we have in nigeria?",
        ans: "19"
    },
    {
        ques: "in which year did nigeria get independence",
        ans: "1960"
    },
    {
        ques: "how many rivers do we have in nigeria?",
        ans: "2"
    },
    {
        ques: "which year was apple-1 created",
        ans: "1976"
    },
    {
        ques: "when did nigeria won her first african cup of nation",
        ans: "1995"
    },
    {
        ques: "which year did derick rose won the mvp",
        ans: "2001"
    },
];
 let Question_space=document.querySelector(".Quiz-questions");
 let Input=document.querySelector(".input-space");
 let btn=document.querySelector(".btn");
 let main=document.querySelector(".main")
 let boDy=document.getElementsByTagName("body")[0]
 let backBtn=document.querySelector(".back")
 let Quiz_num=0;
 let correct=0;
 let wrong=0;
 questions.sort(()=>{
    return 0.5 - Math.random()
}) 
  function load(){
    let Question=questions[Quiz_num];
    Question_space.innerHTML=Question.ques
  }
  function getValue(){
    let input_value=Input.value;
    return input_value;
  }
//   back button
   backBtn.addEventListener("click",()=>{
    load()
     Quiz_num--;
     if(Quiz_num<0){
        Quiz_num=0;
        backBtn.style.display="none";
     }
   })
//   next button
  btn.addEventListener("click",()=>{
    
    inputValue=getValue()
    if(inputValue===""){
        Input.style.border="2px solid red";
        // Input.setAttribute("placeholder", "please input answer")
       
    }else if(inputValue===questions[Quiz_num].ans){
        correct++;
         Quiz_num++;
         Input.style.border="1px solid green"
     }
     if(Quiz_num < questions.length){
       load()
    }else{
       let Div=document.createElement("div");
         main.classList.add("hide");
         Div.classList.add("sco")
         Div.innerHTML=`Final Scores = ${correct}`;
         boDy.appendChild(Div)
     }
     if(Quiz_num >=1){
      backBtn.style.display="block";
   }
    Input.value=""
    

 })
  load()