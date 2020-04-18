import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-routing-navigation',
  templateUrl: './routing-navigation.component.html',
  styleUrls: ['./routing-navigation.component.css'],
})
export class RoutingNavigationComponent implements OnInit {
  public currentId;
  public departments = [
    { id: 1, name: 'Finance' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Maitenence' },
    { id: 4, name: 'Sales' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.currentId = id;
    });
  }

  onSelect(department) {
    this.router.navigate(['/routeOne', department.id]); /* absolute navigation*/
    // this.router.navigate([department.id], {
    //   relativeTo: this.route,
    // }); /* relative navigation*/
  }
  // optional parameter styling
  isSelected(department) {
    return department.id === this.currentId;
  }
}
