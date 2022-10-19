import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Appointment, Board } from '../models/schema.models';
import { BoardService } from '../services/board-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.scss']
})
export class AppBoardComponent implements OnInit {
  showAddNewPatientPanel: boolean = false;
  showPatientDetailPanel: boolean = false;
  boards: Board[] = [];

  disableDrag: boolean = false;

  constructor(private _boardService: BoardService) {
    this.boards = this._boardService.getBoards();

    // console.log(this.boards);
  }

  ngOnInit(): void {
  }

  onTrackDrop(event: CdkDragDrop<any>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
  filterByDate(talks: any, asc = 1) {
    // talks = [...talks.sort((a: any, b: any) => (asc) * (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()))];
  }

  trackIds(boardIndex: any): string[] {
    // console.log(boardIndex);
    let lables = this.boards[boardIndex].appointments.map((track: Appointment) => track.id);
    // console.log(lables);
    return lables;
  }

  onTalkDrop(event: CdkDragDrop<any>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given talk to the target data array. This happens if
    // a talk has been dropped on a different track.
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addEditTalk(talk: any, track: any, edit = false) {
    // Use the injected dialog service to launch the previously created edit-talk
    // component. Once the dialog closes, we assign the updated talk data to
    // the specified talk.
    // this._dialog.open(EditTalkComponent, {data: {talk, edit}, width: '500px'})
    //   .afterClosed()
    //   .subscribe(newTalkData => edit ? Object.assign(talk, newTalkData) : track.talks.unshift(newTalkData));
  }

  OpenNewPatientPanel(event: boolean): void {
    this.showAddNewPatientPanel = true;
    this.showPatientDetailPanel = false;  
  }

  isWaitListChecked(event: any): void {
    this.disableDrag = !event;
  }

  getDrageEnabledOrNot(val: boolean): boolean {
    if (this.disableDrag) {
      return true;
    } return val;
  }

showDetails() : void{    
    this.showPatientDetailPanel = true; 
    this.showAddNewPatientPanel = false;    
  }

 detailPatientClose(event:any): void {
    debugger;
    this.showPatientDetailPanel = false;      
  }

  newPatientClose(event:any):void{
    this.showAddNewPatientPanel = false;  
  }
}
