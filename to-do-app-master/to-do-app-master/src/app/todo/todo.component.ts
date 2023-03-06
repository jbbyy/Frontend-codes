import { Component } from '@angular/core';
import tasklist from '../Model/tasksclass';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor(private service: DataService) {}

  public list: tasklist = {};
  public listarr: Array<any> = [];

  public radio = ['High', 'Medium', 'Low'];

  add() {
    this.service.Add(this.list).subscribe((data) => {
      this.listarr.push(this.list);
      this.listarr = this.listarr;
    });
    this.list = {};
  }

  ngOnInit() {
    return this.service.Get().subscribe((data) => (this.listarr = data));
  }
}
