import { AfterViewInit, OnInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DbLecturer, DbLecturerRating, DbModule, DbModuleRating} from "../database/database.classes";
import {DatabaseService} from "../database/database.service";

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.css']
})
export class KursComponent implements AfterViewInit{
  @ViewChild('Relevanz') Relevanz?: ElementRef;
  @ViewChild('Reichhaltigkeit') Reichhaltigkeit?: ElementRef;
  @ViewChild('Verstaendlichkeit') Verstaendlichkeit?: ElementRef;
  @ViewChild('Lernaufwand') Lernaufwand?: ElementRef;
  constructor(private renderer: Renderer2, private route: ActivatedRoute, private db: DatabaseService) { }

  module: DbModule = new DbModule();
  responsible: DbLecturer = new DbLecturer();
  suggestions: DbModule[] = [ new DbModule(), new DbModule(), new DbModule(), new DbModule(), new DbModule() ];

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      this.db.getModuleAsync(+params['num']).subscribe((module) => {
        this.module = module;
        this.db.getLecturerAsync(module.responsible).subscribe((lecturer) => {
          this.responsible = lecturer;
        });
        this.module.suggestions.forEach((suggestion, index) => {
          this.db.getModuleAsync(suggestion).subscribe((mod) => {
            this.suggestions[index] = mod;

            this.renderer.setStyle(this.Relevanz?.nativeElement, 'background', `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${this.module.rating.relevance * 100}%, #E5E7E9 ${this.module.rating.relevance * 100}%, #E5E7E9 100%)`);
            this.renderer.setStyle(this.Reichhaltigkeit?.nativeElement, 'background', `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${this.module.rating.richness * 100}%, #E5E7E9 ${this.module.rating.richness * 100}%, #E5E7E9 100%)`);
            this.renderer.setStyle(this.Verstaendlichkeit?.nativeElement, 'background', `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${this.module.rating.clarity * 100}%, #E5E7E9 ${this.module.rating.clarity * 100}%, #E5E7E9 100%)`);
            this.renderer.setStyle(this.Lernaufwand?.nativeElement, 'background', `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${this.module.rating.effort * 100}%, #E5E7E9 ${this.module.rating.effort * 100}%, #E5E7E9 100%)`);
          });
        });
      });
    });
  }

  languageCodeToName(code: string): string {
    switch (code) {
      case "de_DE": return "Deutsch";
      case "en_US": return "Englisch";
      default: return "Unbekannte Sprache";
    }
  }

  protected readonly DbLecturerRating = DbLecturerRating;

  onModule(num: number) {
    window.open("../Kurs?num=" + num, "_self");
  }

  onLecturer(user: string) {
    window.open("../Professor?user=" + user, "_self");
  }
}
