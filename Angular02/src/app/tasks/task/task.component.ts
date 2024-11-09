import { Component , Input, Output, EventEmitter,  inject} from '@angular/core';
import { DatePipe } from '@angular/common';
import {type Task } from './task.model'
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input ({required:true}) task!:Task;
  @Output() complete = new EventEmitter<string>();
  //Inject Service 
  private tasksService = inject(TasksService);
  onCompleteTask(){
    // this.complete.emit(this.task.id);
    //Call the removeTask method from the Service instead of emitting 
    this.tasksService.removeTask(this.task.id);
  }
}
