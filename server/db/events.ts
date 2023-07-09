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
        color: '#07fa44',
        name: 'Train stop',
        create_date: '01/06/2023',
        last_update: '17/06/2023',
        create_by: 'Max Lev',
        description: 'Train crash'
    },
    {   id:2,
        color: '#0000ff',
        name: 'Car Accident',
        create_date: '01/01/2023',
        last_update: '23/05/2023',
        create_by: 'Max Lev',
        description: 'No damage'
    }
];