import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { GetDataService } from './../../services/GetData.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit,CanActivate {

  constructor(private _allClientsList : GetDataService, private _modalService:NgbModal, private _router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  allClients : any[]=[];
  clientsKeys : string[]=[];
  public clientInfo:any;
  projectTitle:string = "PB";

  ngOnInit(): void {
    this.projectTitle = this._allClientsList.projectTitle;
    const fetchData = this._allClientsList.getAllClients().subscribe({
      next: data => {
        this.allClients = data; 
        //console.log(data);
        this.clientsKeys = Object.keys(data[0]);
      },
      error : err => console.log(err)
    });
    /* let exampleModal = document.getElementById('clientEditModal');
    if(exampleModal){
      exampleModal.addEventListener('show.bs.modal', function (event) {
        console.log(event);
      })
    } */
  }

  checkLogin(url: string): true | UrlTree {
    //console.log("Url: " + url)
    let val: string | null = localStorage.getItem('isUserLoggedIn');

    if(val != null && val){
       if(url == "/login")
          return this._router.parseUrl('/welcome');
       else 
          return true;
    } else {
       return this._router.parseUrl('/login');
    }
 }

  modalShowHandler(data:Event){
    //console.log(data.currentTarget);
    if(document.getElementById("clientIdinModal")){
     // document.getElementById("clientIdinModal").innerText= data.currentTarget;
    }
  }

  openClientAddEditModal(modalRef:any, clientObject = null){
    //console.log(`----------- ${clientObject}`);    
    this._modalService.open(modalRef);
    this.clientInfo = clientObject;
  }

  closeModel(modelRef:any) {
    this._modalService.dismissAll(modelRef);
  }

  deleteClient(clientDataToBeDeleted:any){
    console.log(clientDataToBeDeleted);
  }

}
