import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const header = {
      Authorization:
        'Bearer BQDtCWNYNgRpjIy7bII487SMjF-rsBbqB-Pr0ZF3gwAo_bMykrHoXbuqFzpAO0qQ38f_JvWUSXbuY48UsRoOLDsx4eNY6OvN-s0STjyniULxtqrbBvlbF4GV5FtFHLzqFfpqxEQ4qx6aHTYVKDNVVxqywcA9uCc',
    };

    return this.http.get(url, { headers: header });
  }

  getNewRelease() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => {
        return data['albums'].items;
      })
    );
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(
      map((data: any) => {
        return data['artists'].items;
      })
    );
  }
}
