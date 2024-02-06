import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: { label: string, url: string }[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.generateBreadcrumb(this.activatedRoute.root);
    });
  }

  generateBreadcrumb(route: ActivatedRoute) {
    this.breadcrumbs = [];
    this.addBreadcrumb(route.root);
  }

  private addBreadcrumb(route: ActivatedRoute) {
    if (route.children.length === 0) return;

    const primaryChild = route.children.find(child => child.outlet === 'primary');
    if (!primaryChild) return;

    const routeSnapshot = primaryChild.snapshot;
    const url = this.getUrl(routeSnapshot);
    const breadcrumbUrl = routeSnapshot.data['url'] || url;
    this.breadcrumbs.push({ label: routeSnapshot.data['breadcrumb'], url: breadcrumbUrl });

    this.addBreadcrumb(primaryChild);
  }

  private getUrl(routeSnapshot: ActivatedRouteSnapshot): string {
    const segments = routeSnapshot.url.map(segment => segment.path);
    return segments.length > 0 ? '/' + segments.join('/') : '/';
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  isHomePage(): boolean {
    return this.router.url === '/home';
  }
}
