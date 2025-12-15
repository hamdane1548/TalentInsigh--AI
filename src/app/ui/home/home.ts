import {AfterViewInit, Component} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

 type Fake_table = {
     id_user : number,
     nom : string,
     prenom : string,
     etat : "accepte" | "rejete" |"en attente",
     date : string
     }
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements AfterViewInit{
    ngAfterViewInit() : void {
      gsap.from(".char", {
        y: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        scrollTrigger: {
          trigger: "#title",
          start: "top 80%",
        }
      });

    }

  faketable: Fake_table[] = [
  {id_user: 1, nom: "Oussama", prenom: "Hamdane", etat: "accepte", date: "25 nov 2025"},
  {id_user: 2, nom: "Sofia", prenom: "El Amrani", etat: "en attente", date: "12 déc 2025"},
  {id_user: 3, nom: "Youssef", prenom: "Benali", etat: "rejete", date: "30 oct 2025"},
  {id_user: 4, nom: "Leila", prenom: "Khalil", etat: "accepte", date: "15 nov 2025"},
  {id_user: 5, nom: "Ahmed", prenom: "Fahmi", etat: "en attente", date: "05 déc 2025"},
  {id_user: 6, nom: "Nora", prenom: "Samir", etat: "accepte", date: "20 nov 2025"},
  {id_user: 7, nom: "Karim", prenom: "Ziani", etat: "rejete", date: "01 déc 2025"},
];
}
