import { Component } from '@angular/core';
import {ApicallProvider} from '../../../providers/apicall/apicall'
import { Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'ngx-add-device',
  styleUrls: ['./add-device.component.scss'],
  templateUrl: './add-device.component.html',
})

export class AddDeviceComponent {
	userList: Array<any>;
	device:any;
	msg:any;
	status:any;
	datarecv:any;
constructor(private apicall: ApicallProvider) {
	this.device = {
   	accountID:"",
   	devicemodel:"",
   	deviceID : "",
	imei : "",
	licensePlate : "",
	distance : "",
	simno : "",
	vehicletype:""
   };
   this.msg="";
   this.apicall.getallusers()
      .subscribe(res => {this.userList = res;
      	console.log(this.userList);
      });
   
    }
addNewDevice(device)
{
console.log(device);
if(!device.accountID||!device.devicemodel||!device.deviceID||!device.imei||!device.licensePlate||!device.distance||!device.simno||!device.vehicletype)
	{
	this.msg = "Please Fill All the details";
	this.status = false;
	}
else
	{this.apicall.addNewDevice(device)
      .subscribe(res => {this.datarecv = res;
      	console.log(this.datarecv);
      	  this.msg=this.datarecv.msg;
      	  this.status = this.datarecv.success;    	
      });

}
}
}
