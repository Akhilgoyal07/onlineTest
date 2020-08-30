import { ManageQuestionsService } from './../manage-questions.service';
import { Question } from './../question';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  currentQNo: number;
  qArray:Question[] = new Array();
  selectedRadio:number;
  marks:number;
  constructor(public activatedRoute:ActivatedRoute,  public router: Router,
    public manageQuestion: ManageQuestionsService) {
      this.selectedRadio=-1;
      this.marks=0;
      this.qArray=manageQuestion.getAllQuestions();
      // this.qArray.push(new Question(1,"BA stands for","Bachelor of Arts","Btech of Arts","Business Administration","None of these",1));
      // this.qArray.push(new Question(2,"CA stands for","Cause of Account","Clear Account","Character of Account","Chartered Accountant",4));
      // this.qArray.push(new Question(3,"OS stands for","Open System","Operating System","Octal Syatem","None of the above",2));
      // this.qArray.push(new Question(4,"LAN stands for","Local Area Network","Local Air Network","Large Area Network","None of the above",1));
      // this.qArray.push(new Question(5,"FBI stands for","Foreign Bureau of Investigation","Famous Bureau of Investigation","Federal Bureau of Investigation","False Bureau of Investigation",3));
      // this.qArray.push(new Question(6,"HCL stands for","High Computers Limited","House Computers Limited","Human Computers Limited","Hindustan Computers Limited",4));
      // this.qArray.push(new Question(7,"IB stands for","Intelligence Bureau","Intelligence Boss","Inert Bureau","International Bureau",1));
      // this.qArray.push(new Question(8,"IPL stands for","Internation Premier League","Indian Prime League","Indian Premier League","None of the above",3));
      // this.qArray.push(new Question(9,"IQ stands for","Intelligent Question","Intelligence Quotient","International Quotient","International Question",2));
      // this.qArray.push(new Question(10,"WAN stands for","Wide Area Network","Waste Area Network","Wide Air Network","Waste Air Network",1));
  }

  ngOnInit(): void {
    this.currentQNo = parseInt(this.activatedRoute.snapshot.paramMap.get("qId")); 
  }

  nextEventHandler()
  {
    this.currentQNo = parseInt(this.activatedRoute.snapshot.paramMap.get("qId"));
    var temp="option" +(this.selectedRadio);
    var userSelectedAnswer= this.qArray[this.currentQNo-1][temp];
    // console.log(userSelectedAnswer, this.qArray[this.currentQNo-1].correctAns);
    
    this.manageQuestion.saveAnswer(this.currentQNo, userSelectedAnswer);
    
    // if(this.selectedRadio==this.qArray[this.currentQNo-2].correctAns)
    // {
    //   this.marks++;
    // }
    this.selectedRadio=-1;
    this.currentQNo++;
    if(this.qArray[this.currentQNo-1].selectedAnswer==this.qArray[this.currentQNo-1].option1)
    {
      this.selectedRadio=1;
    }
    else if(this.qArray[this.currentQNo-1].selectedAnswer==this.qArray[this.currentQNo-1].option2)
    {
      this.selectedRadio=2;
    }
    else if(this.qArray[this.currentQNo-1].selectedAnswer==this.qArray[this.currentQNo-1].option3)
    {
      this.selectedRadio=3;
    }
    else if(this.qArray[this.currentQNo-1].selectedAnswer==this.qArray[this.currentQNo-1].option4)
    {
      this.selectedRadio=4;
    }


    this.router.navigateByUrl('/test/'+this.currentQNo);
  }

  previousEventHandler()
  {
    this.currentQNo = parseInt(this.activatedRoute.snapshot.paramMap.get("qId"));
    var temp="option" +(this.selectedRadio);
    var userSelectedAnswer= this.qArray[this.currentQNo-1][temp];
    this.manageQuestion.saveAnswer(this.currentQNo, userSelectedAnswer);

    this.selectedRadio=-1;
    this.currentQNo--;
    if(this.qArray[this.currentQNo-1].selectedAnswer==this.qArray[this.currentQNo-1].option1)
    {
      this.selectedRadio=1;
    }
    else if(this.qArray[this.currentQNo-1].selectedAnswer==this.qArray[this.currentQNo-1].option2)
    {
      this.selectedRadio=2;
    }
    else if(this.qArray[this.currentQNo-1].selectedAnswer==this.qArray[this.currentQNo-1].option3)
    {
      this.selectedRadio=3;
    }
    else if(this.qArray[this.currentQNo-1].selectedAnswer==this.qArray[this.currentQNo-1].option4)
    {
      this.selectedRadio=4;
    }
    
    this.router.navigateByUrl('/test/'+this.currentQNo);
  }

  flipQuestionEventHandler(p:number)
  {
    this.currentQNo = parseInt(this.activatedRoute.snapshot.paramMap.get("qId"));
    var temp="option" +(this.selectedRadio);
    var userSelectedAnswer= this.qArray[this.currentQNo-1][temp];
    this.manageQuestion.saveAnswer(this.currentQNo, userSelectedAnswer);

    this.selectedRadio=-1;
    this.currentQNo=p;
    if(this.qArray[this.currentQNo-1].selectedAnswer==this.qArray[this.currentQNo-1].option1)
    {
      this.selectedRadio=1;
    }
    else if(this.qArray[this.currentQNo-1].selectedAnswer==this.qArray[this.currentQNo-1].option2)
    {
      this.selectedRadio=2;
    }
    else if(this.qArray[this.currentQNo-1].selectedAnswer==this.qArray[this.currentQNo-1].option3)
    {
      this.selectedRadio=3;
    }
    else if(this.qArray[this.currentQNo-1].selectedAnswer==this.qArray[this.currentQNo-1].option4)
    {
      this.selectedRadio=4;
    }
    this.router.navigateByUrl('/test/'+this.currentQNo);
  }

  submitEventHandler()
  {
    // if(this.selectedRadio==this.qArray[this.currentQNo-2].correctAns)
    // {
    //   this.marks++;
    // }
    var temp="option" +(this.selectedRadio);
    var userSelectedAnswer= this.qArray[this.currentQNo-1][temp];
    // console.log(userSelectedAnswer, this.qArray[this.currentQNo-1].correctAns);
    this.manageQuestion.saveAnswer(this.currentQNo, userSelectedAnswer);
    this.router.navigateByUrl('/result');
  }
  changeEventHandler(p:number)
  {
    this.selectedRadio=p;
  }

}
