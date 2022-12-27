import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  formattedaddress= " ";
  myOptions: any;
  constructor(){
    this.myOptions = new Options({
      componentRestrictions: {
        country: 'AU'
      }
    });
  }
  

public handleAddressChange(address: any) {
  //setting address from API to local variable
  this.formattedaddress=address.formatted_address;
}
  zoom: number = 8;
  searchText: any;
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      label: ''
    });
  }
  
  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  } 

  addCircle($event: MouseEvent){
    this.circles.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      radius: 6000,
      draggable: false,
      fillColor: 'yellow'      
    });
  }

  circleDragEnd(c: Circle, $event: MouseEvent) {
    console.log('dragEnd', c, $event);
  }
  markers: Marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ];
  
  circles: Circle[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
      radius: 3000,		  
		  draggable: true,
      fillColor: 'blue'
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
      radius: 5000,		  
		  draggable: false,
      fillColor: 'brown'
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,		  
      radius: 10000,
		  draggable: true,
      fillColor: 'black'
	  }
  ];

  companies: Company[] = [
    { name: "Peak Retirement" },
    { name: "Pure Financial" },
    { name: "Affinity advisor"}
  ]
}



// just an interface for type safety.
interface Marker {
	lat: number;
	lng: number;
	label: string;
	draggable: boolean;
}

interface Circle{
  lat: number;
  lng: number;
  radius: number;
  draggable: boolean;  
  fillColor: string;
}

interface Company{
  name: string;
}