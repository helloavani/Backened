import { Component ,OnInit} from '@angular/core';
import {ApicallProvider} from '../../../providers/apicall/apicall';
import {Devices} from '../../../providers/apicall/device';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmaps.component.html',
})
export class GmapsComponent implements OnInit{
  lat = 28.678418;
  lng = 77.809007;
  deviceList:Array<any>;
  repeating:any;

 constructor(public apicall: ApicallProvider ) {
     this.apicall.getdevicelist()
      .subscribe(res => {
        this.deviceList = res;
        console.log(res);
        for(var i=0;i<res.length;i++)
        {
          var lati = +res[i].lat;
          var lngi = +res[i].lng;
          this.deviceList[i].lat= lati;
          this.deviceList[i].lng=lngi;
        }
        });

      }
 callagain()
 {
   this.apicall.getdevicelist()
      .subscribe(res => {
        this.deviceList = res;
        console.log(res);
        for(var i=0;i<res.length;i++)
        {
          var lati = +res[i].lat;
          var lngi = +res[i].lng;
          this.deviceList[i].lat= lati;
          this.deviceList[i].lng=lngi;
        }
        });
}

 
ngOnInit()
{
 this.repeating =  Observable.interval(300 * 60).subscribe(x => {
         this.callagain();
  });
}
ngOnDestroy()
{
  this.repeating.unsubscribe();
}
}