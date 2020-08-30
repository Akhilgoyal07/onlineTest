import { Question } from './question';
import { Injectable } from '@angular/core';

@Injectable()

export class ManageQuestionsService {
  qArray:Question[] = new Array();
  // selectAnsArray = new Array();
  constructor() { 
    this.qArray.push(new Question(1,"The Dampier-Hodges line is related to which of the following","Bay of Cambay","Palk Strait","Andaman and Nicobar Islands","Sundarbans","Sundarbans", ""));
    this.qArray.push(new Question(2,"Which of the following regions in India represents lowest altitude","Kuttanad region in Kerala","Saurashtra Region in Karnataka","Coromandel of Tamil Nadu","Malabar region of Kerala","Malabar region of Kerala", ""));
    this.qArray.push(new Question(3,"“Satmala Hills” are located in which among the following states","Gujarat","Uttar Pradesh","Maharasthra","Rajasthan","Maharasthra", ""));
    this.qArray.push(new Question(4,"In Which state of India , maximum Diamond Mines are found?","Bihar & Uttar Pradesh","Uttar Pradesh & Jharkhand","Madhya Pradesh & Andhra Pradesh","Uttar Pradesh & Maharastra","Uttar Pradesh & Maharastra", ""));
    this.qArray.push(new Question(5,"Which among the following rivers rises from the Milam Glacier in Kumaon Himalaya","Sharda","Ramganga","Gori Ganga","Yamuna","Yamuna", ""));
    this.qArray.push(new Question(6,"Which country has passed a bill to promote the legacies of Gandhi and Martin Luther King Jr","India","USA","UK","Austrailia","Austrailia", ""));
    this.qArray.push(new Question(7,"The Indian Government has imposed safeguard duty on which product till July 2021, to protect domestic manufacturers","Medical devices",
    "Solar cells", "Textile", "Electronics","Electronics", "")); 
    this.qArray.push(new Question(8,"The territory of Porus who offered strong resistance to Alexander was situated between the rivers of    ", "Sutlej and Beas",
    "Jhelum and Chenab", "Ravi and Chenab", "Ganga and Yamuna","Ganga and Yamuna", ""));
    this.qArray.push(new Question(9,"Tripitakas are sacred books of","Buddhists","Hindus","Jains","None","Buddhists", ""));
    this.qArray.push(new Question(10,"The theory of economic drain of India during British imperialism was propounded by",	"Jawaharlal Nehru",
    "Dadabhai Naoroji", "R.C. Dutt", "M.K. Gandhi","M.K. Gandhi", ""));

  }
  getAllQuestions()
  {
    return this.qArray;
  }
  getQuestionById(qId:number)
  {
    var pos=this.qArray.findIndex(item=>item.qNo==qId);
    return this.qArray[pos];
  }
  saveAnswer(qId:number, userAnswer:string)
  {
    this.qArray[qId-1].selectedAnswer=userAnswer;
    // this.selectAnsArray.push({qNo:qId, userAnswer:userAnswer});
    // console.log(this.selectAnsArray);
  }
  // getAllAnswer()
  // {
  //   return this.selectAnsArray;
  // }
  calculateScore()
  {
    var score=0;

    
    for(let i=0; i<this.qArray.length; i++)
    {
      console.log(this.qArray[i].selectedAnswer)
      console.log(this.qArray[i].correctAns)
      if(this.qArray[i].selectedAnswer==this.qArray[i].correctAns)
      {
        score++;
      }
    }

    // for(let i=0; i<this.qArray.length; i++)
    // {
    //   var tempObj=this.selectAnsArray.find(item=>item.qNo === this.qArray[i].qNo);
      
    //   if(this.qArray[i].correctAns===tempObj.userAnswer)
    //   {
    //     score++;
    //   }
      
    // }
    return score;
  }
}
