import { ValidateFormInputService } from './../../services/validate-form-input.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  hasClientData: boolean = false;
  clientInfoForm:FormGroup = new FormGroup({});
  private _validName : boolean = true;
  private _validEmail : boolean = true;
  private _validPhone : boolean = true;
  private _validPOC : boolean = true;
  saveButtonDisabled:boolean = false;

  @Input()
  public clientInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private formBuilder:FormBuilder, private _validateForm : ValidateFormInputService) { }


  ngOnInit(): void {
    //console.log(this.clientInfo);
    if(this.clientInfo) {
      this.initialForm(this.clientInfo);
    } else{
      this.initialForm();
    }
  }

  initialForm(clientInfoObj: any = null) {
    if (clientInfoObj === null) {
      this.clientInfoForm = this.formBuilder.group({
        clientId: ["", Validators.required],
        clientName: ["", Validators.required],
        clientEmail: ["", Validators.required],
        clientPhone: ["",Validators.required],
        clientPOC: ["",Validators.required],
        clientStatus: [""],
        clientTier:[""],
        clientAddress1:[""],
        clientCity:[""],
        clientAddress2:[""],
        clientState:[""],
        clientZip:[""]
      });
      this.saveButtonDisabled = true;
      this._validEmail = false;
      this._validName = false;
      this._validPOC = false;
      this._validPhone = false;
      //console.log(this.clientInfoForm);
    } else {
      this.clientInfoForm = this.formBuilder.group({
        clientId: [clientInfoObj.ID, Validators.required],
        clientName: [clientInfoObj.Name, Validators.required],
        clientEmail: [clientInfoObj.EmailAddress, Validators.required],
        clientAddress1:[clientInfoObj.Address1],
        clientAddress2:[clientInfoObj.Address2],
        clientPhone: [clientInfoObj.PhoneNumber, Validators.required],
        clientPOC: [clientInfoObj.PointofContact, Validators.required],
        clientStatus: [clientInfoObj.ClientStatus],
        clientTier:[clientInfoObj.ClientTier],
        clientCity:[clientInfoObj.City],
        clientState:[clientInfoObj.State],
        clientZip:[clientInfoObj.Zip]
      });
      this.hasClientData = true;
      //console.log(clientInfoObj);
      //console.log(!this.clientInfoForm);
    }
  }

  close() {
    this.closeModel.emit();
  }

  validateName(){
    const inputElement:any = document.getElementById('clientCreationInputName');
    this._validName = this._validateForm.validateName(inputElement);
    //console.log(`is name valid : ${this.validName}`);
    this.isInputFieldEmpty();
  }

  validateEmail(){
    const inputElement:any = document.getElementById('clientCreationInputEmail');
    this._validEmail =  this._validateForm.validateEmail(inputElement);
    //console.log(`is email valid : ${this.validEmail}`);
    this.isInputFieldEmpty();
  }

  validatePhone(){
    const inputElement:any = document.getElementById('clientPhoneModal');
    if(inputElement && (<HTMLInputElement>inputElement).value.trim() === ""){
      this._validateForm.displayErrorMessage(inputElement,'Phone cannot be blank');
      this._validPhone = false;
    }else{
      this._validateForm.removeErrorMessage(inputElement);
      this._validPhone = true;
    }
    this.isInputFieldEmpty();
  }

  validatePOC(){
    const inputElement:any = document.getElementById('clientPOCModal');
    if(inputElement && (<HTMLInputElement>inputElement).value.trim() === ""){
      this._validateForm.displayErrorMessage(inputElement,'POC cannot be blank');
      this._validPOC = false;
    }else{
      this._validateForm.removeErrorMessage(inputElement);
      this._validPOC = true;
    }
    this.isInputFieldEmpty();
  }

  isInputFieldEmpty(){
    if(this._validEmail && this._validName && this._validPOC && this._validPhone){
      this.saveButtonDisabled = false;
      /* for(let i=0;i<reqField.length;i++){
        console.log(`isInputFieldEmpty() ---- ${(<HTMLInputElement>reqField[i]).value}`);
        //console.log(reqField[i].getAttribute("value"));
        if(reqField[i] && (<HTMLInputElement>reqField[i]).value === ""){
          this.saveButtonDisabled = true;
          reqField[i].classList.add('invalid-input');
          return true;
        }
        else{
          reqField[i].classList.remove('invalid-input');
          this.saveButtonDisabled = false;
          return false;
        }
      }     */
    }else{
      this.saveButtonDisabled = true;
    }    
  }

  updateClient(data:any){
    console.log(data.clientInfoForm);
  }

}
