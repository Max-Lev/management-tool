export interface IProducts {
    color: string;
    name: string;
    create_date: string;
    last_update: string;
    create_by: string;
}

export const PRODUCTS: IProducts[] = [
    {
        color: 'red',
        name: 'Accident',
        create_date: '26/06/2023',
        last_update: '27/06/2023',
        create_by: 'Max L'
    },
    {
        color: 'blue',
        name: 'Car Accident',
        create_date: '01/01/2023',
        last_update: '27/06/2023',
        create_by: 'Max Lev'
    }
];