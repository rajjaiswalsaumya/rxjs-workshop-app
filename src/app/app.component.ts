import { AfterViewInit, Component } from '@angular/core';
import { SubscribeOperator } from './lib/subscribe.operator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    let operator: SubscribeOperator = new SubscribeOperator();

    console.log(operator.demo());

    //operator.demo().subscribe(console.log);
    //operator.demo2().subscribe(console.log);
  }
}
