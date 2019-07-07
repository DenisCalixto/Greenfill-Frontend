import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: Contact = {
    name: '',
    email: '',
    subject: '',
    content: ''
  }
  @ViewChild('contactForm', {static: true}) form: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Contact, valid: boolean}) {
    if(valid){
      console.log(value);
      this.form.reset();
    }
  }

}
