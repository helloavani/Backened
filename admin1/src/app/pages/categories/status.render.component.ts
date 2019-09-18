import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ApicallProvider} from '../../providers/apicall/apicall';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'button-view',
  template: `
    <button style="background:transparent;" *ngIf="renderValue==0" (click)="onClick()">Play</button>
    <button style="background:transparent;" *ngIf="renderValue==1" (click)="onClick()">Pause</button>
  `,
})
export class StatusViewComponent implements ViewCell, OnInit {
  renderValue: string;
  row : any;
  
  campaign : any;
  
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
    
    
  }
}
