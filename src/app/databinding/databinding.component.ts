import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  public age:number=22;
  public name:string="Ram";
  public isIndian:boolean=true;
  // Array interpolation
  public phones:number[]=[9494,9292,8686];
  public courses:string[]=['Angular','React'];
  // object interpolation 
  public user: User={name:'john',city:'texas'};
  public student:Student={
    name:'hari',
    id:'9595',
    marks:99
  };
  public employee:Employee={
    name:'hari',
    company:'msn',
    package:14
  };

  // Array of objects interpolation
  public users:User[]=
  [
    {name:'john',city:'texaas'},
    {name:'smith',city:'vegas'},
    {name:'raj',city:'delhi'},
    {name:'shyam',city:'kmr'}
  ];

  public students: Student[]=
  [
    {name:'anil',id:'123',marks:90},
    {name:'hari',id:'1254',marks:66},
    {name:'sri',id:'5545',marks:85},
  ];





  constructor() { }

  ngOnInit(): void {
  }

}
