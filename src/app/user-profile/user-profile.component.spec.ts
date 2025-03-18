import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';
import { UserInfoComponent } from '../user-info/user-info.component'; // Import the child component
import { NO_ERRORS_SCHEMA } from '@angular/core'; // Ignore unknown elements like app-user-info
import { FormsModule } from '@angular/forms'; // For ngModel support

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent, UserInfoComponent],
      imports: [FormsModule], // Import FormsModule for ngModel support
      schemas: [NO_ERRORS_SCHEMA] // Ignore errors related to unknown elements
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the user profile component', () => {
      expect(component).toBeTruthy(); // Test if the component is created successfully
    });

    it('should update user data when onSave is called', () => {
      const updatedUser = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        bio: 'Full Stack Developer'
      };

      // Call the onSave method with updated user data
      component.onSave(updatedUser);

      // Check if the user data has been updated
      expect(component.user.name).toBe('Jane Doe');
      expect(component.user.email).toBe('jane.doe@example.com');
      expect(component.user.bio).toBe('Full Stack Developer');
    });

    it('should pass user data to the child component', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const userInfoComponent = compiled.querySelector('app-user-info');
      expect(userInfoComponent).toBeTruthy(); // Ensure that child component is rendered

      // Verify the passed user data in the child component
      const childComponent = fixture.debugElement.children[0].componentInstance;
      expect(childComponent.user).toEqual(component.user); // Ensure the user data is passed correctly
    });
  });
});
