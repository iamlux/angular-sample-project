import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import videojs from '../../../Shared/play.es';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  param: { value: 'world' };
  firstObservable = new Observable(observer => {
    observer.next('Hello first word');
  });
  constructor() { }

  ngOnInit() {
    this.firstObservable.subscribe();
    videojs('example-video', {
      'controls': true,
      'autoplay': false,
      'preload': 'auto',
      'fluid': true,
      'playbackRates': [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2],
      'poster': 'http://d1xxzl3j6dvosn.cloudfront.net/costarica/480.jpg',
      'sources': [{
        'src': 'http://d1xxzl3j6dvosn.cloudfront.net/costarica/playlist.m3u8',
        'type': 'application/x-mpegURL'
      }],
      'html5': {
        'nativeAudioTracks': false,
        'nativeVideoTracks': false,
        'nativeTextTracks': false,
        'hls': {
          'overrideNative': true,
        }
      },
      'plugins': {
        'hlsQualitySelector': {},
        'keyboardShortCuts': {},
        'seekButtons': {
          forward: 10,
          back: 10
        }
      }
    });
  }
}
