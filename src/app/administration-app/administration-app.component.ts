import { Component, OnInit } from '@angular/core';
import { PreAlertsService } from '../pre-alerts.service';
import { MdDialog, MdDialogRef,MdDialogConfig } from '@angular/material';
import { ShippingsService } from '../shippings.service';
import { PreAlertStatusService } from '../pre-alert-status.service';
import { MdSnackBar } from '@angular/material';
import { AdminPersonalShopperService } from '../admin-personal-shopper.service';
import { ActStaPersonalShopperService } from '../act-sta-personal-shopper.service';

@Component({
  selector: 'app-administration-app',
  templateUrl: './administration-app.component.html',
  styleUrls: ['./administration-app.component.css']
})
export class AdministrationAppComponent implements OnInit {
  private prealerts = [];
  private shipping = {};
  private tracking: any;
  private proof = 1;
  private personalShopper= [];
  private statusPersonalShoppers= [
            {statusName:"Seleccione estatus",status:""},
            {statusName:"En proceso",status:"2"},
            {statusName:"Ejecutado",status:"3"},
            {statusName:"Envio realizado",status:"4"},
          ];
  private formStatusShopper = {};
  private jsonStatusShopper: any={};

  constructor(
    private PreAlertsService: PreAlertsService,
    private dialog: MdDialog,
    private shippingsService:ShippingsService,
    public snackBar: MdSnackBar,
    private adminPersonalShopperService: AdminPersonalShopperService,
    private actStaPersonalShopperService: ActStaPersonalShopperService
  ) { }

  ngOnInit() {
    this.PreAlertsService.request()
      .subscribe(result => {
        this.prealerts = result;
        if(this.prealerts['Warning'] == "No found macth for you search"){
          this.prealerts[0]['estimated_arrival_miami'] = 'nulo';
          this.prealerts[0]['tracking'] = 'nulo';
          this.prealerts[0]['courier'] = 'nulo';
          this.prealerts[0]['content'] = 'nulo';
          this.prealerts[0]['provider'] = 'nulo';
          let mensajeSnack = "No hay resultados para su busqueda";
          this.snackBar.open(mensajeSnack, "Cerrar", {
          duration: 10000,
          });
        }
      });
      this.adminPersonalShopperService.servPersShopper()
        .subscribe(result => {
          console.log(result);
          this.personalShopper = result;
        })
  }
  openDialog(selected) {
    let config = new MdDialogConfig();
    let dialogRef: MdDialogRef<DialogImageBill> = this.dialog.open(DialogImageBill, config);
    dialogRef.componentInstance.selected = selected.image;
  }
  shippings(selected){
    this.shipping['idPrealert'] = selected.id;
    this.shipping['idUser'] = selected.id_user;
    console.log(this.shipping);
    this.shippingsService.report(this.shipping)
      .subscribe(result =>{
        this.tracking = result.tracking;
      })
    for (let key in this.shipping){
      if (key != 'userId'){
        this.shipping[key] = undefined;
      }
      else{
        null;
      } 
    }

    this.snackBar.open(this.tracking, "Cerrar", {
      duration: 5000,
    });
  }
  envStatusPersonalShopper(selectedShopper,status){
    this.jsonStatusShopper['id'] = selectedShopper.id;
    this.jsonStatusShopper['status'] = status.status;
    this.actStaPersonalShopperService.actStatus(this.jsonStatusShopper)
      .subscribe();
    
  }
      
}

@Component({
  selector: 'dialog-image-bill',
  templateUrl: './dialogImageBill.html',
})
export class DialogImageBill {
  selected:string;
  constructor(public dialogRef: MdDialogRef<DialogImageBill>) { }
}
