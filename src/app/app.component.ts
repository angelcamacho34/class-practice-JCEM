import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angel';

  alertMsg() {
    const title = "Camacho"
    alert(title)
  }

 
}


