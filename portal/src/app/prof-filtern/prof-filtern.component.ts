import {Component, OnInit} from '@angular/core';
import {DatabaseService, SortMode} from "../database/database.service";
import {DbLecturerRating} from "../database/database.classes";

enum SortBy {
  nil,
  name,
  rating
}

@Component({
  selector: 'app-prof-filtern',
  templateUrl: './prof-filtern.component.html',
  styleUrls: ['./prof-filtern.component.css']
})
export class ProfFilternComponent implements OnInit {
  constructor(public db: DatabaseService) {}

  prof_users: string[] = ["mustermann", "musterfrau", "mueller"];
  prof_names: string[] = ["Prof. Dr. Max Mustermann", "Prof. Dr. Maria Musterfrau", "Prof. Dr. Hans Müller"];
  prof_ratings: number[] = [1, 2, 3, 4, 5];
  sortmode: SortMode = SortMode.nil;
  sortby: SortBy = SortBy.nil;

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

  sortByKey(key: string) {
    this.db.getSortedLecturersAsync(key, this.sortmode).subscribe((lecturers) => {
      this.prof_users = lecturers.map(lecturer => lecturer.user);
      this.prof_names = lecturers.map(lecturer => lecturer.name);

      for (let i = 1; i <= 12; i++) {
        (<HTMLElement>document.querySelector(`.Prof${i}_Rating`)!).style.background = `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${DbLecturerRating.calculateAverage(lecturers[i-1].rating) * 100}%, #E5E7E9 ${DbLecturerRating.calculateAverage(lecturers[i-1].rating) * 100}%, #E5E7E9 100%)`;
      }

    });
  }

  onName() {
    this.initModes(SortBy.name);
    this.sortByKey("name");
  }

  onBewertungen() {
    this.initModes(SortBy.rating);

    this.db.getLecturersSortedByRatingAsync(this.sortmode).subscribe((lecturers) => {
      this.prof_users = lecturers.map(lecturer => lecturer.user);
      this.prof_names = lecturers.map(lecturer => lecturer.name);
      
      for (let i = 1; i <= 12; i++) {
        (<HTMLElement>document.querySelector(`.Prof${i}_Rating`)!).style.background = `linear-gradient(90deg, #D4AC0D 0%, #D4AC0D ${DbLecturerRating.calculateAverage(lecturers[i-1].rating) * 100}%, #E5E7E9 ${DbLecturerRating.calculateAverage(lecturers[i-1].rating) * 100}%, #E5E7E9 100%)`;
      }

    });
  }

  onLecturerName(username: string) {
    window.open("../Professor?user=" + username, "_blank");
  }
}
