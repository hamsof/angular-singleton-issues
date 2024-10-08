import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { FeatureFlagService } from 'src/app/shared/feature-flag.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  random = -9;
  constructor(private readonly ffservice: FeatureFlagService) {
  }

  ngOnInit() {
    this.random = this.ffservice.getFlag();
    console.log('not lazy ngOnInit random: ' + this.random);
  }

}