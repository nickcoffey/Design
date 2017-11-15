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
  revenueAmount: any = null;
  changeAmount: any = null;
  laborHours: any = null;
  laborPrice: any = null;
  jobStatus: any = null;
  createdDate: any = null;
  endDate: any = null;
  jobMaterials: any;
  materials: any;
  // selectedMaterials: SelectedMaterial[] = [];
  selectedMaterials1: SelectedMaterial[] = [];
  material: any;
  linearFeet: number = 0;
  totalMaterialPrice: number = 0;
  materialID: any;
  changeID: any;
  revenueID: any;
  status: any;
  bidMaterials: any;
  changeOrders: any;
  revenues: any;
  labors: any;
  laborID: any;

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

      this.jobService.getChangeOrdersById(this.id).subscribe((changeOrders) => {
        this.changeOrders = changeOrders;
      });
      
      this.jobService.getRevenuesById(this.id).subscribe((revenues) => {
        this.revenues = revenues;
      });

      this.jobService.getLaborsById(this.id).subscribe((labors) => {
        this.labors = labors;
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

    /*this.jobService.getJobFilesByID(this.id).subscribe((files) => {
      this.files = files.files;
      // for(let i = 0; i < this.files.length; i++){
      //   this.filesUrls.push(`http://localhost:3000/uploads/jobs/${this.id}/${this.files[i]}`);
      // }
    });*/
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

  // onAddMaterial(material, id) {
  //   this.selectedMaterials.push(material);
  //   this.materials.splice(id, 1);
  // }

  // onRemoveMaterial(material, id) {
  //   this.selectedMaterials.splice(id, 1);
  //   this.materials.push(material);
  //   //this.ngOnInit();
  // }

  // onClear() {
  //   this.selectedMaterials.forEach(selectedMaterial => {
  //     this.materials.push(selectedMaterial);
  //   });
  //   this.selectedMaterials = [];
  // }

  onSelectMaterial(material, id) {
    // console.log(material);
    this.material = material;
    this.materialID = id;
  }

  onChangeMaterial(id) {
    // console.log(id);
    this.materialID = id;
  }

  onAddMaterial() {
    let selectedMaterial = {
      materialID: this.materials[this.materialID].materialID,
      materialName: this.materials[this.materialID].materialName,
      pricePerUnit: this.materials[this.materialID].pricePerUnit,
      linearFeetCoverage: this.materials[this.materialID].linearFeetCoverage,
      linearFeet: this.linearFeet
    };
    this.totalMaterialPrice += (selectedMaterial.pricePerUnit / selectedMaterial.linearFeetCoverage * this.linearFeet);
    this.selectedMaterials1.push(selectedMaterial);
    this.materials.splice(this.materialID, 1);
    this.material = null;
    this.linearFeet = 0;
  }

  onRemoveMaterial(material, id) {
    this.totalMaterialPrice -= (material.pricePerLinearFoot * material.linearFeet);
    this.selectedMaterials1.splice(id, 1);
    this.materials.push(material);
  }

  onClear() {
    this.selectedMaterials1.forEach(selectedMaterial => {
      this.materials.push(selectedMaterial);
    });
    this.selectedMaterials1 = [];
    //this.ngOnInit();
  }

  onUpdate() {
    let updatedJob = {
      jobID: this.id,
      jobStatus: this.jobStatus,
      createdDate: this.createdDate,
      endDate: this.endDate
    };
    let changeOrder = {
      changeAmount: this.changeAmount
    };
    let newRevenue = {
      jobID: this.id,
      revenueAmount: this.revenueAmount
    };
    let newLabor = {
      laborHours: this.laborHours,
      laborPrice: this.laborHours
    }

    this.selectedMaterials1.forEach(selectedMaterial => {
      this.jobService.createJobMaterial(this.id, selectedMaterial).subscribe((data) => {
        if (data.success) {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      });
    });

    this.jobService.createChangeOrder(this.id, changeOrder).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });

    this.jobService.createRevenue(newRevenue).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });

    this.jobService.createLabor(this.id, newLabor).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
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

  onClickDeleteJobMaterial(materialID) {
    this.materialID = materialID;
  }

  onDeleteMaterial() {
    let materialID = this.materialID;
    let jobID = this.id;

    this.jobService.deleteJobMaterial(materialID, jobID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
  }

  onClickDeleteChangeOrder(changeID) {
    this.changeID = changeID;
  }

  onDeleteChangeOrder() {
    let changeID = this.changeID;

    this.jobService.deleteChangeOrder(changeID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
  }

  onClickDeleteRevenue(revenueID) {
    this.revenueID = revenueID;
  }

  onDeleteRevenue() {
    let revenueID = this.revenueID;

    this.jobService.deleteRevenue(revenueID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
  }

  onClickDeleteLabor(laborID) {
    this.laborID = laborID;
  }

  onDeleteLabor() {
    let laborID = this.laborID;

    this.jobService.deleteLabor(laborID).subscribe((data) => {
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
  materialID: number,
  materialName: String,
  linearFeet: number,
  pricePerUnit: number,
  linearFeetCoverage: number
}