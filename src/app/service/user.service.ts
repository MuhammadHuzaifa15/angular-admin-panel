import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PeriodicElement } from '../components/users/users.component';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public selectedUserSubject = new BehaviorSubject<PeriodicElement | null>(
    null
  );
  public selectedUserCount = new BehaviorSubject<number>(0);

  dataSource!: PeriodicElement[];

  constructor(private httpClient: HttpClient) {}
  getAllUsers(): Observable<PeriodicElement[]> {
    return this.httpClient
      .get<PeriodicElement[]>(`https://jsonplaceholder.typicode.com/users`)
      .pipe(
        map((res: PeriodicElement[]) => {
          const data = res.map((obj: PeriodicElement) => ({
            name: obj.name,
            email: obj.email,
            phone: obj.phone,
            website: obj.website,
          }));
          return data;
        })
      );
  }

  selectedUser(user: PeriodicElement): void {
    this.selectedUserSubject.next(user);
    this.selectedUserCount.next(this.selectedUserCount.value + 1);
  }
}
