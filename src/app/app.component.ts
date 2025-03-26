import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  posts: any = [];
  filteredposts: any = [];

  title = 'sport-golf';
  constructor(private data: ServiceService) {}

  ngOnInit(): void {
    // this.getdata();
    // this.getdata1();
    // this.organizations();
    // this.schedules();
    // this.players();
    // this.leaderboards();
    // this.scorecards();
    // this.points();
    // this.earnings();
    // this.tournaments();
  }
}
