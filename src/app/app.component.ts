import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {
  title = 'Brain_Health';
  loggedIn:boolean|undefined;
  subscription:Subscription;
  subs:Subscription;
  constructor(private service:LoginService,private route:Router)
  {
    this.subscription = this.service
    .onToggle()
    .subscribe((value)=>{this.loggedIn=value
    console.log(this.loggedIn);
    })

    this.subs = this.service.caller().subscribe((value)=>(console.log(value)
    ))
    

  }
  // refresh()
  // {
  //   if(this.service.LoggedIn())
  //   {
  //     this.loggedIn = true
  //   }
  //   else
  //   {
  //     this.loggedIn = false
  //     this.route.navigate(['login'])
  //     console.log('logout');
      
  //   }
  // }
  ngOnInit(): void {
    if(localStorage.getItem('access'))
    {
      this.loggedIn = true
    }
    else
    {
      this.loggedIn = false
    }
    
    // this.refresh()
  }
logout()
{
  localStorage.clear();
  this.loggedIn = false
  // this.refresh()
  this.route.navigate(['login'])

}
ngOnChanges(): void {
 
  
}
// change()
// {
//   console.log('nice');
//   // this.refresh()
//   this.loggedIn = true
// }

}
