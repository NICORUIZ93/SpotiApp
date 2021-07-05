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

  constructor(
    private http: HttpClient,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.spotifyService.getNewRelease().subscribe((data: any) => {
      console.log(data);
      this.NuevasCanciones = data.albums['items'];
      console.log(this.NuevasCanciones);
    });
  }
}
