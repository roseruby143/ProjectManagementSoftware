import { Router } from '@angular/router';
import { LoginServicesService } from './../services/login-services.service';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/GetData.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _companyName : string = 'Project Buddy';
  //private _subscribeObject;
  errorMessage:string = '';
  _navBarList : any[]= [];
   
  constructor(private _navbardata:GetDataService, public loginServiceObj:LoginServicesService, private _router:Router) { }

  //userNameDisplayed:string = this.loginServiceObj.loginUser;
  //baseUrl:string = window.location.pathname;
  isUserLoggedIn = false;

  ngOnInit(): void {
    this._navbardata.getNavBarListData().subscribe({
      next : nxt => this._navBarList = nxt,
      error : err => this.errorMessage = err
    });

    //let storeData = this.loginServiceObj.isUserLoggedIn; //localStorage.getItem("isUserLoggedIn");
    //console.log("--- StoreData: " + storeData);

    /* if( storeData != null && storeData)
      this.isUserLoggedIn = true;
    else
      this.isUserLoggedIn = false; */

    /* var url = window.location.pathname;
    console.log(`---- url : ${url}`);  */
  }

  get companyName():string{
    return this._companyName;
  }

  onLogout(){
    this.loginServiceObj.logout();
    this._router.navigate(['/login']);
  }

  displayUserNameChange(){

  }

}
