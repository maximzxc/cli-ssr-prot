import { Component, OnInit } from '@angular/core';
import { XStartupService } from './x.startup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cli-ssr-prot';

  constructor(private startup: XStartupService ) { }

  ngOnInit() {
    /*
    // If there is no startup data received (maybe an error!)
    // navigate to error route
    if (!this.startup.startupData) {
      this.router.navigate(['error'], { replaceUrl: true });
    }
    */
    console.log(this.startup.startupData)
  }

}
