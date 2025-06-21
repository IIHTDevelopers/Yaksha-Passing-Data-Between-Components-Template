import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  isEditing: boolean = false;
  editedUser: any;
  user: any;
}
