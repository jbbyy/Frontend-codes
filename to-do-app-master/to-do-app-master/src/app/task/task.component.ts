import { Component } from '@angular/core';
import { DataService } from '../service/data.service';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private service:DataService){}
public show: Array<any> =[];

  ngOnInit(){
    return this.service.Get().subscribe((data)=>
      this.show = data)
  }

  delete(id:number){
    return this.service.Delete(id).subscribe((data)=>
    this.show = this.show.filter(x => x.id != data));}


}
