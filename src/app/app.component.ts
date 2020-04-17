import { Component } from '@angular/core';
/* the component decorator (MetaData) */
@Component({
  selector: 'app-root' /* custom HTML tag used in templates*/,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test';
  public name = 'Logan Garay';
  public childMessage = '';
}
