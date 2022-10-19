import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  showAddNewPatientPanel: boolean = false;
  showPatientDetailPanel: boolean = false;
  @Output() isNewPatientClosed = new EventEmitter<boolean>();

  constructor() { }

  myControl = new FormControl<string | any>('');
  options: any[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
  petlists: any[] = [{ name: 'pet1' }, { name: 'pet2' }, { name: 'pet3' }];
  appointmenttypes: any[] = [{ name: 'appointment type1' }, { name: 'appointment type2' }, { name: 'appointment type3' }];
  appointmentreasons: any[] = [{ name: 'appointment reason1' }, { name: 'appointment reason2' }, { name: 'appointment reason3' }];
  selectedChoice: any;
  severities: any[] = ['Urgent', 'Semi-Urgent', 'Non-Urgent'];
  
  profileForm = new FormGroup({
    petlist: new FormControl('',[Validators.required]),
    appointmenttype: new FormControl('',[Validators.required]),
    appointmentreason: new FormControl('',[Validators.required]),
    options: new FormControl('',[Validators.required]),
    notes: new FormControl('',[Validators.required])   
  });
  

  ngOnInit(): void {
  }

  saveNewPatient():void {     
    var data = this.profileForm;
    alert("Data saved.");
    this.isNewPatientClosed.emit(true); 
 }

 close(): void{
   this.isNewPatientClosed.emit(true); 
 }

}
