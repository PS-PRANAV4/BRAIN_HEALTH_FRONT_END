import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
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

  ngOnInit(): void {
    this.home.GetGroups().subscribe(data=>{
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
