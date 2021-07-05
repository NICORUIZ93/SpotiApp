import { SpotifyService } from 'src/app/services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  NuevosArtistas: any[] = [];
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    console.log(termino);

    this.spotifyService.getArtista(termino).subscribe((artistas: any) => {
      this.NuevosArtistas = artistas;
      console.log(this.NuevosArtistas);
    });
  }
}
