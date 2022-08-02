import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  fetchTodo() {
    this.authService.getTodos().subscribe((mytodos) => {
      console.log(mytodos);
    });
  }
}
