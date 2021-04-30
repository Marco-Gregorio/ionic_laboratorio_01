import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public variable1;
  constructor() { }

  ngOnInit() {
    this.variable1 = "Hola nueva variable 4";
  }

}
