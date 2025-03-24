import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  posts: any = [];
  filteredposts: any = []

  title = 'sport-golf';
  constructor(private data: ServiceService) { }

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

  getdata() {
    this.data.getlogindetils().subscribe((res) => {
      this.posts = res;
      this.filteredposts = [this.posts];
      console.log(this.posts)
    });
  }
  getdata1() {
    this.data.FedExCup().subscribe((res) => {
      this.posts = res;
      this.filteredposts = [this.posts];
      console.log(this.posts)
    });
  }
  organizations() {
    this.data.organizations().subscribe((res) => {
      this.posts = res;
      this.filteredposts = [this.posts];
      console.log(this.posts)
    });
  }
  schedules() {
    this.data.schedules().subscribe((res) => {
      this.posts = res;
      this.filteredposts = [this.posts];
      console.log(this.posts)
    });
  }
  players() {
    this.data.players().subscribe((res) => {
      this.posts = res;
      this.filteredposts = [this.posts];
      console.log(this.posts)
    });
  }
  leaderboards() {
    this.data.leaderboards().subscribe((res) => {
      this.posts = res;
      this.filteredposts = [this.posts];
      console.log(this.posts)
    });
  }
  scorecards() {
    this.data.scorecards().subscribe((res) => {
      this.posts = res;
      this.filteredposts = [this.posts];
      console.log(this.posts)
    });
  }
  points() {
    this.data.points().subscribe((res) => {
      this.posts = res;
      this.filteredposts = [this.posts];
      console.log(this.posts)
    });
  }
  earnings() {
    this.data.earnings().subscribe((res) => {
      this.posts = res;
      this.filteredposts = [this.posts];
      console.log(this.posts)
    });
  }
  tournaments() {
    this.data.tournaments().subscribe((res) => {
      this.posts = res;
      this.filteredposts = [this.posts];
      console.log(this.posts)
    });
  }

}
