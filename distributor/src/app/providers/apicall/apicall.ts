import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import "rxjs/Rx";
import {Devices} from "./device";
//let apiUrl = 'http://localhost:3000/api/v1/';
let apiUrl = 'http://18.222.10.176:3000/api/v1/';
//let apiUrl = 'http://192.168.1.7:8081/api/';
/*
  Generated class for the ApicallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApicallProvider {
data:any;
result:any;
  constructor(private http: Http ) {
    console.log('Hello ApicallProvider Provider');
  }
  getdevicelist()
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.get(apiUrl+'getalldevices',{headers: headers})
      .map(result => this.result = result.json().DeviceList);
}
deletecat(id)
{
  console.log(id);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'deletecat',{id: id},{headers: headers}).map(res=>res.json());
}
deleteorder(id)
{
  console.log(id);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'deleteorder',{id: id},{headers: headers}).map(res=>res.json());
}
deletebrand(id)
{
  console.log(id);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'deletebrand',{id: id},{headers: headers}).map(res=>res.json());
}
deleteproduct(id)
{
  console.log(id);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'deleteproduct',{id: id},{headers: headers}).map(res=>res.json());
}
deleteuser(id)
{
  console.log(id);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'deleteuser',{id: id},{headers: headers}).map(res=>res.json());
}
 getallproducts()
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.get(apiUrl+'getallproducts',{headers: headers})
      .map(result => this.result = result.json().ProductList);
}
editproduct(newData)
{
  console.log(newData);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'editproduct',newData,{headers: headers}).map(res=>res.json());
}
 getallcat()
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.get(apiUrl+'getallcat',{headers: headers})
      .map(result => this.result = result.json().CategoryList);
}
edituser(newData)
{
  console.log(newData);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'edituser',newData,{headers: headers}).map(res=>res.json());
}
editcategory(newData)
{
  console.log(newData);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'editcategory',newData,{headers: headers}).map(res=>res.json());
}
editbrand(newData)
{
  console.log(newData);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'editbrand',newData,{headers: headers}).map(res=>res.json());
}
editorder(newData)
{
  console.log(newData);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'editorder',newData,{headers: headers}).map(res=>res.json());
}
getallbrands()
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.get(apiUrl+'getallbrands',{headers: headers})
      .map(result => this.result = result.json().BrandList);
}
 getallusers()
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.get(apiUrl+'getallusers',{headers: headers})
      .map(result => this.result = result.json().UserList);
}
getallvendors()
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.get(apiUrl+'getallvendors',{headers: headers})
      .map(result => this.result = result.json().UserList);
}

 addNewUser(user)
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.post(apiUrl+'newuser',user,{headers: headers})
      .map(result => this.result = result.json());
}
addNewDevice(device)
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.post(apiUrl+'addnewdevice',device,{headers: headers})
      .map(result => this.result = result.json());
}
addNewProduct(device)
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.post(apiUrl+'addproduct',device,{headers: headers})
      .map(result => this.result = result.json());
}
placeorder(device)
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.post(apiUrl+'placeorder',device,{headers: headers})
      .map(result => this.result = result.json());
}
getallorders()
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.get(apiUrl+'getallorders',{headers: headers})
      .map(result => this.result = result.json().OrderList);
}
addNewCat(device)
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.post(apiUrl+'addcategory',device,{headers: headers})
      .map(result => this.result = result.json());
}
addNewBrand(device)
  {
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.post(apiUrl+'addbrand',device,{headers: headers})
      .map(result => this.result = result.json());
}
getUser()
{
  let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
    return this.http.get(apiUrl+'getuser',{headers: headers})
      .map(result => this.result = result.json());
}
livemap(device)
{
   let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
  
return this.http.get(apiUrl+'livemap?d='+device,{headers: headers}).map(res=>res.json());

  
}
getreports(device,rf,rt)
{
  let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
  
return this.http.get(apiUrl+'reports?d='+device+"&rf="+rf+"&rt="+rt,{headers: headers}).map(res=>res.json());

}
getnotifications()
{
  let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
  

return this.http.get(apiUrl+'notifications?accountID='+localStorage.getItem('accountID'),{headers: headers}).map(res=>res.json());

}
setnotifications(data)
{
  let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
      return this.http.post(apiUrl+'setnotifications',{noti: data},{headers: headers}).map(res=>res.json());  
}
deletenotification(data)
{
  let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
      return this.http.post(apiUrl+'deletenotifications',{noti: data},{headers: headers}).map(res=>res.json());  
}
deletedevice(id)
{
  console.log(id);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'deletedevice',{id: id},{headers: headers}).map(res=>res.json());
}
editdevice(newData)
{
  console.log(newData);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'editdevice',{newData: newData},{headers: headers}).map(res=>res.json());
}
changeuserstatus(id)
{
  console.log(id);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'changeuserstatus',{id: id},{headers: headers}).map(res=>res.json());
}
resetdevice(id)
{
   console.log(id);
let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_app_token'));
           return this.http.post(apiUrl+'resetdevice',{id: id},{headers: headers}).map(res=>res.json());
}
}
