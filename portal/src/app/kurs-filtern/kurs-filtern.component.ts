import { Component } from '@angular/core';
import {DatabaseService, SortMode} from "../database/database.service";
import {DbLecturerRating, DbModuleRating} from "../database/database.classes";

enum SortBy {
  nil,
  num,
  abbrev,
  name,
  rating
}

@Component({
  selector: 'app-kurs-filtern',
  templateUrl: './kurs-filtern.component.html',
  styleUrls: ['./kurs-filtern.component.css']
})
export class KursFilternComponent {
  constructor(public db: DatabaseService) {}

  module_nums: number[] = [12345, 54321, 67890];
  module_names: string[] = ["Modul 1", "Modul 2", "Modul 3"];
  module_abbrevs: string[] = ["M1", "M2", "M3"];
  module_ratings: number[] = [1, 2, 3, 4, 5];

  sortby: SortBy = SortBy.nil;
  sortmode: SortMode = SortMode.nil;

  ngOnInit() {
    this.onBewertungen();
  }

  initModes(sortby: SortBy) {
    if (this.sortby !== sortby) {
      this.sortby = sortby;
      this.sortmode = SortMode.descending;
    } else {
      // Sortiermodus umkehren
      switch (this.sortmode) {
        case SortMode.ascending:
          this.sortmode = SortMode.descending;
          break;
        case SortMode.descending:
          this.sortmode = SortMode.ascending;
          break;
      }
    }
  }

  sortByKey(key: string, numerical = false) {
    this.db.getSortedModulesAsync(key, this.sortmode, numerical).subscribe((modules) => {
      this.module_nums = modules.map(module => module.num);
      this.module_names = modules.map(module => module.name);
      this.module_abbrevs = modules.map(module => module.abbreviation);
      
      for (let i = 1; i <= 20; i++) {
        (<HTMLElement>document.querySelector(`.Kurs${i}_Rating`)!).style.background = `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${DbModuleRating.calculateAverage(modules[i-1].rating) * 100}%, #E5E7E9 ${DbModuleRating.calculateAverage(modules[i-1].rating) * 100}%, #E5E7E9 100%)`;
      }

    });
  }

  onNummer() {
    this.initModes(SortBy.num);
    this.sortByKey("num", true);
  }

  onAbkuerzung() {
    this.initModes(SortBy.abbrev);
    this.sortByKey("abbreviation");
  }

  onName() {
    this.initModes(SortBy.name);
    this.sortByKey("name");
  }

  onBewertungen() {
    this.initModes(SortBy.rating);
    this.db.getModulesSortedByRatingAsync(this.sortmode).subscribe((modules) => {
      this.module_nums = modules.map(module => module.num);
      this.module_names = modules.map(module => module.name);
      this.module_abbrevs = modules.map(module => module.abbreviation);
      
      for (let i = 1; i <= 20; i++) {
        (<HTMLElement>document.querySelector(`.Kurs${i}_Rating`)!).style.background = `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${DbModuleRating.calculateAverage(modules[i-1].rating) * 100}%, #E5E7E9 ${DbModuleRating.calculateAverage(modules[i-1].rating) * 100}%, #E5E7E9 100%)`;
      }
      
    } );
  }

  onModuleName(num: number) {
    window.open("../Kurs?num=" + num, "_blank");
  }
}
