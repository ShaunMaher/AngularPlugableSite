import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of, Subscriber } from 'rxjs';
import { NavigationItem, NavigationService } from '../../shared/lib/navigation.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  publishedContent: Content;
  testValue: string = "test:content"
  private _publishedContentObservers: Subscriber<Content>[] = [];

  constructor() {
    console.log("content:constructor");
    //this.publishedContent = {
    //  contentType: ContentType.PlainText
    //}
    this.publishContent("");
  }

  ngOnInit() {
    console.log("content.component: ngOnInit", this);
  }

  ngOnDestroy() {

  }

  subscribe(): Observable<Content> {
    var _self = this;
    var observer = new Observable<Content>(( observer => {
      //console.log("NavigationService: getPrimaryNavigationItems");
      //console.log(this.primaryNavigationItems);

      _self._publishedContentObservers.push(observer);
      return {
        unsubscribe() {
          //console.log("NavigaionService:PrimaryNavigationItems: unsubscribed");
        }
      }
    }));

    return observer;
  }

  publishContent(source: string) {
    // We're going to skip the part about fetching remote content for now and
    //  just hard code some example content.
    let newContent: Content = {
      source: source,
      contentType: ContentType.Markdown
    }
    newContent.content = `
    ## Dummy heading 1
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum
    mauris et magna sollicitudin, a egestas felis accumsan. Nunc enim est,
    laoreet quis elit et, vehicula dignissim nunc. Suspendisse imperdiet, mauris
    eget scelerisque finibus, neque velit luctus diam, eleifend rhoncus arcu
    elit sed nibh. Sed id ullamcorper ex, sit amet efficitur nulla. Nullam
    feugiat pretium ipsum vitae ornare. Sed congue auctor justo ac lobortis. Ut
    eget bibendum tortor, non dapibus erat. Aliquam eleifend urna sem, ut
    efficitur libero tristique eu. Proin malesuada ex in magna mattis, non
    sollicitudin erat porta. Fusce molestie sagittis justo aliquet rutrum.

    Aliquam convallis lectus id leo ullamcorper molestie. In tempor tempus
    tincidunt. Ut at gravida magna. Sed facilisis pretium enim in rutrum.
    Aliquam sit amet ex ipsum. Aliquam placerat interdum orci vitae aliquam.
    Fusce feugiat mi vel ex dignissim imperdiet. Phasellus libero massa,
    vehicula in est sed, lobortis tempor mi. Aliquam at mattis enim. Mauris
    rhoncus risus quam, sed scelerisque tortor dignissim vel.
    `;
    this.publishedContent = newContent;

    // Notify everyone that subscrives to this content that it has been updated
    for (const index in this._publishedContentObservers) {
      console.log("publishing new Content to", this._publishedContentObservers[index]);
      this._publishedContentObservers[index].next(this.publishedContent);
    }
  }
}

export interface Content {
  source?: string;
  contentType: ContentType;
  content?: string;
}

export enum ContentType {
  Unknown = 0,
  Markdown = 1,
  Wikitext = 2,
  PlainText = 3,
  Html = 4
}
