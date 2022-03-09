import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

import { VCard } from "ngx-vcard";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public firstName: string = "Janet A.";
  public lastName: string = "Annan";
  public _role: string = "Founder and CEO"
  public businessName: string = "Advance Level Coaching Institute"
  public telephone: string = "312-399-8385";
  public email: string = "J.annan@advancelci.com";

  constructor(public imageService: ImageService) { }

  ngOnInit() {
  }

  public vCard: VCard = {
    name: {
      firstNames: this.firstName,
      lastNames: this.lastName
    },
    role: this._role,
    organization: this.businessName,
    telephone: [this.telephone],
    email: [this.email],
    workEmail: [this.email],
    url: "https://safc2.com/",
    logo: "../../assets/images/logos/janets_logo.jpeg",
  };

}
