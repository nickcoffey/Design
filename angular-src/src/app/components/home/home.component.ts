import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { BidService } from '../../services/bid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs: any = [];
  currentJobs: any = [];
  currentJobsLength: any;
  jobCosts: any[] = [];
  bidCosts: any[] = [];

  constructor(
    private jobService: JobService,
    private bidService: BidService
  ) { }

  ngOnInit() {
    // this.jobService.getCurrentJobs().subscribe((jobs) => {
    //   this.currentJobs = jobs.jobs;
    //   this.currentJobsLength = jobs.jobs.length;

    //   jobs.jobs.forEach((currentJob) => {
    //     this.jobService.getCurrentJobMaterialsCost(currentJob.jobID).subscribe(cost => {
    //       this.jobCosts.push(cost[0].jobMaterialCost + currentJob.jobLabor);
    //     });
    //     this.bidService.getCurrentBidMaterialsCost(currentJob.jobID).subscribe(cost => {
    //       this.bidCosts.push(cost[0].bidMaterialCost + currentJob.bidLabor);
    //     });
    //   });
    // });
    this.jobService.getCurrentJobsCosts().subscribe((jobs) => {
      this.jobs = jobs.jobs;
    });
  }
}
