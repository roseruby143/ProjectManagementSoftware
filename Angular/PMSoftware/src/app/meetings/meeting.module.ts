import { ComponentAccessGuard } from './../guard/component-access.guard';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';
import { MeetingManagementComponent } from './meeting-management/meeting-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MeetingManagementComponent,
    EditMeetingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'schedule-meeting' , component: ScheduleMeetingComponent, canActivate:[ComponentAccessGuard]},
      {path: 'manage-meetings' , component: MeetingManagementComponent, canActivate:[ComponentAccessGuard]}
    ])
  ]
})
export class MeetingModule { }
