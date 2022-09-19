import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-otp-verfy',
  templateUrl: './otp-verfy.component.html',
  styleUrls: ['./otp-verfy.component.css']
})
export class OtpVerfyComponent implements OnInit {
  code :string|undefined;
  datas:any;
  email:string|null|undefined;
  constructor(private service:LoginService,private route:Router) { }

  ngOnInit(): void {
this.email = localStorage.getItem('email')  }

  main()
  {

    let val = {code:this.code,
    email:this.email}
  this.service.OtpVerify(val).subscribe(data=>{
     
    this.datas = data
    console.log(data);
    
      
    
    localStorage.setItem('access',this.datas)
    this.service.toggleAddTask()
    this.route.navigate([''])
    
    
    
    
    
  })
  }



}
