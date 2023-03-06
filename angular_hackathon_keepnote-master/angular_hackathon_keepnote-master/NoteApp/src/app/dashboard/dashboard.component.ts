import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import notes from '../model/notes';
import { NotesService } from '../service/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private service: NotesService, private fb: FormBuilder) {}


  notesArr: Array<any> = [];
  note: notes = {};
  ngOnInit() {
    this.service.getNotes().subscribe((data: any) => (this.notesArr = data));
  }

  notesForm = this.fb.group({
   title: new FormControl(''),
    text: new FormControl(''),
  });

  addNotes(){
    this.service.addNote(this.notesForm.value).subscribe(data=> { this.note = data;
      this.notesArr.push(this.note);
      this.note ={};
    });

  }


}
