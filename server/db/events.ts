export interface IEvent {
    id:number;
    color: string;
    name: string;
    create_date: string;
    last_update: string;
    create_by?: string;
    description: string;
}

export const EVENTS: IEvent[] = [
    {
        id:1,
        color: 'red',
        name: 'Accident',
        create_date: '26/06/2023',
        last_update: '27/06/2023',
        create_by: 'Max L',
        description: 'Car crash'
    },
    {   id:2,
        color: 'blue',
        name: 'Car Accident',
        create_date: '01/01/2023',
        last_update: '27/06/2023',
        create_by: 'Max Lev',
        description: 'No damage'
    }
];