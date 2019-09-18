import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import {ApicallProvider} from '../../../providers/apicall/apicall';
import {StatusViewComponent} from '../status.render.component';
@Component({
  selector: 'ngx-view-vendors',
  styleUrls: ['./view-vendors.component.scss'],
  templateUrl: './view-vendors.component.html',
})
export class ViewVendorsComponent {
source: LocalDataSource = new LocalDataSource();

userList: Array<any>;
  settings = {
  	 hideSubHeader: true,
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      status : {
        title : 'Status',
        type : 'custom',
        renderComponent : StatusViewComponent,
        valuePrepareFunction: (cell,row) => row,
        onComponentInitFunction (instance) {
          instance.save.subscribe(row =>{
            console.log(row);
          })
        }
      },
      
      firstname: {
        title: 'Firstname',
        type: 'string',
      },
      lastname: {
        title: 'Lastname',
        type: 'string',
      },
      email: {
        title: 'Email ID',
        type: 'string',
      },
      phone: {
        title: 'Phone No',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      
    },
  };
  constructor(private service: SmartTableService,private apicall: ApicallProvider) {
   this.apicall.getallvendors()
      .subscribe(res => {this.userList = res;
      	console.log(this.userList);
      	this.source.load(this.userList);
      	
      });
   
    //const data = this.service.getData();
//this.source.load(this.deviceList);
    }
    
  onDeleteConfirm(event): void {
    
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      console.log(event.data);
      this.apicall.deleteuser(event.data._id)
      .subscribe(res => {console.log("device deleted");
        console.log(res);
        
      });
    } else {
      event.confirm.reject();
    }
  }
   updateRecord(event) {
    console.log('ddddd');
  this.apicall.edituser(event.newData)
      .subscribe(res => {console.log("device deleted");
        console.log(res);
        if(res.success)
        {
        event.confirm.resolve(event.newData);
        }
        else {
      event.confirm.reject();
    }
      });
  }
  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to inclue in the search
      
      {
        field: 'firstname',
        search: query,
      },
       {
        field: 'lastname',
        search: query,
      },
      {
        field: 'email',
        search: query,
      },
      {
        field: 'phone',
        search: query,
      },
      {
        field: 'address',
        search: query,
      },
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
}
