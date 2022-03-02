const quizDB=[
    {
        question:"Q1: What is the full form of HTML?",
        a:"Hello To My Lord",
        b:"Hey Text Markup Language",
        c:"HyperText Makeup Language",
        d:"HyperText Markup Language",
        ans:"ans4"
    },{
        question:"Q2: What is the full form of css?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        ans:"ans1"
    },{
        question:"Q3: What is the full form of HTTP",
        a:"HyperText transfer product",
        b:"HyperText test product",
        c:"HyperText transfer protocol",
        d:"Hey transfer product",
        ans:"ans3"
    },{
        question:"Q4: What is full form of js?",
        a:"JavaSuper",
        b:"JavaScript",
        c:"JustScript",
        d:"JavaSet",
        ans:"ans2"
    }
];


const question =document.querySelector('.question');
const option1 =document.querySelector('#option1');
const option2 =document.querySelector('#option2');
const option3 =document.querySelector('#option3');
const option4 =document.querySelector('#option4');

const submit =document.querySelector('#submit');
const sco=document.querySelector('#h3-class');

const answers= document.querySelectorAll(".answer");
const showscore=document.querySelector("#showScore");
let count=0;
let score=0;
const loadQuestrion=()=>{
   const questionlist=quizDB[count];
   question.innerHTML=questionlist.question;
   option1.innerHTML=questionlist.a;
   option2.innerHTML=questionlist.b;
   option3.innerHTML=questionlist.c;
   option4.innerHTML=questionlist.d;

}
loadQuestrion();

const getCheckAnswer= () =>{
    let answer;
    answers.forEach((curAnsEle)=>{
      if(curAnsEle.checked){
          answer=curAnsEle.id;
      }
    });
      return answer;
}
submit.addEventListener('click',()=> {
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[count].ans){
        score++;
    }
    count++;
    if(count<quizDB.length){
        loadQuestrion();

    }else{
        sco.innerHTML="Your Scored " +score +"/"+ quizDB.length;
        showscore.classList.remove('showArea');
    }
});
