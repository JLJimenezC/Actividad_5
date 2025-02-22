import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INew } from '../../interfaces/inew.interface';


@Component({
  selector: 'app-blog-form',
  imports: [FormsModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css',
})
export class BlogFormComponent {
  @Output() sendBlogPost: EventEmitter<INew> = new EventEmitter();
  newBlogPost: INew = {
    title: '',
    imageUrl: '',
    text: '',
    imageFooterName: '',
    imageFooterDate: new Date(), 
    author: '',
    category: '', 
    team: '',
  };
  getNew() {
    console.log(this.newBlogPost);
    this.sendBlogPost.emit(this.newBlogPost);
    this.newBlogPost = {
      title: '',
      imageUrl: '',
      text: '',
      imageFooterName: '',
      imageFooterDate: new Date(), 
      author: '',
      category: '', 
      team: '',
    };
  }
}
