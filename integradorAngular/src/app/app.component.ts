import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'integradorAngular';

  isLoginOrRegisterRoute: boolean = false;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isLoginOrRegisterRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'login' ||
                                      this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'registro';
    });
  }
}
