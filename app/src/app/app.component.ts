import { TranslateService } from './translate.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  text: string;
  translatedText: string;

  constructor(private translateService: TranslateService) {}

  submit() {
    this.translateService.translate(this.text).subscribe((result) => {
      this.translatedText = result;
    });
  }
}
