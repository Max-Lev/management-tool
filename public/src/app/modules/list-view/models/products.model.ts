export interface IProduct {
    id?:number;
    color: string;
    name: string;
    description:string;
    create_date?: string;
    last_update?: string;
    create_by?: string;
}

export interface IColumn {
    field: string;
    header: string;
}

