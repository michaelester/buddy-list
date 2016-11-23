import { Component } from '@angular/core';
import { SBStore, SBStory } from 'ng-storyblok';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  private buddies: Observable<SBStory[]>;
  private searchObserver: Observer<string>;
  private searchTerm: Observable<string>;

  constructor(sbstore: SBStore) {
    this.searchTerm = Observable.create(o => {
      this.searchObserver = o;
      this.searchObserver.next('');
    });
    this.buddies = sbstore.collection('buddies');
  }

  onSearch(searchTerm: string) {
    this.searchObserver.next(searchTerm);
  }

}
