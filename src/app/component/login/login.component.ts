import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string|undefined
  password:string|undefined
  constructor(private service:LoginService,private route:Router) { }
  datas:any;
  usernames:string|undefined;
  @Output() nice:EventEmitter<any> = new EventEmitter

  ngOnInit(): void {
  }
  main()
  {
    let val = {'email':this.username,
      'password':this.password

    }
    this.service.Login(val).subscribe(data=>{
     
      
      console.log(data);
      this.datas = data;
      // localStorage.setItem('username',this.datas.username)
      localStorage.setItem('access',this.datas.access)
      localStorage.setItem('refresh',this.datas.refresh)
      localStorage.setItem('user',this.datas.user)
      localStorage.setItem('id',this.datas.id)
      
      
      this.toggleAddTask()
      this.route.navigate([''])
      
      
      
      
      
      
    })
  
    
  }
  toggleAddTask(){
    this.service.toggleAddTask()
    // this.usernames = localStorage.getItem()
    this.service.newName('pranav')
  }
 
}
