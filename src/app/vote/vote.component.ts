import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

   no_match = 4;
   player1 = "#player1";
   player2 = "#player2"
   no_round = 1;
   no_jury = 3;
   score1 = 0;
   score2 = 2;

  constructor() { }

  ngOnInit() {
  }

}
