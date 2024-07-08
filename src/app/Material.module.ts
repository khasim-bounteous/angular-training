import { NgModule } from "@angular/core";
import {MatButtonModule} from "@angular/material/button"
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    exports:[
        MatButtonModule,
        MatFormFieldModule, 
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        
    ]
})
export class MaterialModule{}