import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatMenuModule,
        MatToolbarModule,
        MatCardModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatTableModule,
        MatSnackBarModule,
        MatRadioModule,
        MatChipsModule,
        MatPaginatorIntl,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSortModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatRadioModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatRadioModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  providers:[
    
  ]
})
export class AppMaterialModule { }