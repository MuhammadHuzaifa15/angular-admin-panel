import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  username!: string;
  password!: string;
  title = 'Admin Panel';
  clickme() {
    localStorage.setItem(
      'user',
      JSON.stringify({ username: this.username, password: this.password })
    );
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}
}
