import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {DbLecturer, DbLecturerRating, DbModule, DbModuleRating} from "./database.classes";
import { map } from 'rxjs/operators';

export enum SortMode {
  nil,
  ascending,
  descending
}

@Injectable()
export class DatabaseService {
  constructor (private http: HttpClient){}
  database: string = 'https://sd-edugrade-default-rtdb.europe-west1.firebasedatabase.app';
  lecturers: string = `${this.database}/lecturers`;
  modules: string = `${this.database}/modules`;

  // Methods for lecturer interactions

  getAllLecturersAsync(): Observable<DbLecturer[]> {
    return this.http.get(`${this.lecturers}.json`) as Observable<DbLecturer[]>;
  }

  getSortedLecturersAsync(key: string, sortMode: SortMode = SortMode.descending, numerical: boolean = false): Observable<DbLecturer[]> {
    switch (sortMode) {
      case SortMode.ascending:
        return this.getAllLecturersAsync().pipe(
          map((obj: DbLecturer[]) => obj.sort((a, b) => numerical ? a[key] - b[key] : a[key].localeCompare(b[key]))
        ));
      case SortMode.nil:
      case SortMode.descending:
        return this.getAllLecturersAsync().pipe(
          map((obj: DbLecturer[]) => obj.sort((a, b) => numerical ? b[key] - a[key] : b[key].localeCompare(a[key]))
        ));
    }
  }

  getLecturersSortedByRatingAsync(sortMode: SortMode = SortMode.descending): Observable<DbLecturer[]> {
    switch (sortMode) {
      case SortMode.ascending:
        return this.getAllLecturersAsync().pipe(
          map((obj: DbLecturer[]) => obj.sort((a, b) => DbLecturerRating.calculateAverage(a.rating) - DbLecturerRating.calculateAverage(b.rating))
        ));
      case SortMode.nil:
      case SortMode.descending:
        return this.getAllLecturersAsync().pipe(
          map((obj: DbLecturer[]) => obj.sort((a, b) => DbLecturerRating.calculateAverage(b.rating) - DbLecturerRating.calculateAverage(a.rating))
        ));
    }
  }

  getLecturerKeysAsync(): Observable<string[]>{
    return this.getAllLecturersAsync().pipe(
      map((obj: Object) => Object.keys(obj))
    );
  }

  getLecturerAsync(lecturerId: string): Observable<DbLecturer> {
    return this.getAllLecturersAsync().pipe(
      map((obj: DbLecturer[]) => obj.find((lecturer: DbLecturer) => lecturer.user === lecturerId) as DbLecturer)
    );
  }

  // Methods for module interactions

  getAllModulesAsync(): Observable<DbModule[]>{
    return this.http.get(`${this.modules}.json`) as Observable<DbModule[]>;
  }

  getSortedModulesAsync(key: string, sortMode: SortMode = SortMode.descending, numerical: boolean = false): Observable<DbModule[]> {
    switch (sortMode) {
      case SortMode.ascending:
        return this.getAllModulesAsync().pipe(
          map((obj: DbModule[]) => obj.sort((a, b) => numerical ? a[key] - b[key] : a[key].localeCompare(b[key]))
        ));
      case SortMode.nil:
      case SortMode.descending:
        return this.getAllModulesAsync().pipe(
          map((obj: DbModule[]) => obj.sort((a, b) => numerical ? b[key] - a[key] : b[key].localeCompare(a[key]))
        ));
    }
  }

  getModulesSortedByRatingAsync(sortMode: SortMode = SortMode.descending): Observable<DbModule[]> {
    switch (sortMode) {
      case SortMode.ascending:
        return this.getAllModulesAsync().pipe(
          map((obj: DbModule[]) => obj.sort((a, b) => DbModuleRating.calculateAverage(a.rating) - DbModuleRating.calculateAverage(b.rating))
        ));
      case SortMode.nil:
      case SortMode.descending:
        return this.getAllModulesAsync().pipe(
          map((obj: DbModule[]) => obj.sort((a, b) => DbModuleRating.calculateAverage(b.rating) - DbModuleRating.calculateAverage(a.rating))
        ));
    }
  }

  getModuleAsync(moduleId: number): Observable<DbModule> {
    return this.getAllModulesAsync().pipe(
      map((obj: DbModule[]) => obj.find((module: DbModule) => module.num === moduleId) as DbModule)
    );
  }


  searchModules(searchQuery: string): Observable<DbModule[]>  {
    return this.getAllModulesAsync().pipe(
      map((obj: DbModule[]) => obj.filter((module: DbModule) => module.name.toLowerCase().includes(searchQuery.toLowerCase())).map((module: DbModule) => module)
    ));
  }
}
