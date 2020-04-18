import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/routeOne', previousId]);
    // this.router.navigate([previousId], { relativeTo: this.route }); Code is broken and not explained in video
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/routeOne', nextId]);
    // this.router.navigate([nextId], { relativeTo: this.route }); Code is broken and not explained in video
  }
  // optional route parameter
  goBack() {
    let currentId = this.departmentId
      ? this.departmentId
      : null; /* null check */
    this.router.navigate([
      '/routeOne',
      { id: currentId },
    ]); /* Absolute navigation */
    // this.router.navigate(['../', { id: currentId }], {
    //   relativeTo: this.route,
    // }); Relateive navigation
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
