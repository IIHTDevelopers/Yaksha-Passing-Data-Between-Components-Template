import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component'; // Import the user-profile component
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, UserProfileComponent], // Declare the components used
            schemas: [NO_ERRORS_SCHEMA] // Ignore errors related to undefined elements
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should create the app component', () => {
            expect(component).toBeTruthy(); // Test if the component is created successfully
        });

        it('should render the user-profile component', () => {
            const compiled = fixture.nativeElement as HTMLElement;
            const userProfileElement = compiled.querySelector('app-user-profile');
            expect(userProfileElement).toBeTruthy(); // Test if the <app-user-profile> element is rendered
        });
    });
});
