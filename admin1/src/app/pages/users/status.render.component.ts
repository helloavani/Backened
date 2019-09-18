import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ApicallProvider} from '../../providers/apicall/apicall';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'button-view',
  template: `
    <button style="background:transparent;" *ngIf="renderValue==0" (click)="onClick()">Enable</button>
    <button style="background:transparent;" *ngIf="renderValue==1" (click)="onClick()">Disable</button>
  `,
})
export class StatusViewComponent implements ViewCell, OnInit {
  renderValue: string;
  row : any;
	user : any;	
constructor (public apicall : ApicallProvider){}
  @Input() value: any;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.status;
    this.row = this.value;
  }

  onClick() {
	
console.log(this.row);
this.apicall.changeuserstatus(this.row._id)
      .subscribe(res => {this.user = res;
        console.log(this.user);
        if (this.renderValue=='0') this.renderValue='1';
	else if (this.renderValue=='1') this.renderValue='0';
        
	if (this.row.status=='0') this.row.status='1';
	else if(this.row.status =='1') this.row.status = '0';
        
	this.save.emit(this.row);
        
      });
  }
}
