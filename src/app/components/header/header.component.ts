import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-cmp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(public userService: UserService) {
    this.userService.selectedUserSubject.subscribe();
  }
  handleDrawer = () => {
    this.newItemEvent.emit();
  };

  ngOnInit(): void {}
}
