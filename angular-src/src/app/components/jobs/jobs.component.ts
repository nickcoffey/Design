import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: any;
  jobsLength: any;
  inProgressJobs: any;
  inProgressLength: any;
  completedJobs: any;
  completedLength: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  displayTable: Boolean = false;

  constructor(
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs.jobs;
      this.jobsLength = jobs.jobs.length;
      this.filterJobs(jobs);
      this.setupDataTable();
    });
  }

  ngAfterContentInit() {
    this.applyTableColor();
  }

  applyTableColor() {
    this.jobService.getAllJobs().subscribe(jobs => {
      jobs.jobs.forEach(job => {
        let id = job.jobID;
        let status = job.jobStatus;
        if (status == 'IN-PROGRESS') {
          document.getElementById(id).classList.add('info');
        } else if (status == 'COMPLETED') {
          document.getElementById(id).classList.add('success');
        } 
      });
    });
  }

  setupDataTable() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.dtTrigger.next();
    this.displayTable = true;
  }

  filterJobs(jobs) {
    this.inProgressJobs = jobs.inProgressJobs;
    this.inProgressLength = jobs.inProgressJobs.length;
    this.completedJobs = jobs.completedJobs;
    this.completedLength = jobs.completedJobs.length;
  }
}
