import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewRelease() {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        Authorization:
          'Bearer BQC9thhD3LoeVsd2HkfmNGF7dc1AwII2eDzlFkhKwXRfBRsOZpto51civkLvueW6SR2eTfBoF64gmXHGiuE',
      },
    });
  }
}
