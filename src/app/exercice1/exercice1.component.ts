import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  title: string = "my title";
  inputType: string = "date";
  clickCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.clickCount ++;
  }

}
