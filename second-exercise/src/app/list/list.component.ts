import { Component, OnInit } from '@angular/core';
import { USERS, User } from '../interface/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users = USERS;
  selectedUser?: User;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
