import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      bio: [''],
      isActive: [''],
    });
  }

  onSubmit = () => {
    console.log(this.userForm.getRawValue());
    //this.userForm.reset();
  };

  get email() {
    return this.userForm.get('email') as FormControl;
  }

  get name() {
    return this.userForm.get('name') as FormControl;
  }

  get bio() {
    return this.userForm.get('bio') as FormControl;
  }
}
