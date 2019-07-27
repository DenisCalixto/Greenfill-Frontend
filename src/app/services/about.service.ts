import { Injectable } from '@angular/core';

import { About } from '../models/About';

@Injectable()
export class AboutService {
  abouts: About[];

  constructor() {
    this.abouts = [
      {
        name: 'Andre Falco',
        role: 'Project Manager, Designer',
        info: 'Brief description of background, role, responsibilities and so on. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        image: '../../assets/andre.png'
      },
      {
        name: 'Denis Calixto',
        role: 'Lead Developer',
        info: 'Brief description of background, role, responsibilities and so on. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        image: '../../assets/denis.png'
      },
      {
        name: 'Marinela Poso',
        role: 'Lead Designer, UX',
        info: 'Brief description of background, role, responsibilities and so on. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        image: '../../assets/marinela.png'
      },
      {
        name: 'June Jung',
        role: 'Front-end Developer, UX Designer',
        info: 'Brief description of background, role, responsibilities and so on. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        image: '../../assets/june.png'
      },
      {
        name: 'Brian Nguyen',
        role: 'Back-end Developer',
        info: 'Brief description of background, role, responsibilities and so on. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        image: '../../assets/brian.png'
      },
      {
        name: 'Thanh Nguyen',
        role: 'UX/UI Designer',
        info: 'Brief description of background, role, responsibilities and so on. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        image: '../../assets/thanh.png'
      }
    ]
  }

  getAbouts(): About[] {
    return this.abouts;
  }
}
