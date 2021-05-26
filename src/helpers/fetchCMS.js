const baseUrl = 'https://cms-kmm-dev.herokuapp.com';


const fetchSinToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

const fetchConToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = 'x5QycR82&';

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'API-Key': token
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'API-Key': token
            },
            body: JSON.stringify( data )
        });
    }
}



export {
    fetchSinToken,
    fetchConToken
}