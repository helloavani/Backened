import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import {ApicallProvider} from '../../../providers/apicall/apicall'
import { Subscription} from 'rxjs/Subscription';
import { StatusViewComponent } from '../status.render.component';

@Component({
  selector: 'ngx-view-orders',
  templateUrl: './view-orders.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class ViewOrdersComponent {
  source: LocalDataSource = new LocalDataSource();

deviceList: Array<any>;
  settings = {
     hideSubHeader: true,
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
       
      vendorID: {
        title: 'Vendor ID',
        type: 'string',
      },
      productname: {
        title: 'Product Name',
        type: 'string',
        editable: false,
      },
      userID: {
        title: 'User ID',
        type: 'string',
      },
 
      renttype: {
        title: 'Rent Type',
        type: 'string',
      },
   price: {
        title: 'Total Amount',
        type: 'string',
      },
   advanceamount: {
        title: 'Advance Amount',
        type: 'string',
      },
  dateofdelivery: {
        title: 'DOD',
        type: 'string',
      },
status: {
        title: 'Status',
        type: 'string',
      },
      duration: {
        title: 'Duration',
        type: 'string',
      },



    },
  };


  constructor(private service: SmartTableService,private apicall: ApicallProvider) {
   this.apicall.getallorders()
      .subscribe(res => {this.deviceList = res;
        console.log(this.deviceList);
        this.source.load(this.deviceList);
        
      });
   
    //const data = this.service.getData();
//this.source.load(this.deviceList);
    }
    
  onDeleteConfirm(event): void {
    
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      console.log(event.data);
      this.apicall.deleteorder(event.data._id)
      .subscribe(res => {console.log("device deleted");
        console.log(res);
        
      });
    } else {
      event.confirm.reject();
    }
  }
updateRecord(event) {
    console.log('ddddd');
  this.apicall.editorder(event.newData)
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
        field: 'accountID',
        search: query,
      },
      {
        field: 'licensePlate',
        search: query,
      },
      {
        field: 'simno',
        search: query,
      },
      {
        field: 'imei',
        search: query,
      },
      {
        field: 'deviceID',
        search: query,
      },
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
}
