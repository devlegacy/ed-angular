import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../../shared/model/student';

@Component({
  selector: 'ed-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {
  readonly DEFAULT_PICTURE = 'https://www.publicdomainpictures.net/pictures/80000/nahled/vintage-male-profile-silhouette.jpg';
  @Input()
  student: Student;

  @Output()
  onMouseClick = new EventEmitter<Student>();

  constructor() { }

  ngOnInit() {
  }

  onClick(student:Student) {
    this.onMouseClick.emit(student);
  }

}
