import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css', 'home2.css', 'home3.css', 'home4.css', 'home5.css'],
})
export class Home implements OnInit {
  protected readonly title = signal('Gym-app');
  counter = signal(0);
  counterInterval: any = null;
  showVideo = false;
  ngOnInit(): void {
    this.counterInterval = setInterval(() => {
      this.counter.update(count => count + 1)
      if (this.counter() > 97) {
        clearInterval(this.counterInterval)
      }
    }, 100);
  }
  previewVideo() {
    this.showVideo = true
  }


  openVideo() {
    window.open('https://youtu.be/Y-x0efG1seA', '_blank');
  }

  toNotePad(){
    window.open("https://ethereal-notepad-frontend.vercel.app/")
  }

  toKeep(){
    window.open("https://tech-guru19.github.io/Flex-keep/")
  }

  toDevFolio(){
    window.open("https://my-porfolio-blond-three.vercel.app/")
  }

  toWeatherApp(){
    window.open("https://tech-guru19.github.io/Weather-App/")
  }

  toOraimo(){
    window.open("https://tech-guru19.github.io/Oriamo_Repo/")
  }
  toShopEase(){
    window.open("https://mecey-ked-collection-kfgi.vercel.app/")
  }
}
