import { Component, OnInit, ViewChild } from '@angular/core';
import { Newsletter } from '../../models/Newsletter';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  newsletter: Newsletter = {
    email: ''
  }

  @ViewChild('newsForm') form: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Newsletter, valid: boolean}) {
    if(valid){
      console.log(value);
      this.form.reset();
    }
  }

}
