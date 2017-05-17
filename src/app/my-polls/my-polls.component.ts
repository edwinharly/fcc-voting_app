import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-polls',
  templateUrl: './my-polls.component.html',
  styleUrls: ['./my-polls.component.css']
})
export class MyPollsComponent implements OnInit {

  myPolls = [
    {
      pollId: 'MYdummyId1',
      title: 'MYdummy1'
    },
    {
      pollId: 'MYdummyId2',
      title: 'MYdummy2'
    },
    {
      pollId: 'MYdummyId2',
      title: 'MYdummy2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
