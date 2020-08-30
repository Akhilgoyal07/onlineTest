export class Question {
    constructor(public qNo:number, public qText:string, public option1:string, public option2:string, 
        public option3:string, public option4:string, public correctAns:string, public selectedAnswer:string){}
}
