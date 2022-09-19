import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:LoginService) {
    
   }
username:string|undefined;
password:string|undefined;
mobile_no :string|undefined;
email:string|undefined;
first_name:string|undefined;
last_name:string|undefined;
referal_code:string|undefined;
confirm_password:string|undefined;
strings:string|undefined;
check:boolean = false;
designation:string|undefined;;
designations:boolean|undefined;
obj = {}
file_selected:any = null;



  ngOnInit(): void {
    this.designations = true
  }
main()
{
  if(this.password!=this.confirm_password)
  {
    this.check = true
    this.strings = "pasword doesn't match"
  }
  else
  {
    if(this.designations)
    {
      var val = {
        username:this.username,
        password:this.password,
        phone_number:this.mobile_no,
        email:this.email,
        first_name:this.first_name,
        last_name:this.last_name,
        designation:"client"

    }
    this.service.Signup(val).subscribe(data=>{
      alert(data.toString()); 
      console.log(data);
      
      
      
    })
  }
    else
    {
      
      
      var nice = {
        username:this.username,
        password:this.password,
        phone_number:this.mobile_no,
        email:this.email,
        first_name:this.first_name,
        last_name:this.last_name,
        designation:"doctor",
      }
      
      console.log(this.file_selected);
      const form = new FormData
      form.append('certi',this.file_selected,this.file_selected.name)
      var details = JSON.stringify(nice) 
      form.append('user',details)
      
      
  
    this.service.Si(form).subscribe(data=>{
      alert(data.toString()); 
      console.log(data);
      
      
      
    })
 
        
        

  }
  
  }


}
doc()
{
  this.designations = false;
}
client()
{
  this.designations = true;
}
fileSelected(event:any)

{
  
  console.log(event);
this.file_selected =  <File> event.target.files[0];

console.log(this.file_selected);




}











}
