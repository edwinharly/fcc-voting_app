import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

interface User {
  id: number,
  name: string,
  image: string
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users: User[];

  constructor(private authHttp: AuthHttp) { }

  ngOnInit() {
    this.authHttp.get('//localhost:8080/api/users')
      .map(res => res.json())
      .subscribe(
        users => this.users = users,
        error => console.log(error)
      );
  }

}
