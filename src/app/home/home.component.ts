import { Component, OnInit} from '@angular/core';
import { PreAlertService } from '../pre-alert.service';
import { UserHomeService } from '../user-home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private user: any;
  private sizeLimit = 2000000;
  private model: any = {};
  private uploadFile: any;
  private progress: number = 0;
  private hasBaseDropZoneOver: boolean = false;
  private fileName: string;
  private extenFile: any;
  private extensAllowed:Array<string> = ["jpg","png","jpeg"];
  private extenPermit: boolean = false;
  private noUpload: any;
  private value: number;
  private shippings: any;
  private shopperModel:any = {};

  constructor(
    private preAlertService: PreAlertService,
    private userHomeService: UserHomeService,
  ) {}

  ngOnInit() {
    this.userHomeService.userHomeServ()
      .subscribe(result =>{
        this.user = result.user;
        this.shippings = result.shippings;
      });
    this.user = 'Gabriel';
  }
  couriers:Array<string> = [
                            "AIR CANADA",
                            "Amazon logistics",
                            "Copa Airlines",
                            "DHL",
                            "Fedex",
                            "Lasership",
                            "UPS",
                            "USPS",
                            "Otro"
                            ];
  
  
  options: Object = {
    url: 'http://52.67.42.173:2000/api/uploadFile'
  };

  handleUpload(data:any): void{
    if (data && data.response){
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e:any):void{
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void{
    this.fileName = uploadingFile.originalName;
    this.extenFile = this.fileName.split(".",2)[1];
    for (let extens of this.extensAllowed) {
      if (extens == this.extenFile){
        this.extenPermit = true;
      }      
    };
    if (this.extenPermit == false){
      uploadingFile.setAbort();
      this.noUpload = "Extension no admitida";

    }
    
    if (uploadingFile.size > this.sizeLimit){
      uploadingFile.setAbort();
      this.noUpload = "El archivo debe ser menor de 2mb";
    }
  }
  preAlert(){
    this.model.image = this.uploadFile;
    this.model.userId = this.user.id;
    if (this.model.image == undefined){
      alert("Debe agregar la factura");
    }
    this.preAlertService.servPreAlert(this.model).subscribe(result => {
    })
    for (let key in this.model){
      if (key != 'userId'){
        this.model[key] = undefined;
      }
      else{
        null;
      } 
    }
  }
  shopper(){
    this.shopperModel['userId'] = this.user.id;
    this.userHomeService.userPersonalShopper(this.shopperModel)
      .subscribe();

    for (let key in this.model){
      if (key != 'userId'){
        this.model[key] = undefined;
      }
      else{
        null;
      } 
    }
  }
}
