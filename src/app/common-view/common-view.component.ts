import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { url } from 'inspector';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-common-view',
  standalone: false,
  templateUrl: './common-view.component.html',
  styleUrl: './common-view.component.scss',
})
export class CommonViewComponent implements OnInit {
  type: any;
  data = [] as any
  selectedValue: any;

  constructor(private route: ActivatedRoute, private service: ServiceService) {
    this.type = this.route.snapshot.queryParams['type'];
    console.log('type', this.type);
  }

  @Input() posts: any;
  ngOnInit(): void {
    console.log(this.getUrlByType(this.type));
    this.service
      .getFunction(this.getUrlByType(this.type))
      .subscribe((res: any) => {
        console.log(res);
        this.data = res
        console.log(this.data)
      });

    //console.log(this.posts)
  }

  getUrlByType(type: string): string | undefined {
    const urls: { [key: string]: string } = {
      FedExCup: 'https://dummyjson.com/c/b598-bdd6-4db6-93b6',
      schedules: 'https://dummyjson.com/c/93c3-8003-4dcf-8b69',
      players: 'https://dummyjson.com/c/7195-954a-4df2-bd21',
      tournaments: 'https://dummyjson.com/c/51e5-80c7-48dd-bbc4',
      leaderboards: 'https://dummyjson.com/c/2f6b-3788-421d-9d24',
      scorecards: 'https://dummyjson.com/c/bb06-12ec-42f4-96ed',
      points: 'https://dummyjson.com/c/284f-8700-4deb-a189',
      earnings: 'https://dummyjson.com/c/4fd6-7990-4331-b3cb',
      getdata: 'https://dummyjson.com/c/7341-dc09-4612-ac5a',
    };

    return urls[type];
  }

  onSelectionChange(event: any): void {
    this.selectedValue = event.value;
  }
}
