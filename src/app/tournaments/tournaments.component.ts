import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-tournaments',
  standalone: false,
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss'
})
export class TournamentsComponent {

  posts: any;
  filteredposts: any = []
  FedExCup_posts: any = []
  organizations_posts: any = []
  schedules_posts: any = []
  players_posts : any = []
  constructor(private data: ServiceService) { }
  
  ngOnInit(): void {
    this.getdata();
    this.getdata1();
    this.organizations();
    this.schedules();
    this.players();
 

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
      this.FedExCup_posts = res;
      this.filteredposts = [this.FedExCup_posts];
      console.log(this.FedExCup_posts)
    });
  }
  organizations() {
    this.data.organizations().subscribe((res) => {
      this.organizations_posts = res;
      this.filteredposts = [this.organizations_posts];
      console.log(this.organizations_posts)
    });
  }
  schedules() {
    this.data.schedules().subscribe((res) => {
      this.schedules_posts = res;
      this.filteredposts = [this.schedules_posts];
      console.log(this.schedules_posts)
    });
  }
  players() {
    this.data.players().subscribe((res) => {
      this.players_posts = res;
      this.filteredposts = [this.players_posts ];
      console.log(this.players_posts )
    });
  }


}
