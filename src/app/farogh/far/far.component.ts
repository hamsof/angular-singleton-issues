import { Component } from '@angular/core';
import { FeatureFlagService } from 'src/app/shared/feature-flag.service';

@Component({
  selector: 'app-far',
  templateUrl: './far.component.html',
  styleUrls: ['./far.component.css']
})
export class FarComponent {
  random = -9;
  constructor(private readonly ffservice: FeatureFlagService) {
  }

  ngOnInit() {
    this.random = this.ffservice.getFlag();
    console.log('FarComponent ngOnInit random: ' + this.random);
  }
}
