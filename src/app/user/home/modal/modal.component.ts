import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  @Output() emitter: EventEmitter<any> = new EventEmitter();
  group_name:string|undefined;
  group_members:string = ''; 
  constructor(private home:HomeService) { }

  ngOnInit(): void {
  }

  toggleModal()
  {
    if(this.group_name)
    {
      var val = {
        name:this.group_name
        
      }
      this.home.CreateGroup(val).subscribe(data=>{
        console.log(data);
        
      })
  }

    this.emitter.emit(false)
  }
deleteChanges()
{
  this.emitter.emit(false)
}

}
