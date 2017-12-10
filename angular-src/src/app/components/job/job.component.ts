import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JobService } from '../../services/job.service';
import { MaterialService } from '../../services/material.service';
import { AuthService } from '../../services/auth.service';
import { BidService } from '../../services/bid.service';
import { LaborService } from '../../services/labor.service';
import { FileUploader } from 'ng2-file-upload';
import { AlertComponent } from '../alert/alert.component';
import { EquipmentService } from '../../services/equipment.service';
import { CustomerService } from '../../services/customer.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
declare var $;

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {


  /** FORM **/
  contacts: any;
  contactName: string = '';
  line4: number = 0;
  line6: number = 0;
  line7: number = 0;
  line10: number = 0;
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
  jobNotes: string = '';
  /** JOB MATERIALS **/
  jobMaterials: any;
  materials: any;
  selectedMaterials1: SelectedMaterial[] = [];
  material: any;
  materialName: string = '';
  materialID: number = null;
  materialIndex: number = null;
  numberOfUnits: number = 0;
  pricePerUnit: number = 0;
  linearFeetCoverage: number = 0;
  totalMaterialPrice: number = 0;
  totalMaterialPriceTable: number = 0;
  totalUnitsTable: number = 0;
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
  /** EQUIPMENT **/
  equipments: any;
  jobEquipments: any;
  equipment: any;
  equipmentIndex: number = null;
  equipmentID: number = null;
  equipmentName: string = '';
  pricePerDay: number = 0;
  intervalCost: number = 0;
  DaysSelected: number = null;
  pricePer1Week: number = null;
  WeekSelected1: number = null;
  pricePer2Week: number = null;
  WeekSelected2: number = null;
  pricePer3Week: number = null;
  WeekSelected3: number = null;
  equipmentNumOfIntervals: number = 0;
  equipmentInterval: number = null;
  equipmentIntervals: string[] = ['Day(s)', '1 Week', '2 Weeks', '3 Weeks'];
  selectedEquipments: SelectedEquipment[] = [];
  totalEquipmentPrice: number = 0;
  totalEquipmentPriceTable: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobService,
    private materialService: MaterialService,
    private bidService: BidService,
    private authService: AuthService,
    private laborService: LaborService,
    private alert: AlertComponent,
    private equipmentService: EquipmentService,
    private customerService: CustomerService
  ) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.setupFileUploader();
    this.getJob();
    this.getChangeOrders();
    this.getRevenue();
    this.getLabor();
    this.getMaterials();
    this.getJobEquipments();
    this.getFiles();
  }

  /************************************************* JOB FUNCTIONS *********************************************************/
  getJob() {
    this.jobService.getJobById(this.id).subscribe((job) => {
      this.job = job;
      this.status = job[0].jobStatus;
      this.customerService.getAllContacts(job[0].customerID).subscribe((contacts) => {
        this.contacts = contacts;
      });
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

  onClearNotes() {
    this.jobNotes = '';
  }

  onClickUpdateNotes() {
    this.jobNotes = this.job[0].jobNotes;
  }

  onUpdateNotes() {
    let updatedJob = {
      jobID: this.id,
      jobStatus: null,
      createdDate: null,
      endDate: null,
      jobNotes: this.jobNotes
    };

    this.jobService.updateJob(updatedJob).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getJob();
        $('#update-notes-modal').modal('hide');
        this.alert.displayAlert('Notes updated', 'success');
      } else {
        console.log(data.msg);
      }
    });
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
      if (JSON.parse(response).success == true) {
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
      this.totalUnitsTable = 0;
      for (let k = 0; k < this.jobMaterials.length; k++) {
        this.totalMaterialPriceTable += (this.jobMaterials[k].pricePerUnit * this.jobMaterials[k].numberOfUnits);
        this.totalUnitsTable += this.jobMaterials[k].numberOfUnits;
      }

      this.materialService.getAllMaterials().subscribe((materials) => {
        this.materials = materials.materials;

        // this.jobMaterials.forEach(jobMaterial => {
        //   this.materials.forEach((material, i) => {
        //     if (material.materialID == jobMaterial.materialID) {
        //       this.materials.splice(i, 1);
        //       // this.totalMaterialPriceTable += ((jobMaterial.pricePerUnit / jobMaterial.linearFeetCoverage) * jobMaterial.linearFeet);
        //     }
        //   });
        // });
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
    this.numberOfUnits = 0;
    this.pricePerUnit = 0;
    this.linearFeetCoverage = 0;
    this.totalMaterialPrice = 0;
  }

  clearMaterialUpdate() {
    this.numberOfUnits = 0;
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
      numberOfUnits: this.numberOfUnits
    };
    this.totalMaterialPrice += (selectedMaterial.pricePerUnit * this.numberOfUnits);
    this.selectedMaterials1.push(selectedMaterial);
    this.materials.splice(this.materialID, 1);
    this.material = null;
    this.numberOfUnits = 0;
  }

  onRemoveMaterial(material, id) {
    this.totalMaterialPrice -= ((material.pricePerUnit / material.linearFeetCoverage) * material.numberOfUnits);
    this.selectedMaterials1.splice(id, 1);
    this.materials.push(material);
  }

  onClickUpdateJobMaterial(materialID, materialIndex) {
    this.materialID = materialID;
    this.materialIndex = materialIndex;
    this.numberOfUnits = this.jobMaterials[materialIndex].numberOfUnits;
    this.pricePerUnit = this.jobMaterials[materialIndex].pricePerUnit;
    this.linearFeetCoverage = this.jobMaterials[materialIndex].linearFeetCoverage;
    this.materialName = this.jobMaterials[materialIndex].materialName;
  }

  onUpdateJobMaterial() {
    let updatedJobMaterial = {
      jobID: this.id,
      materialID: this.jobMaterials[this.materialIndex].materialID,
      numberOfUnits: this.numberOfUnits,
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

  /**************************************************** Job Equipment **********************************************************************/
  getJobEquipments() {
    this.totalEquipmentPriceTable = 0;
    this.equipments = [];
    this.jobService.getJobEquipmentsById(this.id).subscribe((jobEquipments) => {
      this.jobEquipments = jobEquipments;
      this.jobEquipments.forEach((jobEquipment) => {
        if (jobEquipment.DaysSelected == 1) {
          this.totalEquipmentPriceTable += (jobEquipment.pricePerDay * jobEquipment.intervals);
        } else if (jobEquipment.WeekSelected1 == 1) {
          this.totalEquipmentPriceTable += (jobEquipment.pricePer1Week * jobEquipment.intervals);
        } else if (jobEquipment.WeekSelected2 == 1) {
          this.totalEquipmentPriceTable += (jobEquipment.pricePer2Week * jobEquipment.intervals);
        } else if (jobEquipment.WeekSelected3 == 1) {
          this.totalEquipmentPriceTable += (jobEquipment.pricePer3Week * jobEquipment.intervals);
        }
      });

      this.equipmentService.getAllEquipments().subscribe((equipments) => {
        this.equipments = equipments;
        let equipmentIndex = null;
        // this.jobEquipments.forEach(jobEquipment => {
        //   this.equipments.forEach((equipment, i) => {
        //     if (equipment.equipmentID == jobEquipment.equipmentID) {
        //       // this.totalLaborPriceTable += (jobLabor.roleWage * jobLabor.laborHours);
        //       this.equipments.splice(i, 1);
        //     }
        //   })
        // });
      });
    });
  }

  onClickUpdateJobEquipment(equipmentIndex) {
    this.equipmentIndex = equipmentIndex;
    this.equipmentName = this.jobEquipments[equipmentIndex].equipmentName;
    this.equipmentNumOfIntervals = this.jobEquipments[equipmentIndex].intervals;
    this.pricePerDay = this.jobEquipments[equipmentIndex].pricePerDay;
    this.DaysSelected = this.jobEquipments[equipmentIndex].DaysSelected;
    this.pricePer1Week = this.jobEquipments[equipmentIndex].pricePer1Week;
    this.WeekSelected1 = this.jobEquipments[equipmentIndex].WeekSelected1;
    this.pricePer2Week = this.jobEquipments[equipmentIndex].pricePer2Week;
    this.WeekSelected2 = this.jobEquipments[equipmentIndex].WeekSelected2;
    this.pricePer3Week = this.jobEquipments[equipmentIndex].pricePer3Week;
    this.WeekSelected3 = this.jobEquipments[equipmentIndex].WeekSelected3;
    console.log(this.DaysSelected);
    if (this.DaysSelected == 1) {
      (<HTMLSelectElement>document.getElementById('updateEquipmentInterval')).selectedIndex = 0;
      this.intervalCost = this.jobEquipments[equipmentIndex].pricePerDay;
    } else if (this.WeekSelected1 == 1) {
      (<HTMLSelectElement>document.getElementById('updateEquipmentInterval')).selectedIndex = 1;
      this.intervalCost = this.jobEquipments[equipmentIndex].pricePer1Week;
    } else if (this.WeekSelected2 == 1) {
      (<HTMLSelectElement>document.getElementById('updateEquipmentInterval')).selectedIndex = 2;
      this.intervalCost = this.jobEquipments[equipmentIndex].pricePer2Week;
    } else if (this.WeekSelected3 == 1) {
      (<HTMLSelectElement>document.getElementById('updateEquipmentInterval')).selectedIndex = 3;
      this.intervalCost = this.jobEquipments[equipmentIndex].pricePer3Week;
    }
  }

  onUpdateJobEquipment() {
    if ((<HTMLSelectElement>document.getElementById('updateEquipmentInterval')).selectedIndex == 0) {
      this.DaysSelected = 1;
      this.pricePerDay = this.intervalCost;
      this.WeekSelected1 = 0;
      this.pricePer1Week = this.jobEquipments[this.equipmentIndex].pricePer1Week;
      this.WeekSelected2 = 0;
      this.pricePer2Week = this.jobEquipments[this.equipmentIndex].pricePer2Week;
      this.WeekSelected3 = 0;
      this.pricePer3Week = this.jobEquipments[this.equipmentIndex].pricePer3Week;
    } else if ((<HTMLSelectElement>document.getElementById('updateEquipmentInterval')).selectedIndex == 1) {
      this.DaysSelected = 0;
      this.pricePerDay = this.jobEquipments[this.equipmentIndex].pricePerDay;
      this.WeekSelected1 = 1;
      this.pricePer1Week = this.intervalCost;
      this.WeekSelected2 = 0;
      this.pricePer2Week = this.jobEquipments[this.equipmentIndex].pricePer2Week;
      this.WeekSelected3 = 0;
      this.pricePer3Week = this.jobEquipments[this.equipmentIndex].pricePer3Week;
    } else if ((<HTMLSelectElement>document.getElementById('updateEquipmentInterval')).selectedIndex == 2) {
      this.DaysSelected = 0;
      this.pricePerDay = this.jobEquipments[this.equipmentIndex].pricePerDay;
      this.WeekSelected1 = 0;
      this.pricePer1Week = this.jobEquipments[this.equipmentIndex].pricePer1Week;
      this.WeekSelected2 = 1;
      this.pricePer2Week = this.intervalCost;
      this.WeekSelected3 = 0;
      this.pricePer3Week = this.jobEquipments[this.equipmentIndex].pricePer3Week;
    } else if ((<HTMLSelectElement>document.getElementById('updateEquipmentInterval')).selectedIndex == 3) {
      this.DaysSelected = 0;
      this.pricePerDay = this.jobEquipments[this.equipmentIndex].pricePerDay;
      this.WeekSelected1 = 0;
      this.pricePer1Week = this.jobEquipments[this.equipmentIndex].pricePer1Week;
      this.WeekSelected2 = 0;
      this.pricePer2Week = this.jobEquipments[this.equipmentIndex].pricePer2Week;
      this.WeekSelected3 = 1;
      this.pricePer3Week = this.intervalCost;
    }
    let updatedJobEquipment = {
      jobEquipmentID: this.jobEquipments[this.equipmentIndex].jobEquipmentID,
      equipmentName: this.equipmentName,
      equipmentID: this.jobEquipments[this.equipmentIndex].equipmentID,
      intervals: this.equipmentNumOfIntervals,
      pricePerDay: this.pricePerDay,
      DaysSelected: this.DaysSelected,
      pricePer1Week: this.pricePer1Week,
      WeekSelected1: this.WeekSelected1,
      pricePer2Week: this.pricePer2Week,
      WeekSelected2: this.WeekSelected2,
      pricePer3Week: this.pricePer3Week,
      WeekSelected3: this.WeekSelected3
    };
    // console.log(updatedJobEquipment);
    this.jobService.updateJobEquipment(updatedJobEquipment).subscribe((data) => {
      if (data.success) {
        // console.log(data.msg);
        this.onClearJobEquipment();
        this.getJobEquipments();
        $('#update-equipment-modal').modal('hide');
        this.alert.displayAlert('Equipment updated', 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  onDeleteJobEquipment() {
    this.jobService.deleteJobEquipment(this.jobEquipments[this.equipmentIndex].jobEquipmentID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getJobEquipments();
        $('#update-equipment-modal').modal('hide');
        this.alert.displayAlert('Equipment deleted', 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  onClearJobEquipment() {
    this.selectedEquipments.forEach((selectedEquipment) => {
      this.equipments.push(selectedEquipment);
    });
    this.selectedEquipments = [];
    this.totalEquipmentPrice = 0;
    this.equipmentNumOfIntervals = 0;
  }

  onCreateJobEquipment() {
    this.selectedEquipments.forEach((selectedEquipment) => {
      this.jobService.createJobEquipmentById(this.id, selectedEquipment).subscribe((data) => {
        if (data.success) {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      });
    });

    this.getJobEquipments();
    this.onClearJobEquipment();
    $('#create-equipment-modal').modal('hide');
    this.alert.displayAlert('Equipment added', 'success');
  }

  onAddEquipment() {
    let selectedEquipment = {
      equipmentID: this.equipments[this.equipmentID].equipmentID,
      equipmentName: this.equipments[this.equipmentID].equipmentName,
      intervals: this.equipmentNumOfIntervals,
      pricePerDay: this.equipments[this.equipmentID].pricePerDay,
      DaysSelected: this.equipments[this.equipmentID].DaysSelected,
      pricePer1Week: this.equipments[this.equipmentID].pricePer1Week,
      WeekSelected1: this.equipments[this.equipmentID].WeekSelected1,
      pricePer2Week: this.equipments[this.equipmentID].pricePer2Week,
      WeekSelected2: this.equipments[this.equipmentID].WeekSelected2,
      pricePer3Week: this.equipments[this.equipmentID].pricePer3Week,
      WeekSelected3: this.equipments[this.equipmentID].WeekSelected3
    };
    if (this.equipmentInterval == 0) {
      this.totalEquipmentPrice += (selectedEquipment.pricePerDay * this.equipmentNumOfIntervals);
      selectedEquipment.DaysSelected = 1;
      selectedEquipment.WeekSelected1 = 0;
      selectedEquipment.WeekSelected2 = 0;
      selectedEquipment.WeekSelected3 = 0;
    } else if (this.equipmentInterval == 1) {
      this.totalEquipmentPrice += (selectedEquipment.pricePer1Week * this.equipmentNumOfIntervals);
      selectedEquipment.WeekSelected1 = 1;
      selectedEquipment.DaysSelected = 0;
      selectedEquipment.WeekSelected2 = 0;
      selectedEquipment.WeekSelected3 = 0;
    } else if (this.equipmentInterval == 2) {
      this.totalEquipmentPrice += (selectedEquipment.pricePer2Week * this.equipmentNumOfIntervals);
      selectedEquipment.WeekSelected2 = 1;
      selectedEquipment.DaysSelected = 0;
      selectedEquipment.WeekSelected1 = 0;
      selectedEquipment.WeekSelected3 = 0;
    } else if (this.equipmentInterval == 3) {
      this.totalEquipmentPrice += (selectedEquipment.pricePer3Week * this.equipmentNumOfIntervals);
      selectedEquipment.WeekSelected3 = 1;
      selectedEquipment.DaysSelected = 0;
      selectedEquipment.WeekSelected1 = 0;
      selectedEquipment.WeekSelected2 = 0;
    }

    this.selectedEquipments.push(selectedEquipment);
    this.equipments.splice(this.equipmentID, 1);
    this.equipment = null;
    this.equipmentNumOfIntervals = 0;
    console.log(this.selectedEquipments);
  }

  onRemoveEquipment(equipment, id) {
    if (equipment.DaysSelected == 1) {
      this.totalEquipmentPrice -= (equipment.pricePerDay * equipment.intervals);
    } else if (equipment.WeekSelected1 == 1) {
      this.totalEquipmentPrice -= (equipment.pricePer1Week * equipment.intervals);
    } else if (equipment.WeekSelected2 == 1) {
      this.totalEquipmentPrice -= (equipment.pricePer2Week * equipment.intervals);
    } else if (equipment.WeekSelected3 == 1) {
      this.totalEquipmentPrice -= (equipment.pricePer3Week * equipment.intervals);
    }
    this.selectedEquipments.splice(id, 1);
    this.equipments.push(equipment);
  }

  onChangeEquipment(id) {
    this.equipmentID = id;
    // console.log(this.equipmentID);
  }

  onClearEquipmentUpdate() {
    this.equipmentName = '';
    this.intervalCost = null;
    this.equipmentNumOfIntervals = null;
  }

  onChangeInterval(interval) {
    this.equipmentInterval = interval;
    // console.log(this.equipmentInterval);
    if (interval == 0) {
      this.intervalCost = this.jobEquipments[this.equipmentIndex].pricePerDay;
    } else if (interval == 1) {
      this.intervalCost = this.jobEquipments[this.equipmentIndex].pricePer1Week;
    } else if (interval == 2) {
      this.intervalCost = this.jobEquipments[this.equipmentIndex].pricePer2Week;
    } else if (interval == 3) {
      this.intervalCost = this.jobEquipments[this.equipmentIndex].pricePer3Week;
    }
  }

  clearBillingForm() {
    this.line4 = 0;
    this.line6 = 0;
    this.line7 = 0;
    this.line10 = 0;
  }

  onChangeContact(contactIndex) {
    this.contactName = this.contacts[contactIndex].contactName;
  }

  makeBillingPDF() {
    var documentDefinition = {

      pageOrientation: 'landscape',
      //function for page number
      function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount; },

      content: [

        { text: 'APPLICATION AND CERTIFICATION FOR PAYMENT', style: 'header' },
        { text: 'AIA DOCUMENT G702', lineHeight: 0.5 },
        //End Page# FN	   


        //Line	   
        {
          table: {

            widths: ['*'],
            body: [[" "], [" "]]
          },
          layout: {
            hLineWidth: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 0 : 2;
            },
            vLineWidth: function (i, node) {
              return 0;
            },
            lineHeight: 0.1,
          }
        },
        //end line	 	
        //Top Half of page 		
        {
          alignment: 'center',
          columns: [

            //Column 1 Row1
            {
              style: 'columnstyle',
              width: 'auto',
              text: 'To Owner:' + '\n \n \n \n \n \n From Contractor:' + '\n \n',
              lineHeight: 0.75,


            },

            //Column2 Row1
            {
              width: 'auto',
              text: `${this.job[0].customerName} \n ${this.job[0].customerAddress} \n ${this.job[0].customerZIP}` + '\n \n'
                + 'Allied Waterproofing \n'
                + '5840 Mango Drive \n'
                + 'St. Louis MO 63129',
              lineHeight: 0.75,
            },


            //Column3 Row1
            {
              width: '*',
              text: 'Project: \n' +
                `${this.job[0].jobName}` + '\n\n' +
                'Via Architect: \n' +
                `${this.contactName}`,
              lineHeight: 0.75,
            },


            //Column4 top Row1
            {
              width: 'auto',
              text: 'Application Number: \n'
                + `${this.id}`,
              lineHeight: 0.75,

            },

            //Column5 top Row1
            {
              width: '*',
              text: 'Distribution to: \n' +
                '___Owner \n' +
                '___Architecht \n' +
                '___Contractor \n',
              lineHeight: 0.75,

            },

          ],

        },

        //Line	   
        {
          table: {
            widths: ['*'],
            body: [[" "], [" "]]
          },
          layout: {
            hLineWidth: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 0 : 2;
            },
            vLineWidth: function (i, node) {
              return 0;
            },
            lineHeight: 0.75,
          }
        },
        //end line	

        { text: "Contractor's Application for Payment", style: 'header', lineHeight: 0.75, },
        //Row 1 of top
        {
          columns: [
            {
              width: '*',
              style: 'small',
              text: "Application is made for payment, as show below, in connection with the Contract. Continuation Sheet, AIA Document G703 is attached",
              lineHeight: 0.9,

            },

            {
              style: 'small',
              width: '*',
              text: "The undersigned Contractor certifies that to the best of the Contractor's knowledge, information and belief the work covered by this application for payment has been completed in accordance with the contract documents, that all amounts have been paid the contractor for work for which previous certificates of for payment were issued and payments received from the owner, and that current payment shown herein is now due",
              lineHeight: 0.9,

            },

          ]
        },
        //Row 2 of top
        {
          columns: [ //columns to split page
            { //insert ordered list here!
              width: "*",

              columns: [ //Begin List columns

                {
                  style: 'columnstyle',
                  width: '*',
                  // lineHeight: 0.9,
                  ol: ["Original Contract Sum ",
                    "Net change by change orders ",
                    "Contract sum to date (lines 1+/-2) ",
                    "Total completed and stored to date ",
                    "Retainage: ",
                    "___% Completed ",
                    "___% Of Stored Material ",
                    "Total Retainage ",
                    "Total Earned Less Retainage ",
                    "Less Previous Certificates for Payment ",
                    "Current Payment Due ",
                    "Balance to Finish, Including Retainage",

                  ],

                },



                { // Begin Values Column
                  width: 'auto',
                  style: 'columnstyle',
                  decoration: 'underline',
                  type: 'none',
                  ol: [`$${Math.round(this.job[0].bidPrice)}`,
                  `$${Math.round(this.totalChangeTable)}`,
                  `$${Math.round(this.job[0].bidPrice + this.totalChangeTable)}`,
                  `$${this.line4}`,
                  "\n",
                  `$${this.line6}`,
                  `$${this.line7}`,
                  `${this.line6 + this.line7}`,
                  `$${this.line4 - this.line6}`,
                  `$${this.line10}`,
                  `$${this.line4 - this.line10}`,
                  `$${(Math.round(this.job[0].bidPrice + this.totalChangeTable)) - (this.line4 - this.line6)}`,
                  ]
                }, //End values column



              ] //end of left list of columns

            },//end left page column     


            { //Begin right page column
              //width: '*',


              //Right hand side column
              columns: [
                {
                  text: 'Contractor: \n' + "By: ____________________ \n", lineHeight: 0.9,

                },
                { text: '\n' + "Date: _________________ ", lineHeight: 0.9, },

              ],
              //End of Right hand side Columns




            }, //End right page column



          ]//End columns to split page



        },

        {
          columns: [
            //Left list Columns
            {

            },

            //Right Half of Page



            { //Line Right Column 





            }, // End of Line Right Column	  
            //Right Column of Right hand of page





          ],



        },

        //Back to Left half of page, under Ordered/Unordered Lists




        {
        }




      ], //end Content

      //Style Dictionary
      styles: {
        header: {
          fontSize: 15,
          bold: true
        },
        bigger: {
          fontSize: 15,
          italics: true
        },
        small: {
          fontSize: 8,
          italics: true
        },

        columnstyle: {
          fontSize: 10

        },

      },
      defaultStyle: {
        columnGap: 20
      },
      defaultMargin: {
        margin: [5, 5, 5, 5],
        fontSize: 15
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      },






    }
    $('#create-form-modal').modal('hide');
    pdfMake.createPdf(documentDefinition).download();
    this.clearBillingForm();
  }
}

interface SelectedMaterial {
  materialID: number,
  materialName: String,
  numberOfUnits: number,
  pricePerUnit: number,
  linearFeetCoverage: number
}
interface SelectedLabor {
  roleID: number,
  roleName: String,
  roleWage: number,
  laborHours: number
}
interface SelectedEquipment {
  equipmentID: number,
  equipmentName: String,
  intervals: number,
  pricePerDay: number,
  DaysSelected: number,
  pricePer1Week: number,
  WeekSelected1: number,
  pricePer2Week: number,
  WeekSelected2: number,
  pricePer3Week: number
  WeekSelected3: number
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