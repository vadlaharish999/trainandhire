import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  public lenght: number = 0;

  public result: number = 0;

  constructor() {}

  ngOnInit(): void {}

  area(){
    this.result=this.lenght*this.lenght;
  }
  perimeter(){
    this.result=this.lenght*4;
    
  }
}
