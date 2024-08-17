import { Component } from '@angular/core';
import { ApiJobsService } from '../../services/api-jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private apiJobs: ApiJobsService) {}

  ngOnInit(){
    this.getAllJobs();
  }

  async getAllJobs(): Promise<any> {
    let response = await this.apiJobs.getAllJobs();

    console.log(response);
  }
}
