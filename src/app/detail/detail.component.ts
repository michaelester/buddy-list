import { Component, OnInit } from '@angular/core';
import { SBStore, SBStory } from 'ng-storyblok';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private story: Observable<SBStory>;

  constructor(private sbstore: SBStore, private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sbstore.story(params['id']).subscribe(s => {
        console.log(s);
      })
    });
  }

}
