import { ValidateFormInputService } from './../../services/validate-form-input.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})
export class EditMeetingComponent implements OnInit {

  @Input()
  public meetingInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  meetingInfoForm:FormGroup = new FormGroup({});
  hasMeetingData:boolean = false;
  saveButtonDisabled:boolean = false;
  private _validEmail = true;
  private _validName = true;
  private _validPOC = true;
  private _validCPhone = true;
  private _validDate = true;
  private _validTime = true;

  constructor(private formBuilder:FormBuilder, private _validateForm : ValidateFormInputService) { }

  ngOnInit(): void {
    if(this.meetingInfo) {
      this.initialForm(this.meetingInfo);
    } else{
      this.initialForm();
    }
  }

  initialForm(meetingInfoObj: any = null) {
    if (meetingInfoObj === null) {
      this.meetingInfoForm = this.formBuilder.group({
        meetingId: ["", Validators.required],
        clientName: ["", Validators.required],
        clientEmail: ["", Validators.required],
        clientPhone: ["",Validators.required],
        POC: ["",Validators.required],
        POCPhone: [""],
        date:["",Validators.required],
        time:["",Validators.required],
        scheduledOn:[""]
      });
      this.saveButtonDisabled = true;
      this._validEmail = false;
      this._validName = false;
      this._validPOC = false;
      this._validCPhone = false;
      this._validDate = false;
      this._validTime = false;
      //console.log(this.clientInfoForm);
    } else {
      this.meetingInfoForm = this.formBuilder.group({
        meetingId: [meetingInfoObj.MeetingID, Validators.required],
        clientName: [meetingInfoObj.ClientName, Validators.required],
        clientEmail: [meetingInfoObj.ClientEmail, Validators.required],
        clientPhone: [meetingInfoObj.ClientPhone, Validators.required],
        POC: [meetingInfoObj.POC, Validators.required],
        POCPhone: [meetingInfoObj.POCPhone],
        date:[meetingInfoObj.Date, Validators.required],
        time:[meetingInfoObj.Time, Validators.required],
        scheduledOn:[meetingInfoObj.ScheduledOn]
      });
      this.hasMeetingData = true;
    }
  }

  close(){
    this.closeModel.emit();
  }

  validateInputEmpty(nameElement:string,errorDisplayName:string){
    const inputElement:any = document.getElementsByName(nameElement);
    if(inputElement && (<HTMLInputElement>inputElement[0]).value.trim() === ""){
      this._validateForm.displayErrorMessage(inputElement[0],`${errorDisplayName} cannot be blank`);
      switch(nameElement){
        case 'clientName':
          this._validName = false;
          break;
        case 'clientEmail':
          this._validEmail = false;
          break;
        case 'clientPhone':
          this._validCPhone = false;
          break;
        case 'POC':
          this._validPOC = false;
          break;
        case 'date':
            this._validDate = false;
            break;
        case 'time':
          this._validTime = false;
          break;
      }
    }else{
      this._validateForm.removeErrorMessage(inputElement[0]);
      switch(nameElement){
        case 'clientName':
          this._validName = this._validateForm.validateName(inputElement[0]);
          break;
        case 'clientEmail':
          this._validEmail = this._validateForm.validateEmail(inputElement[0]);
          break;
        case 'clientPhone':
          this._validCPhone = true;
          break;
        case 'POC':
          this._validPOC = true;
          break;
        case 'date':
          this._validDate = this._validateForm.validateDate(inputElement[0]);
          break;
        case 'time':
          this._validTime = this._validateForm.validateTime(inputElement[0]);
          break;
      }
    }
    this.isInputFieldEmpty();
  }

  isInputFieldEmpty(){
    if(this._validEmail && this._validName && this._validPOC && this._validCPhone && this._validDate && this._validTime){
      this.saveButtonDisabled = false;
    }else{
      this.saveButtonDisabled = true;
    }    
  }

  updateMeeting(meetingID:any){
    console.log(`meeting ID to be updated is : ${meetingID}`);
  }

}
