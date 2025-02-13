import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../tasks.service';
import { type Task } from './task.model';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() task !: Task;

  constructor(private taskService:TaskService){}

  onCompleteTask(){
    this.taskService.removeTask(this.task.id)
  }
}
