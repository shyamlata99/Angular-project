import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

 public empDetails = [
  {
    empID : '10001',
    empName : 'Shyamlata Dubey' ,
    dept : 'Operations',
    mail : 'shyamlata@mail.com',
    psw : 'shyamlata'
  } ,
  {
    empID : '10002', 
    empName : 'Astha Ojha' ,
    dept : 'Marketing',
    mail : 'astha@mail.com',
    psw : 'astha'
  } ,
  {
    empID : '10003',
    empName : 'Sourav Tarafdar' ,
    dept : 'Operations',
    mail : 'sourav@mail.com',
    psw : 'sourav'
  } ,
  {
    empID : '10004',
    empName : 'Abhay Prakash' ,
    dept : 'Finance',
    mail : 'abhay@mail.com',
    psw : 'abhay'
  },
  {
    empID : '10005',
    empName : 'Asmita' ,
    dept : 'HR',
    mail : 'asmita@mail.com',
    psw : 'asmita'
  } 
 ]

  constructor() { }


  ngOnInit(): void 
  {}

  storeData() {
    localStorage.setItem('Details' , JSON.stringify(this.empDetails)); 
}
}
