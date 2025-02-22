import { Component,input,Input } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';

@Component({
  selector: 'app-blog-list',
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  posts = input<INew[]> ([]);
  blogContent=""
  newList:INew[]=[]

  ngOnChanges() {
    this.blogContent = ""; // Limpia el contenido cuando cambian los posts.
    console.log("El mío", this.posts);
    
    // Itera sobre la lista de posts para generar el contenido HTML.
    for (let post of this.posts()) {
      this.blogContent += `
        <div class="news-item">
          <h3>${post.title}</h3>
          <img src="${post.imageUrl}" alt="${post.title}" class="news-image" />
          <p>${post.text}</p>
          <div class="news-footer">
            <span>${post.imageFooterName} - ${post.imageFooterDate}</span>
            <span>${post.author} | ${post.category} | ${post.team}</span>
          </div>
        </div>
      `;
    }
  }

  }

