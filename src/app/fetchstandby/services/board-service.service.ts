import { Injectable } from '@angular/core';
import { Board } from '../models/schema.models';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private _boards: Board[] = require('../data.json');
  constructor() { }

  getBoards(): Board[] {
    return this._boards;
  }
}
