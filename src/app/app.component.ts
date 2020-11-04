import { Component } from '@angular/core';
import { ApiService } from './api.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  tutorial = [{title:'test'}];
  selectedTutorial;
  searchTerm: string;
 


  constructor(private api: ApiService) {
    this.getTutorials();
    this.selectedTutorial = {id: -1,  image: '', title: '', description: '', content: '', link: '', published: '', date_created: '', date_updated: ''};
  }
  getTutorials = () => {
    this.api.getAllTutorial().subscribe(
      data => {
        this.tutorial = data;

      },
      error => {
        console.log(error)
      }
    );
  
  }
  tutorialClicked  = (tutorial) => {
    console.log(tutorial.id);

    this.api.getOneTutorial(tutorial.id).subscribe(
      data => {
        console.log(data);
        this.selectedTutorial = data;

      },
      error => {
        console.log(error)
      }
    );

  }
  updateTutorial  = () => {
    

    this.api.updateTutorial(this.selectedTutorial).subscribe(
      data => {
        this.getTutorials();

      },
      error => {
        console.log(error)
      }
    );

  }
  createTutorial  = () => {
    

    this.api.createTutorial(this.selectedTutorial).subscribe(
      data => {
        console.log(data);
        this.tutorial.push(data);

      },
      error => {
        console.log(error)
      }
    );
  }

  deleteTutorial  = () => {
    this.api.deleteTutorial(this.selectedTutorial.id).subscribe(
      data => {
        this.getTutorials();

      },
      error => {
        console.log(error)
      }
    );
  }
}

