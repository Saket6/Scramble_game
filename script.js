let question=document.querySelector('.question');
let btn_start=document.querySelectorAll('.btn')[0];
let btn_stop=document.querySelectorAll('.btn')[1];
const newQues=document.querySelector('.newQues');
const answer=document.querySelector('.inputText');
let resultRight=document.querySelector('.resultRight');
let resultWrong=document.querySelector('.resultWrong');
let next=document.querySelector('.btn2');
let play=false;



const getQuestion = ()=>
{
    const ques=["Uzumaki Naruto","Uchiha Sasuke","Goku","Picolo","Luffy","Uchiha Itachi","Eren Yeager","Okabe Rintaro","Makishima Shoko","Zoro"];
    const index=Math.floor(Math.random()*ques.length);
    // console.log(ques[index]);
    return ques[index];
}

let getZumbQues=(quesArr)=>
{
    for(let i=0;i<quesArr.length;i++)
    {
        console.log(quesArr.length);
        let j=Math.floor(Math.random()*quesArr.length);
        // console.log(`value of j is ${j}`);

        //swap to make it jumbled
        let temp=quesArr[i];
        quesArr[i]=quesArr[j];
        quesArr[j]=temp;
    }

    return quesArr;
}
let newquestion;
btn_start.addEventListener('click',function ()
{   
 
   
    if(play)
    {
        console.log("playing");
        
        if(answer.value===newquestion)
        {
            resultWrong.classList.add('hidden');
            resultRight.classList.remove("hidden");
            console.log("correct answer");
            
            resultRight.innerHTML="Congrats!🎉 Correct Answer";
            btn_start.innerHTML="Next Question";
            play=false;

        }
        else
        {
            resultRight.classList.add('hidden');
            resultWrong.classList.remove("hidden");
            console.log("wrong answer");
            resultWrong.innerHTML="😥Wrong Answer. Try again";
        }
    }
    else
    {
        answer.value="";
        resultRight.classList.add('hidden');
        resultWrong.classList.add('hidden');
        newquestion=getQuestion(); //original ques
        console.log(newquestion.split(""));
        let splitQues=newquestion.split("");
        // console.log(`split ques length: ${splitQues.length}`);
        let zumbled=getZumbQues(splitQues);
        let ques=zumbled.join("");  //zumbled ques
        console.log(ques);
        newQues.innerHTML= ques;
        question.classList.remove("hidden");
        answer.classList.remove("hidden");
        btn_stop.classList.remove('hidden');
        btn_start.innerHTML="Guess"; 
        play=true;
    }
   
}
)

btn_stop.addEventListener('click',function ()
{
    play=false;
    btn_stop.classList.toggle('hidden');
    btn_start.innerHTML="Start";
    question.classList.add('hidden');
    answer.classList.add('hidden');
    answer.value='';
    resultRight.classList.add('hidden');
})