import { Component, Input } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from "./task/task.component";
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) name?:string;
  @Input({required:true}) userId! :string;
  isAddingTask : boolean = false;
  private taskService:TaskService;

  constructor(taskService : TaskService){
    this.taskService=taskService;
  }


  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId)
  }

  onStartAddTask(){
    this.isAddingTask=true;
  }

  onCloseAddTask(){
    this.isAddingTask=false
  }

}
