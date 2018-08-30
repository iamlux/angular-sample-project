import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  lang = new BehaviorSubject(localStorage.getItem('lang'));

  constructor(private translation: TranslateService) {}

  bootService() {
    if (typeof localStorage.getItem('lang') === 'undefined') {
      this.translation.setDefaultLang('en');
      localStorage.setItem('lang', 'en');
      this.translation.use('en');
    } else {
      this.translation.setDefaultLang(localStorage.getItem('lang'));
      this.translation.use(localStorage.getItem('lang'));
    }
    this.lang.next(this.translation.currentLang);
  }
}
