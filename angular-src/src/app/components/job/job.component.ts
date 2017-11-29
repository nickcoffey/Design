import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JobService } from '../../services/job.service';
import { MaterialService } from '../../services/material.service';
import { AuthService } from '../../services/auth.service';
import { BidService } from '../../services/bid.service';
import { LaborService } from '../../services/labor.service';
import { FileUploader } from 'ng2-file-upload';
import { AlertComponent } from '../alert/alert.component';
declare var $;

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  /** FILES **/
  files: any;
  filesUrls: any[] = [];
  fileName: any;
  file: any;
  url: string;
  uploader: FileUploader;
  /** JOB **/
  id: number = null;
  job: any;
  jobLabor: number = 0;
  jobStatus: string = '';
  createdDate: string = '';
  endDate: string = '';
  status: string = '';
  /** JOB MATERIALS **/
  jobMaterials: any;
  materials: any;
  selectedMaterials1: SelectedMaterial[] = [];
  material: any;
  materialName: string = '';
  materialID: number = null;
  materialIndex: number = null;
  linearFeet: number = 0;
  pricePerUnit: number = 0;
  linearFeetCoverage: number = 0;
  totalMaterialPrice: number = 0;
  totalMaterialPriceTable: number = 0;
  totalLinearFeetTable: number = 0;
  /** JOB REVENUES **/
  revenueID: number = null;
  revenueIndex: number = null;
  revenueAmount: number = 0;
  revenues: any;
  totalRevenueTable: number = 0;
  /** CHANGE ORDERS **/
  changeID: number = null;
  changeIndex: number = null;
  changeAmount: number = 0;
  changeOrders: any;
  totalChangeTable: number = 0;
  /** JOB LABOR **/
  laborHours: any = 0;
  laborPrice: any = 0;
  jobLabors: any;
  labors: any;
  laborID: number = null;
  laborIndex: number = null;
  selectedLabors: SelectedLabor[] = [];
  totalLaborPrice: number = 0;
  totalLaborPriceTable: number = 0;
  totalHoursTable: number = 0;
  hours: number = 0;
  wage: number = 0;
  roleName: string = '';
  laborDate: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobService,
    private materialService: MaterialService,
    private bidService: BidService,
    private authService: AuthService,
    private laborService: LaborService,
    private alert: AlertComponent
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.setupFileUploader();
    this.getJob();
    this.getChangeOrders();
    this.getRevenue();
    this.getLabor();
    this.getMaterials();
    this.getFiles();
  }

  /************************************************* JOB FUNCTIONS *********************************************************/
  getJob() {
    this.jobService.getJobById(this.id).subscribe((job) => {
      this.job = job;
      this.status = job[0].jobStatus;
    });
  }

  onClear() {
    //this.ngOnInit();
  }

  onUpdate() {
    let updatedJob = {
      jobID: this.id,
      jobStatus: this.jobStatus,
      createdDate: this.createdDate,
      endDate: this.endDate
    };

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
        // console.log(data.msg);
        let updatedBid = {
          bidID: this.job[0].bidID,
          bidStatus: "PENDING"
        };
        this.bidService.updateBidStatus(updatedBid).subscribe((data) => {
          if (data.success) {
            // console.log(data.msg);
            this.alert.displayAlert('Job deleted', 'success');
            this.router.navigate(['/jobs']);
          } else {
            console.log(data.msg);
          }
        });
      } else {
        console.log(data.msg);
      }
    });
  }

  onReopen() {
    let updatedJob = {
      jobID: this.id,
      jobStatus: "IN-PROGRESS"
    };

    this.jobService.updateJobStatus(updatedJob).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.alert.displayAlert('Job re-opened', 'success');
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
        // console.log(data.msg);
        this.alert.displayAlert('Job completed', 'success');
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
  }

  /************************************************* FILE FUNCTIONS *********************************************************/
  getFiles() {
    this.jobService.getJobFilesByID(this.id).subscribe((files) => {
      this.files = files;
      // console.log(this.files);
    });
  }

  setupFileUploader() {
    this.url = `/api/jobs/${this.id}/upload`;
    // this.url = `http://localhost:3000/api/jobs/${this.id}/upload`;
    this.authService.loadToken();
    let headers: any = [{ name: 'Authorization', value: this.authService.authToken }, { name: 'Content-Type', value: 'application/json' }];
    this.uploader = new FileUploader({ url: this.url });
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      //this.readyItems.push(file);
      //console.log(file);
    }
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.ngOnInit();
      $('#upload-modal').modal('hide');
      if(JSON.parse(response).success == true) {
        this.alert.displayAlert(JSON.parse(response).msg, 'success');
      } else {
        this.alert.displayAlert(JSON.parse(response).msg, 'warning');
      }
      this.uploader.clearQueue();
    }
  }

  onClickDeleteFile(file) {
    this.file = file;
    $('#delete-file-modal').modal('show');
  }

  onDeleteFile() {
    let fileToRemove = {
      key: this.file.fileName
    };
    this.jobService.deleteJobFile(this.file.fileID, fileToRemove).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.getFiles();
        $('#delete-file-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  /************************************************* MATERIAL FUNCTIONS *********************************************************/
  getMaterials() {
    this.jobService.getJobMaterialsById(this.id).subscribe((jobMaterials) => {
      this.jobMaterials = jobMaterials;
      this.totalMaterialPriceTable = 0;
      this.totalLinearFeetTable = 0;
      for (let k = 0; k < this.jobMaterials.length; k++) {
        this.totalMaterialPriceTable += ((this.jobMaterials[k].pricePerUnit / this.jobMaterials[k].linearFeetCoverage) * this.jobMaterials[k].linearFeet);
        this.totalLinearFeetTable += this.jobMaterials[k].linearFeet;
      }

      this.materialService.getAllMaterials().subscribe((materials) => {
        this.materials = materials.materials;

        this.jobMaterials.forEach(jobMaterial => {
          this.materials.forEach((material, i) => {
            if (material.materialID == jobMaterial.materialID) {
              this.materials.splice(i, 1);
              // this.totalMaterialPriceTable += ((jobMaterial.pricePerUnit / jobMaterial.linearFeetCoverage) * jobMaterial.linearFeet);
            }
          });
        });
        // for (let i = 0; i < this.materials.length; i++) {
        //   for (let k = 0; k < this.jobMaterials.length; k++) {
        //     if (this.materials[i].materialID == this.jobMaterials[k].materialID) {
        //       this.materials.splice(i, 1);
        //       this.totalMaterialPriceTable += ((this.jobMaterials[k].pricePerUnit / this.jobMaterials[k].linearFeetCoverage) * this.jobMaterials[k].linearFeet);
        //     }
        //   }
        // }
      });
    });
  }

  onClearJobMaterials() {
    this.selectedMaterials1.forEach(selectedMaterial => {
      this.materials.push(selectedMaterial);
    });
    this.selectedMaterials1 = [];
    this.linearFeet = 0;
    this.pricePerUnit = 0;
    this.linearFeetCoverage = 0;
    this.totalMaterialPrice = 0;
  }

  clearMaterialUpdate() {
    this.linearFeet = 0;
    this.pricePerUnit = 0;
    this.linearFeetCoverage = 0;
  }

  onCreateJobMaterials() {
    this.selectedMaterials1.forEach(selectedMaterial => {
      this.jobService.createJobMaterial(this.id, selectedMaterial).subscribe((data) => {
        if (data.success) {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      });
    });
    this.getMaterials();
    this.onClearJobMaterials();
    $('#create-material-modal').modal('hide');
    this.alert.displayAlert('Material added', 'success');
  }

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
    this.totalMaterialPrice += ((selectedMaterial.pricePerUnit / selectedMaterial.linearFeetCoverage) * this.linearFeet);
    this.selectedMaterials1.push(selectedMaterial);
    this.materials.splice(this.materialID, 1);
    this.material = null;
    this.linearFeet = 0;
  }

  onRemoveMaterial(material, id) {
    this.totalMaterialPrice -= ((material.pricePerUnit / material.linearFeetCoverage) * material.linearFeet);
    this.selectedMaterials1.splice(id, 1);
    this.materials.push(material);
  }

  onClickUpdateJobMaterial(materialID, materialIndex) {
    this.materialID = materialID;
    this.materialIndex = materialIndex;
    this.linearFeet = this.jobMaterials[materialIndex].linearFeet;
    this.pricePerUnit = this.jobMaterials[materialIndex].pricePerUnit;
    this.linearFeetCoverage = this.jobMaterials[materialIndex].linearFeetCoverage;
    this.materialName = this.jobMaterials[materialIndex].materialName;
  }

  onUpdateJobMaterial() {
    let updatedJobMaterial = {
      jobID: this.id,
      materialID: this.jobMaterials[this.materialIndex].materialID,
      linearFeet: this.linearFeet,
      pricePerUnit: this.pricePerUnit,
      linearFeetCoverage: this.linearFeetCoverage
    };

    this.jobService.updateJobMaterial(updatedJobMaterial).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getMaterials();
        $('#update-material-modal').modal('hide');
        this.alert.displayAlert('Material updated', 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  onDeleteMaterial() {
    let materialID = this.materialID;
    let jobID = this.id;

    this.jobService.deleteJobMaterial(materialID, jobID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getMaterials();
        $('#update-material-modal').modal('hide');
        this.alert.displayAlert('Material deleted', 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  /************************************************* CHANGE ORDER FUNCTIONS *********************************************************/
  getChangeOrders() {
    this.jobService.getChangeOrdersById(this.id).subscribe((changeOrders) => {
      this.changeOrders = changeOrders;
      this.totalChangeTable = 0;
      for (let k = 0; k < this.changeOrders.length; k++) {
        this.totalChangeTable += (this.changeOrders[k].changeAmount);
      }
    });
  }

  onClickUpdateChangeOrder(changeID, changeIndex) {
    this.changeID = changeID;
    this.changeIndex = changeIndex;
    this.changeAmount = this.changeOrders[changeIndex].changeAmount;
  }

  onUpdateChangeOrder() {
    let updatedChangeOrder = {
      changeID: this.changeOrders[this.changeIndex].changeID,
      changeAmount: this.changeAmount
    }
    this.jobService.updateChangeOrder(updatedChangeOrder).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getChangeOrders();
        $('#update-change-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  onDeleteChangeOrder() {
    let changeID = this.changeID;

    this.jobService.deleteChangeOrder(changeID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getChangeOrders();
        $('#update-change-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  onCreateChangeOrder() {
    let changeOrder = {
      changeAmount: this.changeAmount
    };

    this.jobService.createChangeOrder(this.id, changeOrder).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getChangeOrders();
        $('#create-change-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  onClearChangeOrder() {
    this.changeAmount = 0;
  }

  /************************************************* REVENUE FUNCTIONS *********************************************************/
  getRevenue() {
    this.jobService.getRevenuesById(this.id).subscribe((revenues) => {
      this.revenues = revenues;
      this.totalRevenueTable = 0;
      for (let k = 0; k < this.revenues.length; k++) {
        this.totalRevenueTable += (this.revenues[k].revenueAmount);
      }
    });
  }

  onClearJobRevenue() {
    this.revenueAmount = 0;
  }

  onCreateJobRevenue() {
    let newRevenue = {
      jobID: this.id,
      revenueAmount: this.revenueAmount
    };

    this.jobService.createRevenue(newRevenue).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getRevenue();
        $('#create-revenue-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });

  }

  onClickUpdateRevenue(revenueID, revenueIndex) {
    this.revenueID = revenueID;
    this.revenueIndex = revenueIndex;
    this.revenueAmount = this.revenues[revenueIndex].revenueAmount;
  }

  onUpdateJobRevenue() {
    let updatedJobRevenue = {
      revenueID: this.revenues[this.revenueIndex].revenueID,
      revenueAmount: this.revenueAmount
    };

    this.jobService.updateJobRevenue(updatedJobRevenue).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getRevenue();
        $('#update-revenue-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  onDeleteRevenue() {
    let revenueID = this.revenueID;

    this.jobService.deleteRevenue(revenueID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getRevenue();
        $('#update-revenue-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  /************************************************* LABOR FUNCTIONS *********************************************************/
  getLabor() {
    this.jobService.getLaborsById(this.id).subscribe((jobLabors) => {
      this.jobLabors = jobLabors;
      this.totalLaborPriceTable = 0;
      this.totalHoursTable = 0;
      for (let k = 0; k < this.jobLabors.length; k++) {
        this.totalLaborPriceTable += (this.jobLabors[k].roleWage * this.jobLabors[k].laborHours);
        this.totalHoursTable += this.jobLabors[k].laborHours;
      }
    });
    this.laborService.getAllLabors().subscribe((labors) => {
      this.labors = labors.labors;
    });
  }

  onClickUpdateLabor(laborID, laborIndex) {
    this.laborID = laborID;
    this.laborIndex = laborIndex;
    this.hours = this.jobLabors[laborIndex].laborHours;
    this.wage = this.jobLabors[laborIndex].roleWage;
    this.roleName = this.jobLabors[laborIndex].roleName;
    this.laborDate = this.jobLabors[laborIndex].laborDate;
  }

  clearLaborUpdate() {
    this.wage = 0;
    this.hours = 0;
  }

  clearLaborCreate() {
    this.selectedLabors.forEach(selectLabor => {
      this.labors.push(selectLabor);
    });
    this.hours = 0;
    this.totalLaborPrice = 0;
    this.selectedLabors = [];
  }

  onUpdateJobLabor() {
    let updatedJobLabor = {
      laborID: this.jobLabors[this.laborIndex].laborID,
      laborHours: this.hours,
      roleWage: this.wage
    };

    this.jobService.updateJobLabor(updatedJobLabor).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getLabor();
        $('#update-labor-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    }
    );
  }

  /********** CREATE START **********/
  onCreateJobLabor() {
    this.selectedLabors.forEach((selectedLabor) => {
      this.jobService.createLabor(this.id, selectedLabor).subscribe((data) => {
        if (data.success) {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      });
    });
    this.getLabor();
    $('#create-labor-modal').modal('hide');
    this.alert.displayAlert('Labor added', 'success');
  }

  onAddLabor() {
    let selectedLabor = {
      roleID: this.labors[this.laborID].roleID,
      roleName: this.labors[this.laborID].roleName,
      roleWage: this.labors[this.laborID].roleWage,
      laborHours: this.hours
    };
    this.totalLaborPrice += (selectedLabor.roleWage * this.hours);
    this.selectedLabors.push(selectedLabor);
    this.labors.splice(this.laborID, 1);
    this.hours = 0;
  }

  onRemoveLabor(labor, id) {
    this.totalLaborPrice -= (labor.laborHours * labor.roleWage);
    this.selectedLabors.splice(id, 1);
    this.labors.push(labor);
  }

  onChangeLabor(id) {
    this.laborID = id;
  }
  /********** CREATE END **********/

  onClearJobLabor() {
    this.hours = 0;
    this.wage = 0;
    this.roleName = '';
    this.laborDate = '';
  }

  onDeleteLabor() {
    let laborID = this.laborID;

    this.jobService.deleteLabor(laborID).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.getLabor();
        $('#update-labor-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
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
interface SelectedLabor {
  roleID: number,
  roleName: String,
  roleWage: number,
  laborHours: number
}

/************************************************* UNUSED CODE *********************************************************/
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

 // fileTree = {
  //   "name": "test",
  //   "children": [
  //     {"name": "http://localhost:3000/uploads/jobs/33/file-1509295300688.txt"}
  //   ]
  // }

  // selectedMaterials: SelectedMaterial[] = [];

   //readyItems: any[] = [];


  //  onDeleteFile() {
  //   let file = {
  //     file: this.fileName
  //   }
  //   this.jobService.deleteJobFile(this.id, file).subscribe((data) => {
  //     if (data.success) {
  //       console.log(data.msg);
  //       this.ngOnInit();
  //     } else {
  //       console.log(data.msg);
  //     }
  //   });
  // }