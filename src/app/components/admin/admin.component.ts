import { Component, OnInit } from '@angular/core';
import { JsonFormData } from 'src/app/interfaces/jsonInterface';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  public formData!: JsonFormData;

  constructor(private httpService: HttpServiceService) {}

  ngOnInit() {
    this.httpService.getFormData().subscribe((formData: JsonFormData) => {
      this.formData = formData;
    })
  }
}
