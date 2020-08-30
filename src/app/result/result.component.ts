import { ManageQuestionsService } from './../manage-questions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  score:number;
  constructor(public activatedRoute: ActivatedRoute, public router:Router,
    manageQuestion: ManageQuestionsService) {
      this.score=manageQuestion.calculateScore()
     }

  ngOnInit(): void {
    // this.score=parseInt(this.activatedRoute.snapshot.paramMap.get("marks"));
  }

  clickEventHandler()
  {
    this.router.navigateByUrl('/login');
  }

}
