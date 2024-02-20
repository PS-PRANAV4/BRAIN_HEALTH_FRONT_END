import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Subscription, switchMap } from 'rxjs';
import { LoginService } from 'src/app/login.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Like } from 'src/app/interfaces/interface';
import { API } from 'src/app/login.service';
@Component({
  selector: 'app-group-enter-view',
  templateUrl: './group-enter-view.component.html',
  styleUrls: ['./group-enter-view.component.css']
})
export class GroupEnterViewComponent implements OnInit {
  subscription:Subscription|undefined;
  id:number|undefined;
  post_data:any
  posts$: Observable<any> | undefined;
  likedPerson:any
  user_id:number|undefined|string|null
  comment_array:any = []
  API = API
  constructor(private home:HomeService,private login:LoginService,private routes:ActivatedRoute) { 
     
   
  }

  ngOnInit(): void {
    this.user_id = parseInt(localStorage.getItem('id')||'0') 
    // this.subscription = this.login
    // .Groupreturn()
    // .subscribe(value=>{
    // console.log(value);
    // this.id = value
    // this.GetPost()
    
    // })
    this.id = parseInt(this.routes.snapshot.paramMap.get('id') || '0') 
    console.log(this.id);
    console.log(this.user_id);
    
    // this.home.GetPosts(this.id).subscribe(data=>{
    //   this.posts = data
    //   console.log(this.id);
    //   console.log(this.posts$);
      
      
    //  })
    this.posts$ = this.home.GetPosts(this.id)
    console.log(this.posts$);
    this.likedPerson = this.posts$
    
    this.home.GetPosts(this.id).subscribe(data=>{
      this.likedPerson = data
      console.log(data);
      console.log(this.likedPerson);

      for (let i of this.likedPerson)
      {
        this.comment_array.push(false)
        
      }
      
      
      
    })
    
  }


like(vas:number)
{
  
  const index = this.likedPerson.findIndex((x:any) => x.id ===vas);
  
this.likedPerson[index].liked_persons.push(this.user_id)
console.log(this.likedPerson);

  let val :Like = {
    id:vas
  }
  this.home.LikePost(val).subscribe()
  // this.likedPerson.push(this.user_id)
  // console.log(this.likedPerson);
  
}
unlike(vas:number)
{
  
  const index = this.likedPerson.findIndex((x:any) => x.id ===vas);
  
this.likedPerson[index].liked_persons.pop(this.user_id)
console.log(this.likedPerson);

  let val :Like = {
    id:vas
  }
  this.home.RemoveLike(val).subscribe()
}
showComment(data:number)
{
  if (this.comment_array[data])
  {
    this.comment_array[data] = false    
  }
  else{
    this.comment_array[data] = true
  }

}

}
