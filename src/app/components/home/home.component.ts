import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  openVideoId: string | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  getVideoEmbedUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube-nocookie.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  toggleVideo(videoId: string): void {
    // Close current video if clicking the same button, otherwise open the new one
    this.openVideoId = this.openVideoId === videoId ? null : videoId;
  }

  isVideoOpen(videoId: string): boolean {
    return this.openVideoId === videoId;
  }
}
