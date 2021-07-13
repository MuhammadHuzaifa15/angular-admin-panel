import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
export interface PeriodicElement {
  name: string;
  email: string;
  phone: number;
  website: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}
  title = 'Admin Panel';
  isDrawerOpen = false;
  date = new Date('DD-MM-YYYY');
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [];

  ngOnInit() {
    this.getAllUsers();
  }

  toggleDrawer = () => {
    this.isDrawerOpen = !this.isDrawerOpen;
  };

  onSubmit = (v: NgForm) => {
    console.log(`v`, v);
  };

  getAllUsers = async () => {
    await this.userService
      .getAllUsers()
      .subscribe((data: PeriodicElement[]) => {
        this.dataSource = data;
      });
  };

  setSelectedUser = (item: PeriodicElement) => {
    this.userService.selectedUser(item);
  };

  addUser = () => {
    this.router.navigate(['/add-user']);
  };
}
