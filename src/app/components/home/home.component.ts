import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  NuevasCanciones: any[] = [];
  loading: Boolean;
  error: Boolean;
  mesajeError: string = '';

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotifyService.getNewRelease().subscribe(
      (data: any) => {
        this.NuevasCanciones = data;
        this.loading = false;
      },
      (errorService) => {
        this.error = true;
        this.loading = false;
        this.mesajeError = errorService.error.error.message;
        console.log(errorService.error.error.message);
      }
    );
  }

  ngOnInit(): void {}
}
