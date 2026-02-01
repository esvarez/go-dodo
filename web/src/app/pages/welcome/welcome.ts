import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-welcome',
  imports: [NzButtonModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome {}
