import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppBoardComponent } from './app-baord/app-board.component';
import { FetchStandByRoutingModule } from './fetchstandby-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import { BoardService } from './services/board-service.service';
import { BoardCardComponent } from './board-card/board-card.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {Router} from '@angular/router';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';


@NgModule({
  declarations: [
    AppHeaderComponent,
    AppBoardComponent,
    AddPatientComponent,
    BoardCardComponent,
      DetailPatientComponent
  ],
  imports: [
    CommonModule,
    FetchStandByRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatAutocompleteModule,
    LayoutModule,
      MatRadioModule,
  ],
  providers: [BoardService]
})
export class FetchstandbyModule { }
