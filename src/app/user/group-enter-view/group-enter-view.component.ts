import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Subscription, switchMap } from 'rxjs';
import { LoginService } from 'src/app/login.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-group-enter-view',
  templateUrl: './group-enter-view.component.html',
  styleUrls: ['./group-enter-view.component.css']
})
export class GroupEnterViewComponent implements OnInit {
  subscription:Subscription|undefined;
  id:number|undefined;
  post_data:any
  posts$: Observable<any>;
  constructor(private home:HomeService,private login:LoginService) { 
    this.posts$ = this.login.Groupreturn().pipe(
     switchMap(id => this.home.GetPosts(id))
   )
   console.log(this.posts$);
   
  }

  ngOnInit(): void {
    // this.subscription = this.login
    // .Groupreturn()
    // .subscribe(value=>{
    // console.log(value);
    // this.id = value
    // this.GetPost()
    
    // })
  }
// GetPost()
// {
  
//   this.home.GetPost(this.id).subscribe(data=>{
//     this.post_data = data
//     console.log(this.post_data);
//     for(let t of this.post_data)
//     {
//       console.log(t);
      
//     }
    
    

//   })
// }

}
