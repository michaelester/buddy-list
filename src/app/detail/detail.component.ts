import { Component, OnInit } from '@angular/core';
import { SBStore, SBStory } from 'ng-storyblok';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private story: SBStory;

  constructor(private sbstore: SBStore, private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sbstore.findStory(params['id']).then(story => this.story = story);
    });
  }

}
