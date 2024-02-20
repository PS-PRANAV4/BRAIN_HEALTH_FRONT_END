import { Component, OnInit,Input } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private home :HomeService) { }
  @Input() postId: any;
  data:any
  ngOnInit(): void {
    console.log(this.postId);
    this.getComment()
    
  }
  getComment(){

    this.home.GetComments(this.postId).subscribe(data=>{
      this.data = data
      console.log(this.data);
      
    })
     
   }

}
