import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <img [src]="imageUrl" />
        <div (click)="onDivClicked()">
            <button
                class='btn btn-primary'
                [class.active]="isActive"
                [style.color]="isActive ? 'yellow' : 'white' "
                (click)="onSave($event)"
            >Click Me</button>
        </div>
        <div>
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        </div>
        <div>
            <h3>Built In Pipes</h3>
            {{course.title | uppercase}} <br />
            {{course.students | number}} <br />
            {{course.rating | number:'1.2-2'}} <br />
            {{course.price | currency:'USD':true:'1.2-2'}} <br />
            {{course.releaseDate | date:'shortDate'}} <br />
        </div>
        <div>
            <h3>Custom Pipes</h3>
            <p>{{ text | summary:58 }}</p>
        </div>

        <h3>Module</h3>
        <app-course></app-course>
    `
})
export class CoursesComponent {
    title = 'List of Courses';
    imageUrl = 'http://lorempixel.com/400/200';
    colSpan = 2;
    courses;
    isActive = true;
    email = 'me@example.com';
    course = {
        title: 'The Complete Angular Course',
        rating: 4.975,
        students: 30234,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };
    text = `
        Labore ut magna culpa non officia cillum nostrud. Magna officia anim
        id reprehenderit nulla aliqua qui. Dolore incididunt aliqua ea tempor qui nisi quis.
        Eu exercitation irure consequat proident et. Anim occaecat ullamco eu dolore excepteur
        eiusmod. Est proident proident adipisicing fugiat.
    `;

    onSave($event) {
        $event.stopPropagation();
        console.log('Button was clicked.', $event);
    }

    onDivClicked() {
        console.log('Div was clicked.');
    }

    onKeyUp() {
        console.log('Value:', this.email);
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}
