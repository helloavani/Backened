import { Component } from '@angular/core';
import {ApicallProvider} from '../../../providers/apicall/apicall'
import { Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'ngx-add-product',
  styleUrls: ['./add-product.component.scss'],
  templateUrl: './add-product.component.html',
})

export class AddProductComponent {
	
  catList: Array<any>;
  brandList: Array<any>;
	device:any;
	msg:any;
	status:any;
	datarecv:any;
constructor(private apicall: ApicallProvider) {
	this.device = {
   	
   	productname:"",
   	category : "",
	subcategory : "",
	quantity : "",
	brand : "",
	model : "",
	description:"",
bestfor:"",
whatitincludes:"",
renttype:"",
onedayrent:"",
threedayrent:"",
sevendayrent:"",
   };


   this.msg="";
   
      this.apicall.getallcat()
      .subscribe(res => {this.catList = res;
        console.log(this.catList);
      });
      this.apicall.getallbrands()
      .subscribe(res => {this.brandList = res;
        console.log(this.brandList);
      });
   
    }
addNewProduct(device)
{
console.log(device);
if(!device.productname||!device.category||!device.subcategory||!device.quantity||!device.brand||!device.model||!device.description||!device.bestfor||!device.whatitincludes||!device.renttype||!device.onedayrent||!device.threedayrent||!device.sevendayrent)
	{
	this.msg = "Please Fill All the details";
	this.status = false;
	}
else
	{this.apicall.addNewProduct(device)
      .subscribe(res => {this.datarecv = res;
      	console.log(this.datarecv);
      	  this.msg=this.datarecv.msg;
      	  this.status = this.datarecv.success;    	
      });

}
}
}
