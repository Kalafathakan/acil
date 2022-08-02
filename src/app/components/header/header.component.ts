import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  subTitle: string = 'My sub title';
  imagePath = 'assets/logo.png';
  @Input() total: number = 0;
  constructor() {}

  ngOnInit(): void {}

  getSubTitle() {
    return this.subTitle;
  }
}
