import { Component } from '@angular/core';
import {ApicallProvider} from '../../../providers/apicall/apicall'
import { Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'ngx-add-category',
  styleUrls: ['./add-category.component.scss'],
  templateUrl: './add-category.component.html',
})

export class AddCategoryComponent {
	userList: Array<any>;
	device:any;
	msg:any;
	status:any;
	datarecv:any;
constructor(private apicall: ApicallProvider) {
	this.device = {
   	name:"",
   
   };
   this.msg="";
   this.apicall.getallusers()
      .subscribe(res => {this.userList = res;
      	console.log(this.userList);
      });
   
    }
addNewCat(device)
{
console.log(device);
if(!device.name)
	{
	this.msg = "Please Fill All the details";
	this.status = false;
	}
else
	{this.apicall.addNewCat(device)
      .subscribe(res => {this.datarecv = res;
      	console.log(this.datarecv);
      	  this.msg=this.datarecv.msg;
      	  this.status = this.datarecv.success;    	
      });

}
}
}
