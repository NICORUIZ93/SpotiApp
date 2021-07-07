import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { async } from 'rxjs';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
})
export class ArtistaComponent implements OnInit {
  id: string = '';
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    activatedRoute.params.subscribe((params) => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {}

  getArtista(id: string) {
    this.loading = true;
    this.spotifyService.getArtista(id).subscribe(async (artistainfo: any) => {
      console.log(artistainfo);
      this.artista = await artistainfo;
      this.loading = false;
    });
  }
  getTopTracks(id: string) {
    this.spotifyService.getTopTrack(id).subscribe(async (tracks) => {
      this.topTracks = tracks;
      console.log(tracks);
    });
  }
}
