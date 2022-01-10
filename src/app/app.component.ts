import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'PianoApp';

  context= new AudioContext();
 
  jsNota(frecuencia:number){
    var osc = this.context.createOscillator();
    var gain = this.context.createGain();
        osc.connect(gain);
        osc.type="sine";
        osc.frequency.value=frecuencia;
        gain.connect(this.context.destination);
        osc.start(0);
        gain.gain.exponentialRampToValueAtTime(0.00001,this.context.currentTime +1.5);
  }
}
