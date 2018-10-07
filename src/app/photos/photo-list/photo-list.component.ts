import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = []
  
  constructor(private photoService: PhotoService){}
  
  ngOnInit(): void {
      this.photoService.listFromUser('flavio').subscribe(
        photo => {
          console.log(photo[0].id);
          this.photos = photo
          console.log(photo);
        }
      )
    }

}