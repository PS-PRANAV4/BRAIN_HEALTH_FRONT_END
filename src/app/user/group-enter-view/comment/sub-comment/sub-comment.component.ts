import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sub-comment',
  templateUrl: './sub-comment.component.html',
  styleUrls: ['./sub-comment.component.css']
})
export class SubCommentComponent implements OnInit {


  @Input() comment:any;
  name:string=''
  comment_details:string = '' 
  
  constructor() { 
    
  }

  ngOnInit(): void {
this.name = this.comment.user.username
this.comment_details = this.comment.comment
  }

}
