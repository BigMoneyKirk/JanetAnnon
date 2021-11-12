import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

import { VCard } from "ngx-vcard";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public businessName: string = "Janet A. Annan";
  public personName: string = "Founder and CEO - Advance Level Coaching Institute"
  public telephone: string = "312-399-8385";
  public email: string = "J.annan@advancelci.com";

  constructor(public imageService: ImageService) { }

  ngOnInit() {
  }

  public vCard: VCard = {
    name: {
      firstNames: this.businessName
    },
    telephone: [this.telephone],
    email: [this.email],
    workEmail: [this.email],
    role: "CEO of Luxy Nics",
    url: "https://savannahpicnic.com/",
    logo: "../../assets/images/logos/luxy_nics_logo.jpg",
  };

}
