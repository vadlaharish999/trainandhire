import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    alert("submit clicked");
  }

  cancel(){
    alert("cancel double clied");

  }

  test(){
    alert("key up");
  }

  test2(){
    alert("key down");

  }
  test3(){
    alert("key press");
  }
  test4(){
    alert("mouseenter");
  }
  test5(){
    alert("mouseleave");
  }






}
    
