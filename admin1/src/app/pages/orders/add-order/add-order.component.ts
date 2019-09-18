import { Component } from '@angular/core';
import {ApicallProvider} from '../../../providers/apicall/apicall'
import { Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'ngx-add-order',
  styleUrls: ['./add-order.component.scss'],
  templateUrl: './add-order.component.html',
})

export class AddOrderComponent {
	productList: Array<any>;
  userList: Array<any>;
  brandList: Array<any>;
	device:any;
	msg:any;
  selectedproduct : any;
	status:any;
	datarecv:any;
constructor(private apicall: ApicallProvider) {
	this.device = {
   	productID:"",
     vendorID:"",
   	productname:"",
   renttype:"",
userID:"",
comments:"",
advanceamount:"",
price:"",
duration:"",
dateofdelivery:"",
status:"",


   };


   this.msg="";
   this.apicall.getallproducts()
      .subscribe(res => {this.productList = res;
      	console.log(this.productList);
      });
      this.apicall.getallusers()
      .subscribe(res => {this.userList = res;
        console.log(this.userList);
      });
      this.apicall.getallbrands()
      .subscribe(res => {this.brandList = res;
        console.log(this.brandList);
      });
   
    }
addNewProduct(device)
{

device.vendorID = this.selectedproduct.vendorID;
device.productID = this.selectedproduct._id;
device.productname = this.selectedproduct.productname;
device.renttype = this.selectedproduct.renttype;

console.log(device);
if(!device.productID||!device.vendorID||!device.productname||!device.renttype)
	{
	this.msg = "Please Fill All the details";
	this.status = false;
	}
else
	{this.apicall.placeorder(device)
      .subscribe(res => {this.datarecv = res;
      	console.log(this.datarecv);
      	  this.msg=this.datarecv.msg;
      	  this.status = this.datarecv.success;    	
      });

}
}
}
