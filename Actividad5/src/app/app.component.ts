import { Component} from '@angular/core';
import { BlogFormComponent } from "./components/blog-form/blog-form.component";
import { BlogListComponent } from "./components/blog-list/blog-list.component";
import { INew } from './interfaces/inew.interface';

@Component({
  selector: 'app-root',
  imports: [BlogFormComponent, BlogListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  newsList: INew[] = [
    {
      title: 'LDU de Quito gana el clásico del Ecuador',
      imageUrl: 'https://example.com/ldu-quito-image.jpg',
      text: 'LDU de Quito se impuso 3-1 a su eterno rival, Emelec, en una noche histórica...',
      imageFooterName: 'Foto de archivo: LDU de Quito',
      imageFooterDate: new Date('2025-02-21'),
      author: 'Juan Pérez',
      category: 'Fútbol',
      team: 'LDU de Quito'
    },
    {
      title: 'El Nacional FC clasifica a la Copa Libertadores',
      imageUrl: 'https://example.com/nacional-fc-image.jpg',
      text: 'El Nacional FC consiguió su clasificación a la Copa Libertadores tras un empate clave...',
      imageFooterName: 'Foto de archivo: El Nacional FC',
      imageFooterDate: new Date('2025-02-20'),
      author: 'María López',
      category: 'Fútbol',
      team: 'Nacional FC'
    }
  ];
  getDataForm(event:INew){
    this.newsList=[...this.newsList,event]
    console.log(this.newsList)
  }
}
