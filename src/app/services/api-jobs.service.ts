import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiJobsService {
  constructor(private http: HttpClient) {}

  ulrApiJobs = 'https://www.arbeitnow.com/api/job-board-api';

  getAllJobs(): Promise<any> {
    return lastValueFrom(this.http.get(this.ulrApiJobs));
  }
}
