import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-services-http-second',
  templateUrl: './services-http-second.component.html',
  styleUrls: ['./services-http-second.component.css'],
})
export class ServicesHttpSecondComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private _testServiceService: TestServiceService) {}

  ngOnInit(): void {
    this._testServiceService.getEmployees().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error.message)
    );
  }
}
