import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournaments',
  standalone: false,
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss',
})
export class TournamentsComponent {
  posts: any;
  filteredposts: any = [];
  FedExCup_posts: any = [];
  organizations_posts: any = [];
  schedules_posts: any = [];
  players_posts: any = [];
  isMschedulesre = false;
  constructor(private data: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.players();
  }

  players() {
    this.data.players().subscribe((res) => {
      this.players_posts = res;
      this.filteredposts = [this.players_posts];
      console.log(this.players_posts);
    });
  }

  dynamicData(type: any) {
    this.router.navigate(['common'], {
      queryParams: { type: type },
    });

    console.log(type);
  }
}
