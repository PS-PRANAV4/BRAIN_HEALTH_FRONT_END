import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Like } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  readonly APIURL:string = "http://16.171.198.127/";

  constructor(private http :HttpClient,private route:Router) { }
  Gettoken()
{
  return localStorage.getItem('access') || '';
}
CreateGroup(data:any)
{
 
 
return this.http.post(this.APIURL+'/create-group',data)
}
Logout()
{
  localStorage.clear()
}
GetGroups()
{
  return this.http.get(this.APIURL+'/list-group')
}
GetPosts(val:any):Observable<any>
{
  console.log('nice');
  
  
  return this.http.get(this.APIURL+'/group-enter/'+val)
}
LikePost(val:Like)
{
  return this.http.post(this.APIURL+'/post-like',val)
}
RemoveLike(val:Like)
{
  return this.http.post(this.APIURL+'/post-unlike',val)
}




}
