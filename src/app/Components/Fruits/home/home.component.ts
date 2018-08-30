import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class FruitHomeComponent implements OnInit {
  param: {value: 'world'};
  fruits: Array<object> = [
    {id: 1, name: 'Banana', message: 'It helps to digest easily'},
    {id: 1, name: 'Apple', message: 'Apple a day keeps doctor away'},
    {id: 1, name: 'Orange', message: 'Gives stamina'}
  ];

  ngOnInit() {
  }

}
