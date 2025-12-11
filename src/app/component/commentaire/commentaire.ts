import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commentaire',
  standalone: false,
  templateUrl: './commentaire.html',
  styleUrl: './commentaire.css',
})
export class Commentaire {
   @Input() src: string = '';
   @Input() titre: string = ''
}
