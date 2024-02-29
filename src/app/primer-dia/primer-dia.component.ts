import { Component } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
  card = {
    title: 'Titulo principal',
       description: "No cost too great.  No mind to think.  No will to break.  No voice to cry suffering.  Born of God and Void."
     }
}
