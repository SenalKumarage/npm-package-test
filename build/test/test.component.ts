import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: "\n    <p>\n      test component works!\n    </p>\n  ",
  styles: ["\n\n  "]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
