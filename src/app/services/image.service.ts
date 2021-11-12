import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public profile: string = "assets/images/profile/janet.jpg";

  constructor() { }
}
