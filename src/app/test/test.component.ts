import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name: string = 'Logan';
  private lastName: string = 'Garay';
  public siteUrl: string = window.location.href;
  private testId: string = '123456';
  public successClass: string = 'success';
  public warningClass: string = 'warning';
  public dangerClass = 'danger';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    success: !this.hasError,
    danger: this.hasError,
    italic: this.isSpecial,
  };
  public styleBindColor = 'purple';
  public multipleStyles = {
    color: 'orange',
    fontStyle: 'italic',
  };
  public hello = '';
  public age = null;
  public showElement = false;
  public switch = 'four';
  public colors = ['red', 'green', 'blue', 'yellow'];
  @Input('parentData') public parentFullName;
  @Output() public childEvent = new EventEmitter();
  public pipeExample = 'This will Be an example Pipe message.';
  public pipeObject = {
    foo: 'bar',
    razzle: 'dazzle',
  };
  public date = new Date();
  constructor() {}

  ngOnInit(): void {}
  saySomething(): string {
    return 'How is your day ' + this.name + ' ' + this.lastName;
  }
  sayHello(): void {
    this.hello = 'Why hello there!';
  }
  displayAge(value): void {
    this.age = value;
  }
  fireEvent() {
    this.childEvent.emit('This message is coming from child.');
  }
}
