import { Component } from '@angular/core';
import { CounterService } from './core/service/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  constructor(
    private sVisitor: CounterService,
  ) {
    this.sVisitor.createVisitorCounter('email').subscribe();
  }


}
