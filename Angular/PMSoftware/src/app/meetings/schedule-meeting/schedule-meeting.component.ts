import { GetDataService } from './../../services/GetData.service';
import { ValidateFormInputService } from './../../services/validate-form-input.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent implements OnInit {

  constructor(private _validateInputServiceObj : ValidateFormInputService, private _getDataServiceObj : GetDataService) { }

  projectTitle:string = "PM";

  ngOnInit(): void {
    this.projectTitle = this._getDataServiceObj.projectTitle;
  }

  validateDate():boolean{
    const dateInputElement:any = document.getElementById('meetingScheduleMDateInput');
    return this._validateInputServiceObj.validateDate(dateInputElement);
  }

  validateTime():boolean{
    const timeInputElement:any = document.getElementById('meetingTime');
    return this._validateInputServiceObj.validateTime(timeInputElement);
  }

}
