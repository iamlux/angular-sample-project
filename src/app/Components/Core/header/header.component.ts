import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../../../Shared/common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language: any;
  defaultImage = 'assets/images/no-image-min.jpg';
  offset = 100;

  constructor(private translateService: TranslateService, private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.lang.subscribe(data => {
      this.language = data;
      console.log(data);
    });
  }

  switchTranslate(language) {
    this.translateService.use(language);
    localStorage.setItem('lang', language);
    this.commonService.lang.next(language);
  }
}
