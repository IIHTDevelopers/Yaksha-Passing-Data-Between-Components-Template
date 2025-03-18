import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { jest } from '@jest/globals'; // Add this import statement
import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInfoComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    component.user = { name: 'John Doe', email: 'john@example.com', bio: 'Just a regular John Doe.' };
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should display user data correctly', () => {
      const nameElement = fixture.debugElement.query(By.css('p:nth-of-type(1)')).nativeElement;
      const emailElement = fixture.debugElement.query(By.css('p:nth-of-type(2)')).nativeElement;
      const bioElement = fixture.debugElement.query(By.css('p:nth-of-type(3)')).nativeElement;

      expect(nameElement.textContent).toContain('Name: John Doe');
      expect(emailElement.textContent).toContain('Email: john@example.com');
      expect(bioElement.textContent).toContain('Bio: Just a regular John Doe.');
    });

    it('should enable editing mode when Edit button is clicked', async () => {
      const editButton = fixture.debugElement.query(By.css('button')).nativeElement;
      editButton.click();
      fixture.detectChanges();

      await fixture.whenStable(); // Wait for Angular to complete change detection

      const nameInput = fixture.debugElement.query(By.css('input#name')).nativeElement;
      const emailInput = fixture.debugElement.query(By.css('input#email')).nativeElement;
      const bioTextarea = fixture.debugElement.query(By.css('textarea#bio')).nativeElement;

      expect(nameInput.value).toBe('John Doe');
      expect(emailInput.value).toBe('john@example.com');
      expect(bioTextarea.value).toBe('Just a regular John Doe.');
    });

    it('should cancel editing without saving changes', async () => {
      const editButton = fixture.debugElement.query(By.css('button')).nativeElement;
      editButton.click();
      fixture.detectChanges();

      await fixture.whenStable(); // Wait for Angular to complete change detection

      const nameInput = fixture.debugElement.query(By.css('input#name')).nativeElement;
      nameInput.value = 'Jane Doe';
      nameInput.dispatchEvent(new Event('input'));

      const cancelButton = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement; // Change index if necessary
      cancelButton.click();
      fixture.detectChanges();

      expect(component.isEditing).toBe(false);

      const nameElement = fixture.debugElement.query(By.css('p:nth-of-type(1)')).nativeElement;
      expect(nameElement.textContent).toContain('Name: John Doe');
    });
  });
});
