import realm, { ACCOUNT_SCHEMA } from "../config/database";
const ERROR_SERVER = "Falló la conexión con el servidor";

export const urlBase = (version, request) => `https://procontroles.com/report_manager/v${version}/${request}`;

function* requestLoginFromApi(payload) {

    const version = yield realm.objectForPrimaryKey(ACCOUNT_SCHEMA, 0).version;
    const response = yield fetch(urlBase(version, 'login'), {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    //  alert(`response:${JSON.stringify(response,null,2)}`)
    return yield response.status === 200 ? (response._bodyInit !== '') ? JSON.parse(response._bodyInit) : {} : {};
}
function* requestRegisterFromApi(payload) {

    const version = yield realm.objectForPrimaryKey(ACCOUNT_SCHEMA, 0).version;
    const response = yield fetch(urlBase(version, 'register'), {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    return yield (response.status === 200 || response.status === 201 || response.status == 400) ? JSON.parse(response._bodyInit) : {};
}

export const Api = {
    requestLoginFromApi,
    requestRegisterFromApi,
    urlBase
}; 