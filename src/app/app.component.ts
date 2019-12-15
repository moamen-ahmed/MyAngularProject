import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 colors=['Red','Green','Purple','Yellow','White','Black'];

  name='Moamen Ahmed';
  age=31
  source='https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/v1559151354/fczri2sftwzu4afgol9o.jpg';
  myFunction(){
    alert('Salamo Alaikom');
  }
  

  onChange()
  {
    console.log('Color Changed !');
  }

}




