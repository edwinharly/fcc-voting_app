import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  polls = [
    {
      pollId: 'dummyId1',
      title: 'dummy1'
    },
    {
      pollId: 'dummyId2',
      title: 'dummy2'
    },
    {
      pollId: 'dummyId2',
      title: 'dummy2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
