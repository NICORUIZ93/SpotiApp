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
        'Bearer BQB-jrjvqya4tn5K0u_MEdnH5Qh_M4gU05d8oW6Ypx5d1kXlD-uBspaqXy3H1HoptFbBFlj0IW6zt4pDnHO8MXPQm2UtHJoAmqY5amQeajsrUSRnZmc0qen0KQPK_GOOWrWFQ6iFuqkg9QYw2TkSXrQ0r8EkoAU',
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

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=50`).pipe(
      map((data: any) => {
        return data['artists'].items;
      })
    );
  }

  getArtista(artista: string) {
    return this.getQuery(`artists/${artista}`);
    //.pipe(map((data: any) => {return data['artists'].items;}));
  }

  getTopTrack(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=es`).pipe(
      map((data: any) => {
        return data['tracks'];
      })
    );
  }
}
