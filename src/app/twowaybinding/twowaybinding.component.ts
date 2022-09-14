import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  public name:string="harish"
  constructor() { }

  ngOnInit(): void {
  }

}
