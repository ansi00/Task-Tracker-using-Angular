import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {
constructor(){}
@Input() task! : Task
faTimes = faTimes;
ngOnInit(): void {
  
}
}
