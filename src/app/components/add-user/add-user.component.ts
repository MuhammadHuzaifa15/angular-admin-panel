import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeriodicElement } from '../users/users.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  user!: PeriodicElement;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  createUser() {
    this.httpClient
      .post(`https://jsonplaceholder.typicode.com/users`, this.user)
      .subscribe((data: any) => {});
  }
}
