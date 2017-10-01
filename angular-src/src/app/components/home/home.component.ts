import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentJobs:any;

  constructor(
    private jobService:JobService
  ) { }

  ngOnInit() {
    this.jobService.getCurrentJobs().subscribe((jobs) => {
      this.currentJobs = jobs.jobs;
    });
  }

}
