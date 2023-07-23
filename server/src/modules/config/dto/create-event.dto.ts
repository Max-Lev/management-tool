import { IEvent } from 'db/events';

export class EventModel implements IEvent {
    id: number;
    color: string;
    name: string;
    description: string;
    create_date: string;
    last_update: string;
    create_by?: string;

    constructor(event: IEvent) {
        this.id = event.id;
        this.color = event.color;
        this.name = event.name;
        this.description = event.description;
        this.create_date = new Date().toLocaleDateString();
        this.last_update = new Date().toLocaleDateString();
        this.create_by = 'N/A';
    }
}