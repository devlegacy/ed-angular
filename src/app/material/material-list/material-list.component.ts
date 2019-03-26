import { Component, OnInit } from '@angular/core';
import { Student } from '../../shared/model/student';
import { ClassStudent } from '../../shared/model/class-student';

@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
  readonly DEFAULT_PICTURE = 'https://www.publicdomainpictures.net/pictures/80000/nahled/vintage-male-profile-silhouette.jpg';
  student1: Student;
  student2: Student;
  student3: Student;
  student4: ClassStudent;
  studentsList: Student[];
  constructor() {
  }

  ngOnInit() {
    console.log('Iniciando componente');
    this.student1 = {
      id: 1,
      name: 'Samuel',
      city: 'Cancún',
      photoURL: 'http://cdnweb01.wikitree.co.kr/webdata/editor/201502/12/img_20150212185113_8d93cbc9.jpg',
    };

    this.student2 = {
      id: 2,
      name: 'Max',
      city: 'Cancún',
      photoURL: 'http://cdnweb01.wikitree.co.kr/webdata/editor/201502/12/img_20150212185113_8d93cbc9.jpg',
    };

    this.student3 = {
      id: 3,
      name: 'Nestor',
      city: 'Playa del Carmen',
    };

    this.studentsList = [this.student1,this.student2, this.student3];

    this.student4 = new ClassStudent(4,'xxxx','xxxx');
    console.log(`Edad de estudiante 4: ${this.student4.getAge()}`);
    setTimeout(() => {
      // Change data
      this.student3.name = 'Betaza';

      // Change object
      this.student2 = {
        id: 999999,
        name: 'Tec',
        city: 'Cancún',
      };

      this.student2.photoURL = null;
      this.student3.photoURL = 'http://cdnweb01.wikitree.co.kr/webdata/editor/201502/12/img_20150212185113_8d93cbc9.jpg';
    }, 1500);
  }

  onMouseClick($event: Student) {
    console.log($event, $event.name);
  }
}
