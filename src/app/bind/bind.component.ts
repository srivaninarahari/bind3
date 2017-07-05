import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
     title: string;
     firstname:string;
     lastname:string;
  constructor() { }

  ngOnInit() {
    this.firstname= "sreevani";
    this.lastname="narahari"
  }
submit(first,last){
   this.title= `${first.value}${last.value}`
}
}
