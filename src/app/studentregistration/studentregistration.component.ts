import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css'],
})
export class StudentregistrationComponent implements OnInit {
  public name: string = '';
  public names: string[] = [];

  constructor() {}

  ngOnInit(): void {}
  register() {
    this.names.push(this.name);
  }
  delete() {
    this.names.pop();
  }

  deleteAll() {
    this.names = [];
  }
  deleteEach(i: number) {
    this.names.splice(i, 1);
  }
  reverse() {
    this.names.reverse();
  }
}
