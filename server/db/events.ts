export interface IEvent {
    id:number;
    color: string;
    name: string;
    create_date: string;
    last_update: string;
    create_by?: string;
    description: string;
}

export let EVENTS: IEvent[] = [
    {
        id:1,
        color: '#0a0a0a',
        name: 'Train stop',
        create_date: '01/06/2023',
        last_update: '17/06/2023',
        create_by: 'Max Lev',
        description: 'Train Junction'
    },
    {   id:2,
        color: '#ff0000',
        name: 'Car Accident',
        create_date: '01/01/2023',
        last_update: '23/05/2023',
        create_by: 'Max Lev',
        description: 'No damage'
    }
];