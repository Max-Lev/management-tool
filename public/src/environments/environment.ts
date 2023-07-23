const server = 'https://us-central1-management-tool-d8e1a.cloudfunctions.net/api';

export const environment = {
  firebase: {
    projectId: 'management-tool-d8e1a',
    appId: '1:66827432883:web:c5f46cebd492770c4711c6',
    storageBucket: 'management-tool-d8e1a.appspot.com',
    apiKey: 'AIzaSyCvOZTBg6njWiiLKReLTD49DQFvs5bMjeY',
    authDomain: 'management-tool-d8e1a.firebaseapp.com',
    messagingSenderId: '66827432883',
    measurementId: 'G-Z002PW80Z0',
  },
    production: true,
    iconsConfig: `${server}/config/icons`,
    columns: `${server}/config/columns`,
    events: `${server}/config/events`,
    resolver: `${server}/config/resolver`,
    postEvent: `${server}/config`,
    updateEvent: `${server}/config`,
    firebaseConfig : {
        apiKey: "AIzaSyCvOZTBg6njWiiLKReLTD49DQFvs5bMjeY",
        authDomain: "management-tool-d8e1a.firebaseapp.com",
        projectId: "management-tool-d8e1a",
        storageBucket: "management-tool-d8e1a.appspot.com",
        messagingSenderId: "66827432883",
        appId: "1:66827432883:web:c5f46cebd492770c4711c6",
        measurementId: "G-Z002PW80Z0"
    }
};