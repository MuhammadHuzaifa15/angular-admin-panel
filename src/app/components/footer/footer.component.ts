import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { PeriodicElement } from '../users/users.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public count!: number;
  constructor(private userService: UserService) {
    this.userService.selectedUserCount.subscribe((item) => {
      this.count = item;
    });
  }
  ngOnInit(): void {}
}
