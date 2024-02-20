import { Component, OnInit } from '@angular/core';
import { API, LoginService } from 'src/app/login.service';
import { HomeService } from 'src/app/services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups-list-view',
  templateUrl: './groups-list-view.component.html',
  styleUrls: ['./groups-list-view.component.css']
})
export class GroupsListViewComponent implements OnInit {
groups:any 
  constructor(private home:HomeService, private login:LoginService, private route:Router) { }
API = API
  ngOnInit(): void {
    const data = {
      user_type:localStorage.getItem('user_type')

    }
    
    
    
    this.home.GetGroups(data).subscribe(data=>{
this.groups = data;
console.log(this.groups);

    })
  }
GroupEnter(id:number)
{
  this.login.GroupId(id)
  
  this.route.navigate(['group-enter-view',id])
  
}

}
