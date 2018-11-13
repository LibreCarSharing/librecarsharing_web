import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { USERS } from '../../mocks/mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[]

  constructor() { }

  ngOnInit() {
    this.users = USERS;
  }

}
