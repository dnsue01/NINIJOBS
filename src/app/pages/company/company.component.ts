import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiJobsService } from '../../services/api-jobs.service';
import { Job, Jobs } from '../../interfaces/jobsInterface.interface';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
})
export class CompanyComponent {
  companyName: string | undefined;

  Jobs!: Jobs;
  JobArray: Job[] = [];
  constructor(private route: ActivatedRoute, private apiJobs: ApiJobsService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.companyName = params.get('name') || '';
    });


    this.getAllJobs();
  
  }

  async getAllJobs(): Promise<any> {
    this.Jobs = await this.apiJobs.getAllJobs();
    this.JobArray = this.Jobs.data.filter((job)=>job.company_name.replaceAll(" ","") == this.companyName);
  }
}
