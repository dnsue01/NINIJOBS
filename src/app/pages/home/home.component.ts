import { Component } from '@angular/core';
import { ApiJobsService } from '../../services/api-jobs.service';
import { Jobs ,Job} from '../../interfaces/jobsInterface.interface';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  Jobs!: Jobs;
  JobArray:Job[] = [];
  citiesArray:string[] = [];
  constructor(private apiJobs: ApiJobsService) {}

  ngOnInit() {
    this.getAllJobs();
  }

  async getAllJobs(): Promise<any> {
    this.Jobs = await this.apiJobs.getAllJobs();
    this.JobArray = this.Jobs.data;

    this.JobArray.map((job)=>{

    let a = job.location.replaceAll(",", " ");
    let b = a.split(" ")[0]
      console.log(b);
      
    
      
    })


    this.JobArray.map((job)=>
        !this.citiesArray.includes(job.location.replaceAll(",", " ").split(" ")[0])?this.citiesArray.push(job.location.replaceAll(",", " ").split(" ")[0]):"")

  }
}
