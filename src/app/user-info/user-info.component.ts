import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input() user: any; // Input to receive user data from parent
  @Output() edit = new EventEmitter<any>(); // Output to notify parent of changes

  isEditing: boolean = false; // Track if user is editing
  editedUser: any; // To hold the edited user data temporarily

  onEdit() {
    this.isEditing = true; // Enable editing mode
    this.editedUser = { ...this.user }; // Make a copy of the user data to edit
  }

  onSave() {
    this.isEditing = false; // Disable editing mode
    this.edit.emit(this.editedUser); // Emit the edited data back to the parent
  }

  onCancel() {
    this.isEditing = false; // Cancel editing mode without saving changes
  }
}
