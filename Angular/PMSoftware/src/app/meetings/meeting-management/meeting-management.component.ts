import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { GetDataService } from './../../services/GetData.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting-management',
  templateUrl: './meeting-management.component.html',
  styleUrls: ['./meeting-management.component.css']
})
export class MeetingManagementComponent implements OnInit {

  meetingList : any[] = [];
  meetingKeys : any[] = [];
  meetingInfo : any;
  projectTitle:string = "";
  constructor(private _getDataService : GetDataService, private _meetingModalService : NgbModal) { }

  ngOnInit(): void {
    this.projectTitle = this._getDataService.projectTitle;
    const meetingList = this._getDataService.getMeetingList().subscribe({
      next: data => {
        this.meetingList = data; 
        //console.log(data);
        this.meetingKeys = Object.keys(data[0]);
      },
      error : err => console.log(err)
    });
  }

  modalShowHandler(data:Event){
    //console.log(data.currentTarget);
    if(document.getElementById("clientIdinModal")){
     // document.getElementById("clientIdinModal").innerText= data.currentTarget;
    }
  }

  openMeetingAddEditModal(modalRef:any, meetingObject = null){
    //console.log(`----------- ${clientObject}`);    
    this._meetingModalService.open(modalRef);
    this.meetingInfo = meetingObject;
  }

  closeModel(modelRef:any) {
    this._meetingModalService.dismissAll(modelRef);
  }

  cancelMeeting(meetingToBeCanceled:any){
    console.log(meetingToBeCanceled);
  }

}
