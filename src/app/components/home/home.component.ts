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

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.spotifyService.getNewRelease().subscribe((data: any) => {
      console.log(data);
      this.NuevasCanciones = data;
      this.loading = false;
      console.log(this.NuevasCanciones);
    });
  }
}
