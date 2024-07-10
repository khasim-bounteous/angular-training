import { NgModule } from "@angular/core";
import {MatButtonModule} from "@angular/material/button"
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'; 
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    exports:[
        MatButtonModule,
        MatFormFieldModule, 
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatGridListModule,
        MatSnackBarModule
    ]
})
export class MaterialModule{}