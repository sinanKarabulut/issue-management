import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  constructor() {
    /*this.translateService.addLangs(['tr','en','de']);
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en|de|tr/) ? browserLang : 'en');*/
  }

  ngOnInit() {
  }

}
