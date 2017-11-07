import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JobService } from '../../services/job.service';
import { MaterialService } from '../../services/material.service';
import { AuthService } from '../../services/auth.service';
import { BidService } from '../../services/bid.service';
import { FileUploader } from 'ng2-file-upload';
// declare var $;

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  // fileTree = {
  //   "name": "test",
  //   "children": [
  //     {"name": "http://localhost:3000/uploads/jobs/33/file-1509295300688.txt"}
  //   ]
  // }

  files: any;
  filesUrls: any[] = [];
  fileName: any;

  id: any;
  job: any;
  jobLabor: any = null;
  jobRevenue: any = null;
  jobStatus: any = null;
  createdDate: any = null;
  endDate: any = null;
  jobMaterials: any;
  materials: any;
  selectedMaterials: SelectedMaterial[] = [];
  materialID: any;
  status: any;
  bidMaterials: any;

  url: string;
  uploader: FileUploader;
  //readyItems: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobService,
    private materialService: MaterialService,
    private bidService: BidService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.setupFileUploader();

    this.jobService.getJobById(this.id).subscribe((job) => {
      this.job = job;
      this.status = job[0].jobStatus;

      this.bidService.getBidMaterialsById(job[0].bidID).subscribe((bidMaterials) => {
        this.bidMaterials = bidMaterials;
      });
    });

    this.jobService.getJobMaterialsById(this.id).subscribe((jobMaterials) => {
      this.jobMaterials = jobMaterials;

      this.materialService.getAllMaterials().subscribe((materials) => {
        this.materials = materials.materials;

        for (let i = 0; i < this.materials.length; i++) {
          for (let k = 0; k < this.jobMaterials.length; k++) {
            if (this.materials[i].materialID == this.jobMaterials[k].materialID) {
              this.materials.splice(i, 1);
            }
          }
        }
      });
    });

    this.jobService.getJobFilesByID(this.id).subscribe((files) => {
      this.files = files.files;
      // for(let i = 0; i < this.files.length; i++){
      //   this.filesUrls.push(`http://localhost:3000/uploads/jobs/${this.id}/${this.files[i]}`);
      // }
    });
    // console.log(this.filesUrls);
  }

  setupFileUploader() {
    this.url = `http://localhost:3000/api/jobs/${this.id}/upload`;
    this.authService.loadToken();
    let headers: any = [{ name: 'Authorization', value: this.authService.authToken }, { name: 'Content-Type', value: 'application/json' }];
    this.uploader = new FileUploader({ url: this.url });
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      //this.readyItems.push(file);
      //console.log(file);
    }
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(response);
    }
  }

  onClickDeleteFile(file) {
    this.fileName = file;
  }

  onDeleteFile() {
    let file = {
      file: this.fileName
    }
    this.jobService.deleteJobFile(this.id, file).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
  }

  onAddMaterial(material, id) {
    this.selectedMaterials.push(material);
    this.materials.splice(id, 1);
  }

  onRemoveMaterial(material, id) {
    this.selectedMaterials.splice(id, 1);
    this.materials.push(material);
    //this.ngOnInit();
  }

  onClear() {
    this.selectedMaterials.forEach(selectedMaterial => {
      this.materials.push(selectedMaterial);
    });
    this.selectedMaterials = [];
  }

  onUpdate() {
    let updatedJob = {
      jobID: this.id,
      jobLabor: Number(this.jobLabor) + Number(this.job[0].jobLabor),
      jobRevenue: Number(this.jobRevenue) + Number(this.job[0].jobRevenue),
      jobStatus: this.jobStatus,
      createdDate: this.createdDate,
      endDate: this.endDate
    }

    //console.log(updatedJob);

    this.selectedMaterials.forEach(selectedMaterial => {
      this.jobService.createJobMaterial(this.id, selectedMaterial).subscribe((data) => {
        if (data.success) {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      });
    });

    this.jobService.updateJob(updatedJob).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });
    this.onClear();

    this.ngOnInit();
  }

  onDeleteJob() {
    this.jobService.deleteJob(this.id).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });

    let updatedBid = {
      bidID: this.job[0].bidID,
      bidStatus: "PENDING"
    };

    this.bidService.updateBidStatus(updatedBid).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.router.navigate(['/jobs']);
      } else {
        console.log(data.msg);
      }
    });
  }

  onClickDeleteMaterial(id) {
    this.materialID = id;
  }

  onDeleteMaterial() {
    let jobMaterial = {
      materialID: this.materialID,
      jobID: this.id
    };

    this.jobService.deleteJobMaterial(jobMaterial).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
  }

  onFinish() {
    let updatedJob = {
      jobID: this.id,
      jobStatus: "COMPLETED"
    };

    this.jobService.updateJobStatus(updatedJob).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.router.navigate(['/jobs']);
      } else {
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