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
        'Bearer BQBMnkxGFNgGZl5ZU-jeoJeNcz2HBU1Rbh024DDEGeiyugFhUXdN8Bkhaia82sT9CSzO1HrrNPNcSPjGJqw_Q-WUF5-HusfW_uWjAcVO8LOjQrNBjmp4A9wjx1JwVtTaFlte4mz74RheEnzduufN8ChVk9gv8FM',
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
