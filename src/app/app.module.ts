import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './Shared/common-service.service';

import { FruitDetailComponent } from './Components/Fruits/detail/detail.component';
import { FruitHomeComponent } from './Components/Fruits/home/home.component';
import { AppComponent } from './Components/App/app.component';
import { HeaderComponent } from './Components/Core/header/header.component';
import { FooterComponent } from './Components/Core/footer/footer.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { FruitAddComponent } from './Components/Fruits/add/add.component';
import { ParagraphColorDirective } from './Directives/paragraph-color.directive';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    FruitDetailComponent,
    FruitHomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FruitAddComponent,
    ParagraphColorDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRouting,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private commonService: CommonService) {
    this.commonService.bootService();
  }
}
