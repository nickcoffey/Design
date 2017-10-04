import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  
  jobs:any;
  inProgressJobs:any;
  completedJobs:any;

  constructor(
    private jobService:JobService
  ) { }

  ngOnInit() {
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
      this.inProgressJobs = jobs.inProgressJobs;
      this.completedJobs = jobs.completedJobs;
    });
  }

}
