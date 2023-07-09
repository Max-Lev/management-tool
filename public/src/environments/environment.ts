const server = 'https://us-central1-management-tool-d8e1a.cloudfunctions.net/api';

export const environment = {
    production: true,
    iconsConfig: `${server}/config/icons`,
    columns: `${server}/config/columns`,
    events: `${server}/config/events`,
    postEvent: `${server}/config`,
    updateEvent: `${server}/config`
};