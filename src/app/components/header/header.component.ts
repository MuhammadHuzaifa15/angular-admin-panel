import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cmp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = '';
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() {}
  handleDrawer = () => {
    this.newItemEvent.emit();
  };
  ngOnInit(): void {}
}
