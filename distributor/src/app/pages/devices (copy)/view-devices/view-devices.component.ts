import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import {ApicallProvider} from '../../../providers/apicall/apicall'
import { Subscription} from 'rxjs/Subscription';
import { StatusViewComponent } from '../status.render.component';

@Component({
  selector: 'ngx-view-devices',
  templateUrl: './view-devices.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class ViewDevicesComponent {
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
       reset: {
        title: 'Reset',
        type: 'custom',
         renderComponent: StatusViewComponent,
         valuePrepareFunction: (cell, row) => row,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
           console.log(row);
}) }
      },
      deviceID: {
        title: 'Device ID',
        type: 'string',
      },
      accountID: {
        title: 'Account ID',
        type: 'string',
        editable: false,
      },
      licensePlate: {
        title: 'License Plate',
        type: 'string',
      },
      ign: {
        title: 'Ignition',
        type: 'string',
        editable: false,
      },
      timestamp: {
        title: 'Last Updated',
        type: 'string',
        editable: false,
      },
      installationdate: {
        title: 'Installation Date',
        type: 'string',
        editable: false,
      },
      imei: {
        title: 'IMEI',
        type: 'string',
      },
      simno: {
        title: 'Sim No',
        type: 'string',
      },
    },
  };


  constructor(private service: SmartTableService,private apicall: ApicallProvider) {
   this.apicall.getdevicelist()
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
      this.apicall.deletedevice(event.data._id)
      .subscribe(res => {console.log("device deleted");
        console.log(res);
        
      });
    } else {
      event.confirm.reject();
    }
  }
updateRecord(event) {
    console.log('ddddd');
  this.apicall.editdevice(event.newData)
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
