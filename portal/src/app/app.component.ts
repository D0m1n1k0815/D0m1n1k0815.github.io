import { Component } from '@angular/core';
import { DatabaseService } from './database/database.service';
import {DbLecturer, DbModule} from "./database/database.classes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatabaseService]
})
export class AppComponent {
  title = 'typing_effect';
}
