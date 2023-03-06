import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import track from './module/tracker';
//do not need to import because formgroup fb will replace this need

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private service: DataService, private fb: FormBuilder) {}

  
  public trackerArr : Array<any> =[];

  trackerForm = this.fb.group({
    description: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
    val: new FormControl(),
  });
  //this replaces the model/ class 

  public income:number =0;
  public expense:number =0;
  public balance:number =0;

 

  get description() {
    return this.trackerForm.get('description');
  }
  get amount() {
    return this.trackerForm.get('amount');
  }

  get date() {
    return this.trackerForm.get('date');
  }

  get val() {
    return this.trackerForm.get('val');
  }


ngOnInit(){
  this.service.Get().subscribe((data:any)=> this.trackerArr = data);
  this.calculate()
}
  
add(){
  this.service.Add(this.trackerForm.value).subscribe(data => {
this.trackerArr.push(data);
console.log(this.trackerArr)
this.trackerForm.reset()

  })
}

calculate(){
  this.income = 0;
  this.expense = 0;
  this.balance =0;
  this.service.Get().subscribe((data:any) => data.map((item:any)=>{
    if(item.val == "income"){
      this.income += parseInt(item.amount);
    }
    else{
      this.expense += parseInt(item.amount)
    }

  }))}

  delete(id:any){
this.service.Delete(id).subscribe(data=> 
  this.trackerArr = this.trackerArr.filter(x => x.id != id))
  };
}

