import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";



const routes: Routes =[
  {path:'' , component: HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'contact', component:ContactComponent}


];
export default routes;