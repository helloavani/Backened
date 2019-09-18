import { Component } from '@angular/core';
import {ApicallProvider} from '../../../providers/apicall/apicall'
@Component({
  selector: 'ngx-add-user',
  styleUrls: ['./add-user.component.scss'],
  templateUrl: './add-user.component.html',
})
export class AddUserComponent {
	datarecv : any;
	user:any;
	msg:any;
	status:any;
	show:any;
	userList:Array<any>;
	users=[];
 constructor(private apicall: ApicallProvider) {
   this.user = {
   	
   	password:"",
   	firstname : "",
	lastname : "",
	email : "",
	phone : "",
	address : "",
	
   };
   this.msg="";
   this.show=0;
   this.users.push("superadmin");
this.apicall.getallusers()
      .subscribe(res => {
      	this.userList = res;
      	console.log(res);
      	for(var i=0;i<this.userList.length;i++)
      	{
      		if(res[i].roles=="distributor")
      		{
      			var name = res[i].name;
      			console.log(name);
      			this.users.push(name);
      		}
      		
      	}
      	
      });

    }
    modo(role)
    {
    	if(role=="distributor")
    	{
    		this.show=0;
    	}
    	else if(role=="user")
    	{
    		this.show = 1;
    		
    	}
    	console.log("select changes"+role);
    }
addNewUser(user)
{

console.log(user);
if(!user.email||!user.password||!user.firstname||!user.lastname||!user.email||!user.phone||!user.address)
	{
	this.msg = "Please Fill All the details";
	this.status = false;
	}
else
	{ 
		
		this.apicall.addNewUser(user)
      .subscribe(res => {this.datarecv = res;
      	console.log(this.datarecv);
      	  this.msg=this.datarecv.msg;
      	  this.status = this.datarecv.success;    	
      });

}
}
}
