import { Component } from '@angular/core';
import { Button } from "../../core/button/button";
import { Navbar } from "../../core/navbar/navbar";

@Component({
  selector: 'app-video',
  imports: [Button, Navbar],
  templateUrl: './video.html',
  styleUrl: './video.css',
})
export class Video {

}
