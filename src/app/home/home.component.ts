import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeText: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.homeText = "WELCOME TO ESD WEB-APP";
  }

}
