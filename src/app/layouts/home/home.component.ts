import { Component } from '@angular/core';
//@ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit(): void{
    const target = document.querySelector('.tw')

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#E7DDFA'
    })
    
    writer
      .type('$:Hello, my name is Murasaki_...')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(30)
      .type('I am a Software Developer,')
      .rest(500)
      .remove(26)
      .type('I can provide solutions to your business problems')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(49)
      .type('feel free to reach out to me on any of my platforms')
      .rest(500)
      .clear()
      .start()
  }
}
