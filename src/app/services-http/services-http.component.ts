import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-services-http',
  templateUrl: './services-http.component.html',
  styleUrls: ['./services-http.component.css'],
})
export class ServicesHttpComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private _testServiceService: TestServiceService) {}

  ngOnInit(): void {
    this._testServiceService.getEmployees().subscribe(
      (data) => (this.employees = data),
      (error) => ((this.errorMsg = error.message), console.log(error))
    );
  }
}
