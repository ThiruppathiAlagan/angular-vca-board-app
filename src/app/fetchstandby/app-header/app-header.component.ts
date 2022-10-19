import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  checked: boolean = true;
  @Output() isNewPatientClicked = new EventEmitter<boolean>();
  @Output() isWaitListChecked = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewPatient(): void {
    this.isNewPatientClicked.emit(true);
  }

  onInputChange(event: any) {
    // console.log(event.checked);
    this.isWaitListChecked.emit(event.checked);
  }

}
