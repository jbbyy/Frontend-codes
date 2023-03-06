import { Component, OnChanges } from '@angular/core';
import { DataService } from '../service/data.service';
import cart from '../model/cartItem';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private service: DataService) {}

  prodArr: Array<any> = [];
  public cartitem: cart = {};
  public cartDisplayArr: Array<any> = [];
  //an array to represent cart, only upon saving will this be pushed to json cart
  public cartCount: number =0; 
  //this will contain the count of quantity of pizzas in cartDisplayArr

  ngOnInit() {
    this.service.getProduct().subscribe((data: any) => (this.prodArr = data));
  // if(sessionStorage.getItem('token') != null)
  //  {
  //   this.cartDisplayArr = JSON.parse(sessionStorage.getItem('token')||"[]");
  //   //short circuit, accept either 'token' or null. So once = token, will stop. Will not proceed to null. 

  this.service.getCart().subscribe((data:any) => this.cartDisplayArr = data);

    this.cartDisplayArr.map(x=> 
      this.cartCount+= x.quantity)
  // }
  
  }

  addCart(id: any) {
    let prod = this.prodArr.find((x) => x.id == id);
    this.cartitem = {
      name: prod.name,
      price: prod.price,
      id: prod.id,
      quantity: 1,
    };
    //get from json and = cartDisplayArr
this.service.getCart().subscribe((data:any) => {
  this.cartDisplayArr = data
  console.log(data)
});

    if (!this.cartDisplayArr.length ||  this.cartDisplayArr.filter((x) => x.id == prod.id).length == 0) {
      this.cartDisplayArr.push(this.cartitem);
      this.service.addCart(this.cartitem).subscribe((data:any)=> this.cartDisplayArr=data);
  
    } else {
      this.cartDisplayArr.forEach((element) => {
        if (element.id == prod.id) {
          // element.quantity += 1;
          // element.price*2;
          this.cartitem = {
              name: element.name,
              price: (element.price),
              id: element.id,
              quantity: element.quantity+1}
          //put quantity and price at json cart
          this.service.updateCart(element.id, this.cartitem).subscribe(data => console.log(data));
      }});
    }
     alert('Item has been added to cart');
     this.cartCount += 1;

     //
  }


  delete(id: any) {
     this.cartDisplayArr.forEach((element) => {
       if (element.id == id) {
         this.cartCount-= element.quantity;
       }
     });
     this.service.deleteItem(id).subscribe((data:any) => console.log(data))
    this.cartDisplayArr = this.cartDisplayArr.filter((x) => x.id != id);


  }

  public amount: number = 0;
  public gst: number = 0;
  public totalAmount: number = 0;

  cal() {
    this.amount =0;
    this.cartDisplayArr.map(
      (item: any) => (this.amount += (item.price * item.quantity))
    );
    this.gst = this.amount * 0.05;
    this.totalAmount = this.amount + this.gst;
  }

  increase(id: any) {
    this.cartDisplayArr.forEach((element) => {
     if (element.id == id) {
        let x = (element.quantity += 1);
       this.cartCount +=1;
       this.cal();
       this.cartitem = {
         name: element.name,
         price: element.price,
         id: element.id,
         quantity: x,
       };
       console.log(this.cartitem);
       
     }
    });
  }

  decrease(id: any) {
    this.cartDisplayArr.forEach((element) => {
      if (element.id == id) {
        let x = element.quantity -= 1;
        this.cartCount-=1;
        this.cal();
        this.cartitem = {
          name: element.name,
          price: element.price,
          id: element.id,
          quantity: x,
        };
        console.log(this.cartitem);
      }
    });
  }

  addJCart(){
    this.service.addCart(this.cartitem).subscribe(data=> console.log(data));
    // sessionStorage.clear();
    // //clear sessionStorage after array is stored in server.
    this.cartDisplayArr= [];
    //clear cartDisplayArr to reset
    this.cartCount =0;
  }

// addSCart(){
//   sessionStorage.setItem('token' , JSON.stringify(this.cartDisplayArr));
  
// }
}