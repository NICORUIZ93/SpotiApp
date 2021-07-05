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
        'Bearer BQAlADKMtk47biImwuCAdfYCHxVWarldjrBWtrDffC1ZszeninI16vtZkBjYj8Gv6-6_2tyDmR_Yo-yHt2Z2ovNqJwY-gLYpUePmP5VEiDf6kxBxQJCwIBDvqe-cH2C16xA_17RVnykVmRlKnQ2Lc5JjJwXJc5Y',
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
    return this.getQuery(`search?q=${termino}&type=artist&limit=50`).pipe(
      map((data: any) => {
        return data['artists'].items;
      })
    );
  }
}
