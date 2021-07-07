import { SpotifyService } from 'src/app/services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  NuevosArtistas: any[] = [];
  loading: boolean = false;
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  buscar(artista: string) {
    this.loading = true;
    this.spotifyService.getArtistas(artista).subscribe((artistas: any) => {
      this.NuevosArtistas = artistas;
      this.loading = false;
    });
  }
}
