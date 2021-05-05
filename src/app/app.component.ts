import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFirstApp';

  public empName:string;
  public empId: number;
  public  data=[];

  submit(){
    let entry={Name:this.empName, Id:this.empId};
     this.empName="" ;
     this.empId=null;
     this.data.push(entry);
  }

  delete(remove){
    this.data.splice(remove ,1);
  }
}

