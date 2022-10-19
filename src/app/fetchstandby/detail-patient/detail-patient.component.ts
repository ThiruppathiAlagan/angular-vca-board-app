import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../models/Patient'

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.scss']
})
export class DetailPatientComponent implements OnInit {
 
  @Output() isDetailPatientClosed = new EventEmitter<boolean>();

  patientDetails: any = [
    {
      'PatientName': 'Hawkes',
      'AppointmentType': 'Wellness',
      'AppointmentReason': 'Itching ears',
      'Severity': 'Semi-Urgent',
      'PhoneNumber': '(950) 345-8492',
      'AddedBy': 'Samantha Johnson',
      'Notes': 'Testing'
    }]



  constructor() {
  }

  detailForm = new FormGroup({
    notes: new FormControl('', [Validators.required])
  });


  ngOnInit(): void {
  }

  close(): void {
    this.isDetailPatientClosed.emit(true);
  }

  removePatient(): void {
    alert("Data removed.");
    this.isDetailPatientClosed.emit(true);
  }

}
