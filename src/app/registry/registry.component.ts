import { Component, OnInit } from '@angular/core';
import { RegistryService } from '../registry.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  constructor(
    private registryService: RegistryService
  ) {}

  ngOnInit() {
  }
  registry(){
    this.model.password = Md5.hashStr(this.model.password);
    this.registryService.servRegistry(this.model).subscribe(result =>{});
  }
}
