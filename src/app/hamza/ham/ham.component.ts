import { Component } from '@angular/core';
import { FeatureFlagService } from 'src/app/shared/feature-flag.service';

@Component({
  selector: 'app-ham',
  templateUrl: './ham.component.html',
  styleUrls: ['./ham.component.css']
})
export class HamComponent {
  random = -9;
  constructor(private readonly ffservice: FeatureFlagService) {
  }

  ngOnInit() {
    this.random = this.ffservice.getFlag();
    console.log('HamComponent ngOnInit random: ' + this.random);
  }
}
