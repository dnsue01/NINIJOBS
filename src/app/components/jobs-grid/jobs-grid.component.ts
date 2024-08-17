import { Component, Input } from '@angular/core';
import { Job } from '../../interfaces/jobsInterface.interface';

@Component({
  selector: 'app-jobs-grid',
  templateUrl: './jobs-grid.component.html',
  styleUrl: './jobs-grid.component.css'
})
export class JobsGridComponent {

  @Input() JobArray!:Job[];

}
