import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../Environment/Environment';
@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}

getNotes(){
  return this.http.get(environment.jsonUrl);
}
//to fetch the notes collection

addNote(x:any)
{
  return this.http.post(environment.jsonUrl, x);
} 
//to persist a note to server

}
