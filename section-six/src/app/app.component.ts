import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'map';
  isSelected = true;
  canSave = true;
  courses = [
    { id: 1, name: 'course1 '},
    { id: 2, name: 'course2 '},
    { id: 3, name: 'course3 '}
  ];
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  };
  onAdd() {
    this.courses.push({ id:4, name: 'course 4 ' });
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onUpdate(course) {
    course.name = 'UPDATED';
  }
  loadCourses() {
    this.courses = [
      { id: 11, name: 'course11 '},
      { id: 12, name: 'course12 '},
      { id: 13, name: 'course13 '}
    ];
  }
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
  onClick() {
    this.isSelected = !this.isSelected;
  }
}
