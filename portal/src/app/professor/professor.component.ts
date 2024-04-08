import { AfterViewInit, OnInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {DbLecturer, DbModule, DbModuleRating} from "../database/database.classes";
import {ActivatedRoute} from "@angular/router";
import {DatabaseService} from "../database/database.service";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent {
  @ViewChild('Punktlichkeit') Punktlichkeit?: ElementRef;
  @ViewChild('Engagement') Engagement?: ElementRef;
  @ViewChild('Verstandlichkeit') Verstandlichkeit?: ElementRef;
  @ViewChild('Freundlichkeit') Freundlichkeit?: ElementRef;

  constructor(private renderer: Renderer2, private route: ActivatedRoute, private db: DatabaseService) { }

  lecturer: DbLecturer = new DbLecturer();
  suggestions: DbLecturer[] = [ new DbLecturer(), new DbLecturer(), new DbLecturer(), new DbLecturer(), new DbLecturer() ];
  modules: DbModule[] = [ new DbModule(), new DbModule(), new DbModule(), new DbModule(), new DbModule() ];

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      this.db.getLecturerAsync(params['user']).subscribe((lecturer) => {
        this.lecturer = lecturer;
        this.lecturer.modules.forEach((module, index) => {
          this.db.getModuleAsync(module).subscribe((mod) => {
            this.modules[index] = mod;
            this.modules = this.modules.sort((a, b) => DbModuleRating.calculateAverage(b.rating) - DbModuleRating.calculateAverage(a.rating));
          });
        });
        this.lecturer.suggestions.forEach((suggestion, index) => {
          this.db.getLecturerAsync(suggestion).subscribe((lect) => {
            this.suggestions[index] = lect;

            this.renderer.setStyle(this.Punktlichkeit?.nativeElement, 'background', `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${this.lecturer.rating.punctuality * 100}%, #E5E7E9 ${this.lecturer.rating.punctuality * 100}%, #E5E7E9 100%)`);
            this.renderer.setStyle(this.Engagement?.nativeElement, 'background', `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${this.lecturer.rating.commitment * 100}%, #E5E7E9 ${this.lecturer.rating.commitment * 100}%, #E5E7E9 100%)`);
            this.renderer.setStyle(this.Verstandlichkeit?.nativeElement, 'background', `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${this.lecturer.rating.clarity * 100}%, #E5E7E9 ${this.lecturer.rating.clarity * 100}%, #E5E7E9 100%)`);
            this.renderer.setStyle(this.Freundlichkeit?.nativeElement, 'background', `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${this.lecturer.rating.kindness * 100}%, #E5E7E9 ${this.lecturer.rating.kindness * 100}%, #E5E7E9 100%)`);
          });
        });
      });
    });
  }

  protected readonly DbModuleRating = DbModuleRating;

  languageCodeToName(code: string): string {
    switch (code) {
      case "de_DE": return "Deutsch";
      case "en_US": return "Englisch";
      default: return "Unbekannte Sprache";
    }
  }

  onModuleName(num: number) {
    window.open("../Kurs?num=" + num, "_self");
  }

  onLecturer(user: string) {
    window.open("../Professor?user=" + user, "_self");
  }
}
