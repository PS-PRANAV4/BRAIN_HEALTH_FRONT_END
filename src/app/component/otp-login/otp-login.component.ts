import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.css']
})
export class OtpLoginComponent implements OnInit {
  phone_number:string|undefined
  datas:any|undefined;
  constructor(private service:LoginService, private route:Router) { }

  ngOnInit(): void {
  }
main()
{
  let val = {phone_number:this.phone_number}
  this.service.OtpLogin(val).subscribe(data=>{
     
    this.datas = data
    console.log(data);
    
      
    
    localStorage.setItem('email',this.datas.email)
    this.route.navigate(['otp_verify'])
    
    
    
    
    
  })
}
}
