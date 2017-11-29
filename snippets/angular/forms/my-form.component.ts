import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  feedbackEnabled = false;
  processing = false;
  username = null;
  password = null;

  constructor() { }

  ngOnInit() {
  }

  submitForm(theForm) {
    this.feedbackEnabled = true;
    if (theForm.valid) {
      this.processing = true;
      console.log('here we submit the form', theForm);
      // authService.login(this.username, this.password).
    }
  }

}
