import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
readonly APIURL:string = "https://pranavps.online";
  constructor(private http:HttpClient,private route :Router) { }
  private subject = new Subject<boolean>();
  private sub = new Subject<string>();
  private group = new Subject<number>();
log:boolean|undefined
username:string|undefined

  Login(val:any):Observable<any[]>
    {
      return this.http.post<any[]>(this.APIURL+'/login/',val );
    }
Signup(val:any)
{
  return this.http.post<any[]>(this.APIURL+'/signup',val)
}
Si(val:any)
{
  return this.http.post<any[]>(this.APIURL+'/si',val)
}
OtpLogin(val:any)
{
  return this.http.post<any[]>(this.APIURL+'/otp_login',val)
}
OtpVerify(val:any)
{
  return this.http.post<any[]>(this.APIURL+'/verify_otp',val)
}

LoggedIn()
{

    var val = {token:localStorage.getItem('access')}
    return this.http.post<any[]>(this.APIURL+'/nice',val );
    
  
  
}
toggleAddTask():void {
  if(localStorage.getItem('access'))
  {
    this.log= true;
  this.subject.next(this.log)
  }
  else
  {
    this.log= false;
  this.subject.next(this.log)
  }
  
}
onToggle(): Observable<any>{
  return this.subject.asObservable();
}

// media():Observable<any>
// {
//   return this.http.get(this.APIURL+'/media/photos/cover/therpi.jpg')
// }
newName(user:string)
{
  this.username = user
  this.sub.next(this.username)
}
caller()
{
  return this.sub.asObservable()
}
Logout()
{
  alert('session got expired')
  localStorage.clear();
  this.route.navigate(['login'])
}
GenerateRefresh():Observable<any>
{
 let a = localStorage.getItem('refresh')
 let input = {
  "refresh":a
 }
 console.log('refresh');
 console.log(a);
 
 
 return this.http.post(this.APIURL+'/api/token/refresh/',input)
}

saveToken(tokendata:any)
{
  localStorage.setItem('access',tokendata.access)
}

GroupId(id:any):void {
  
    
  this.group.next(id)
  
  
  
}
Groupreturn(): Observable<any>{
  return this.group.asObservable();
}


}
