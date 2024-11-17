import { Component  } from '@angular/core';
import { NgFor , NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from './tasks/tasks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor , NgIf ,NavbarComponent,HomeComponent,ContactComponent,ServicesComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get  selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;

  }
  onSelectUser( id: string ){
    this.selectedUserId= id;
  }
}
