import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { NavigationItem, NavigationService } from '../../shared/lib/navigation.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  publishedContent:Observable<string>;

  constructor(navigationService: NavigationService, private router: Router) {

  }

  ngOnInit() {
    console.log("content.component: ngOnInit", this);
  }
  ngOnDestroy() {

  }
}
