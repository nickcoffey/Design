import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JobService } from '../../services/job.service';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  id:any;
  job:any;
  jobLabor:any = null;
  jobRevenue:any = null;
  jobStatus:any = null;
  createdDate:any = null;
  endDate:any = null;
  jobMaterials:any;

  materials:any;
  selectedMaterials:SelectedMaterial[] = [];

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private jobService:JobService,
    private materialService:MaterialService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.jobService.getJobById(this.id).subscribe((job) => {
      this.job = job;
    });

    this.jobService.getJobMaterialsById(this.id).subscribe((jobMaterials) => {
      this.jobMaterials = jobMaterials;
    });

    this.materialService.getAllMaterials().subscribe((materials) => {
      this.materials = materials.materials;
    });
  }

  onAddMaterial(material){
    this.selectedMaterials.push(material);
  }

  onClear(){
    this.selectedMaterials = [];
  }

  onUpdate(){
    /*
    // To help with date on single update API call
    if(this.createdDate != null){
      this.createdDate = `"${this.createdDate}"`;
    }
    if(this.endDate != null){
      this.endDate = `"${this.endDate}"`;
    }

    let updatedJob = {
      jobID: this.id,
      jobLabor: this.jobLabor,
      jobRevenue: this.jobRevenue,
      jobStatus: this.jobStatus,
      createdDate: this.createdDate,
      endDate: this.endDate
    }

    console.log(updatedJob);
    */

    this.selectedMaterials.forEach(selectedMaterial => {
      this.jobService.createJobMaterial(this.id, selectedMaterial).subscribe((data) => {
        if(data.success){
          console.log(data.msg);
        } else{
          console.log(data.msg);
        }
      });
    });

    /*
    this.jobService.updateJob(updatedJob).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
      } else{
        console.log(data.msg);
      }
    });*/
    this.onClear();

    this.ngOnInit();
  }

  onDelete(){
    this.jobService.deleteJob(this.id).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.router.navigate(['/jobs']);
      } else{
        console.log(data.msg);
      }
    });
  }
}

interface SelectedMaterial {
  materialID: Number,
  materialName: String,
  quantity: Number,
  perUnitCost: Number
}