import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent{

  @Input() isModalOpen = false;
  @Input() movie: Movie;
  @Input() poster: string;

  @Output()
  update = new EventEmitter();

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.update.emit();
  }

}
