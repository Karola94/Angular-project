import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {
      value: 22,
      label: '# of Users'
    },
    {
      value: 900,
      label: 'Revenue'
    },
    {
      value: 50,
      label: 'Satisfactoin Score'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
