import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  url = 'https://translation.googleapis.com/v3/projects/*:translateText?alt=json&key=AIzaSyAMmzRi9p2DFy_NPr00N5Rv03tud044TPQ';

  constructor(private http: HttpClient) { }

  translate(text: string) {
    return this.http.post(this.url, {
      q: text,
      target: 'es'
    }).pipe(
      map((res: any) => {
        return res.data.translations[0].translatedText;
      })
    );
  }
}
