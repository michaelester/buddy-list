import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SBStory } from 'ng-storyblok';
import { Observable, Observer } from 'rxjs';
import 'rxjs/add/operator/combineLatest'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  private buddies: Observable<SBStory[]>;
  @Input('search') private search:Observable<string>;
  @Input('buddies') private buddiesObservable: Observable<SBStory[]>;

  ngOnInit() {
    this.buddies = this.buddiesObservable.combineLatest(this.search, (stories, search) => {
      return !search || !search.length ? stories : stories.filter(story => {
        const sl = search.toLowerCase();
        return story.content.model.firstname.toLowerCase().indexOf(sl) !== -1 ||
          story.content.model.lastname.toLowerCase().indexOf(sl) !== -1;
      });
    }).catch((err, caught) => {
      console.log(err);
      return [];
    });
  }

}
