import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {

  
  public empDetail=JSON.parse(localStorage.getItem("alluser"));
  public Name=this.empDetail.empName;
  public ID= this.empDetail.empID;
  public Department = this.empDetail.dept;
  public editDetail = {};

  constructor() { }

  ngOnInit(): void {
  }

  // update(index){
  //   this.editDetail={empName:this.Name,empID:this.ID,dept:this.Department,mail:this.manualEmail,psw:this.manualPass,index:this.index};
  //   this.Details[this.index]=this.data;
  //   localStorage.setItem("Detail",JSON.stringify(this.Details));
  
    }



