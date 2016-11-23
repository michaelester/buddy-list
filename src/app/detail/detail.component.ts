import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SBStore, SBStory } from 'ng-storyblok';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {

  private story: Observable<SBStory>;

  constructor(private sbstore: SBStore, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.story = this.sbstore.story(parseInt(params['id'], 10));
    });
  }

}
