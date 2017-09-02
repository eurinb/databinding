import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server1', name: 'Testserver1', content: 'Just a test'},
    {type: 'server2', name: 'Testserver2', content: 'Just a test'},
    {type: 'server3', name: 'Testserver3', content: 'Just a test'},
    {type: 'server4', name: 'Testserver4', content: 'Just a test'}
  ];

}
