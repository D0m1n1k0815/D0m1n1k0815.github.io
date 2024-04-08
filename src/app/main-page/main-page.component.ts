import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { DatabaseService } from '../database/database.service';
import {DbLecturer, DbLecturerRating, DbModule, DbModuleRating} from "../database/database.classes";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
    constructor(public databaseService: DatabaseService, private renderer : Renderer2) {}

    @ViewChild('typed') typedTextSpan?: ElementRef;
    @ViewChild('typed') cursorSpan?: ElementRef;
    @ViewChild('Prof1_Picture') Prof1_Picture?: ElementRef;

    prof_users = ["Prof1", "Prof2", "Prof3", "Prof4", "Prof5"];
    prof_names = ["Prof1", "Prof2", "Prof3", "Prof4", "Prof5"];
    kurs_nums = [12345, 54321, 67890];
    kurs_names = ["Kurs 1", "Kurs 2", "Kurs 3"];

    ngOnInit() {
      this.databaseService.getLecturersSortedByRatingAsync().subscribe((lecturers: DbLecturer[]) => {
        this.prof_users = lecturers.map(lecturer => lecturer.user);
        this.prof_names = lecturers.map(lecturer => lecturer.name);
      });

      this.databaseService.getModulesSortedByRatingAsync().subscribe((modules: DbModule[]) => {
        this.kurs_nums = modules.map(module => module.num);
        this.kurs_names = modules.map(module => module.name);
      });

      this.databaseService.getLecturersSortedByRatingAsync().subscribe((lecturers: DbLecturer[]) => {
        for (let i = 1; i <= 5; i++) {
          (<HTMLElement>document.querySelector(`.Prof${i}_Picture`)!).innerHTML = `<img style="width:54px; height:54px; border-radius: 50%;"  src="${lecturers[i-1].image}">`;
          (<HTMLElement>document.querySelector(`.Prof${i}_Rating`)!).style.background = `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${DbLecturerRating.calculateAverage(lecturers[i-1].rating) * 100}%, #E5E7E9 ${DbLecturerRating.calculateAverage(lecturers[i-1].rating) * 100}%, #E5E7E9 100%)`;
        }
      });

      this.databaseService.getModulesSortedByRatingAsync().subscribe((modules: DbModule[]) => {
        for (let i = 1; i <= 5; i++) {
          (<HTMLElement>document.querySelector(`.Kurs${i}_Rating`)!).style.background = `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${DbModuleRating.calculateAverage(modules[i-1].rating) * 100}%, #E5E7E9 ${DbModuleRating.calculateAverage(modules[i-1].rating) * 100}%, #E5E7E9 100%)`;
        }
      });
    }

    ngAfterViewInit() {
      typedTextSpan = this.typedTextSpan?.nativeElement;
      cursorSpan = this.cursorSpan?.nativeElement;
    }

  onLecturerName(username: string) {
    window.open("../Professor?user=" + username, "_blank");
  }

  onModuleName(num: number) {
    window.open("../Kurs?num=" + num, "_blank");
  }

  searchQuery: string = '';
  searchResults: any[] = [];

  onSearch() {
    console.log(this.searchQuery);
    this.databaseService.searchModules(this.searchQuery).subscribe((results: DbModule[]) => {
      window.open("../Kurs?num=" + results[0].num, "_blank");
    });
  }
}

var typedTextSpan = <HTMLElement>document.querySelector(".typed-text")!;
var cursorSpan = <HTMLElement>document.querySelector(".cursor")!;

const textArray = ["Fachbereich", "Professor", "Kurs"];
const typingDelay = 70;
const erasingDelay = 70;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan!.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, 250);
});
