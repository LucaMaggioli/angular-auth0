import { Component, OnInit } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  profileJson: string = null;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(
      // (profile) => (this.profileJson = JSON.stringify(profile, null, 2)),
      (profile) => {
        this.profileJson = JSON.stringify(profile, null, 2);
        console.log('profile and profileJson');
        console.log(profile);
        console.log(this.profileJson);
      }
    );
  }
}
