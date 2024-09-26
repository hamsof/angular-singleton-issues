import { Component } from '@angular/core';
import { FeatureFlagService } from 'src/app/shared/feature-flag.service';

@Component({
  selector: 'app-notlazy',
  templateUrl: './notlazy.component.html',
  styleUrls: ['./notlazy.component.css']
})
export class NotlazyComponent {
  random = -9;
  constructor(private readonly ffservice: FeatureFlagService) {
  }

  ngOnInit() {
    this.random = this.ffservice.getFlag();
    console.log('not lazy ngOnInit random: ' + this.random);
  }
}
