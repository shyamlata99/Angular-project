import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  public selectedUser=JSON.parse(localStorage.getItem('selectedUser'));
  public userId = this.selectedUser.empID;
  public name = this.selectedUser.empName;
  public department = this.selectedUser.dept;

  constructor(
    private router: Router,
    private activated:ActivatedRoute 
    ) { }

  ngOnInit(): void {
    this.getuserID();
  }

  getuserID()  {
      this.activated.params.subscribe((selectedUser) => {
      this.userId=selectedUser.empID;
    });
  }

  back() {
    localStorage.removeItem('selectedUser');
    this.router.navigateByUrl('admindashboard');
  }

}
