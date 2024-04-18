import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any = [
    {
      img: '../../../assets/Task-management.png',
      name: "Task Management Website",
      github_front: "https://github.com/seunrae/task-management.git",
      github_back: "https://github.com/seunrae/task-management.git"
    },
    {
      img: "../../../assets/Simple-shell.png",
      name: "Simple shell project",
      github_front: "https://github.com/seunrae/simple_shell.git",
      github_back: ""
    },
    {
      img: "../../../assets/Ecommerce.png",
      name: "Ecommerce Website",
      github_front: "https://github.com/seunrae/ecommerce_backend.git",
      github_back: "https://github.com/seunrae/task-management-frontend.git"
    },
  ]

}
