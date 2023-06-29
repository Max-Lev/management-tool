export interface Column {
    field: string;
    header: string;
}

export const COLS: Column[] = [
    {
        field: 'color',
        header: 'Color'
    },
    {
        field: 'name',
        header: 'Name'
    },
    {
        field: 'create_date',
        header: 'Create Date'
    },
    {
        field: 'last_update',
        header: 'Last Update'
    },
    {
        field: 'create_by',
        header: 'Created By'
    }
];