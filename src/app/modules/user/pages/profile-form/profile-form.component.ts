import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {
  profileForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.profileForm = fb.group({
      username: [''],
      password: [''],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      bio: [''],
      active: [''],
    });
  }
  currentUser: User = this.userService.getCurrentUser();
  ngOnInit(): void {
    this.userService.getUserById(this.currentUser.id).subscribe((data: any) => {
      this.profileForm.setValue({
        username: data.username,
        password: data.password,
        email: data.email,
        name: data.username,
        bio: data.bio ?? '',
        active: data?.active ?? '',
      });
    });
  }

  onSubmit = () => {
    const user: User = this.profileForm.getRawValue();
    this.userService.updateUser(user, this.currentUser.id).subscribe();
    window.location.reload();
  };

  get email() {
    return this.profileForm.get('email') as FormControl;
  }

  get name() {
    return this.profileForm.get('name') as FormControl;
  }

  get bio() {
    return this.profileForm.get('bio') as FormControl;
  }
}
