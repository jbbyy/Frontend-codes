import { Component } from '@angular/core';
import productclass from '../../../model/productclass'
import updateproductclass from '../../../model/productclass'
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor(private service: DataService){}

    public pdt: productclass ={}
    public prod: Array<any> = []
    public updt: updateproductclass ={}

    ngOnInit(){
      this.service.getproduct().subscribe((data:any)=>this.prod=data)
    }

    addproduct(){
      this.service.addproduct(this.pdt).subscribe(data=> {
        this.prod.push(data);
        //add product into json, read json for data and push json data into array
        this.pdt ={};
      });
    }

    deleteproduct(id:any){
      this.service.deleteproduct(id).subscribe(data=>{
        this.prod = this.prod.filter(x=>x.id !== id)
      })
    }
    getproduct(){
      this.service.getproduct().subscribe((data:any)=>this.prod=data);
    }

    updateproduct(){
      this.service.updateproduct(this.updt.id, this.updt).subscribe(data =>console.log("updated"));
      //above will call patch to update product obj by accepting updated values in updt and patch based on updt id
      //it will update object in JSON
      this.getproduct();
      //will call the getproduct function which gets the full json object array and repop the table via prod array
      

    }

    getupdateproduct(){

    }

   
  
}
