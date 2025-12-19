import { Component } from '@angular/core';
import { Mainpage } from "../mainpage/mainpage";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contactpage',
  imports: [Mainpage, RouterLink],
  templateUrl: './contactpage.html',
  styleUrl: './contactpage.scss',
})
export class Contactpage {

}
