import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private _httpclient : HttpClient) { }

  private _projectTitle: string = "Project Buddy";
  public loginUser:string = "Login/Register";
  public get projectTitle(): string {
    return this._projectTitle;
  }

  public set projectTitle(value: string) {
    this._projectTitle = value;
  }
  
  getNavBarListData():Observable<any[]>{
    return this._httpclient.get<any[]>('../../assets/json/navbarList.json');
  }

  getAllClients():Observable<any[]>{
    return this._httpclient.get<any[]>('../../assets/json/clientList.json');
  }

  getMeetingList():Observable<any[]>{
    return this._httpclient.get<any[]>('../../assets/json/meetingList.json');
  }
}
