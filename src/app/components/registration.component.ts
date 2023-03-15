import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from '../models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.createForm()
  }
  
  clearForm() {
    console.info('>>> clear form')
    this.form.reset()
  }

  registerUser() {
    const user: User = {
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value

    }
    console.info('>>> register user', user)
    this.form.reset()
  }

  private createForm(): FormGroup {
    return this.fb.group ({
      name: this.fb.control('', [ Validators.required ]),
      email: this.fb.control('', [ Validators.required, Validators.email ]),
    })
  }
}
