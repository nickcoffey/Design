import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  
  jobs:any;
  jobsLength:any;
  inProgressJobs:any;
  inProgressLength:any;
  completedJobs:any;
  completedLength:any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  displayTable: Boolean = false;

  constructor(
    private jobService:JobService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs.jobs;
      this.jobsLength = jobs.jobs.length;
      this.inProgressJobs = jobs.inProgressJobs;
      this.inProgressLength = jobs.inProgressJobs.length;
      //console.log('In-progress '+this.inProgressLength);
      this.completedJobs = jobs.completedJobs;
      this.completedLength = jobs.completedJobs.length;
      //console.log('Completed '+this.completedLength);

      this.dtTrigger.next();
      this.displayTable = true;
    });
  }

}
