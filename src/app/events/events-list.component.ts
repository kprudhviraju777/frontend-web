import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>New List of Items</h1>
    </div>
    <event-thumbnail [event]= "event1"></event-thumbnail>
    `
})
export class EventsListComponent {
    event1 = {
        id: 7,
        name: 'Ludacris',
        date: '02/18/2019',
        time: '7:00 P.M',
        price: 1149.99,
        imageUrl: '/assets/Images/angularconnect-shield.png',
        location: {
            address: '755 E Capitol Ave',
            city: 'Milpitas',
            country: 'United States'
        }
    };
}
