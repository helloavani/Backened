import { Component } from '@angular/core';
import {ApicallProvider} from '../../../providers/apicall/apicall'
import { Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'ngx-add-brand',
  styleUrls: ['./add-brand.component.scss'],
  templateUrl: './add-brand.component.html',
})

export class AddBrandComponent {
	CatList: Array<any>;
	device:any;
	msg:any;
	status:any;
	datarecv:any;
constructor(private apicall: ApicallProvider) {
	this.device = {
   	name:"",
   	category:"",
   	
   };
   this.msg="";
   this.apicall.getallcat()
      .subscribe(res => {this.CatList = res;
      	console.log(this.CatList);
      });
   
    }
addNewDevice(device)
{
console.log(device);
if(!device.name||!device.category)
	{
	this.msg = "Please Fill All the details";
	this.status = false;
	}
else
	{this.apicall.addNewBrand(device)
      .subscribe(res => {this.datarecv = res;
      	console.log(this.datarecv);
      	  this.msg=this.datarecv.msg;
      	  this.status = this.datarecv.success;    	
      });

}
}
}
