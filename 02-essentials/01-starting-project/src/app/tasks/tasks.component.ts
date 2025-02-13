import { Component, DebugNode, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
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

  onCompleteTask(id:string){
    this.taskService.removeTask(id)
  }

  onStartAddTask(){
    this.isAddingTask=true;
  }

  onCancelAddTask(state:Boolean){
    this.isAddingTask=false
  }

  onTaskAdd(taskData:NewTaskData){
    this.taskService.addTask(taskData,this.userId)
    this.isAddingTask=false;
  }
}
