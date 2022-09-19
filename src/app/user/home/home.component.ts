import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { HomeService } from 'src/app/services/home.service';

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
color:string
color1:string
datas:any;
showModal:boolean=false;

  constructor(private login:LoginService,private home :HomeService) { 
    this.color = 'lightblue'
    this.color1 = '#F5F5F5;'
  }

  ngOnInit(): void {
// this.login.media().subscribe(data=>{
//   console.log(data);
//   this.datas = data
  
  
// })


  }
  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];


toggleModal()
{
this.showModal = !this.showModal
console.log('come');
console.log(this.showModal);

}
event(a:any)
{
  console.log(a);
  this.showModal = !this.showModal
  
}



}
