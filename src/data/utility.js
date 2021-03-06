import alertify from 'alertifyjs';

function storeInLocalStorage(key,value) {
    console.log('STORE LOCAL STORAGE',key,value);
    window.localStorage.setItem(key, value);
} 

function clearLocalStorage(key) {
    console.log('CLEAR LOCAL STORAGE', key);
    window.localStorage.removeItem(key);
    alertify.success("Successfully logged out!");
} 

function checkLocalStorage(key) {
    console.log('CHECK LOCAL STORAGE', key);
    const userString = window.localStorage.getItem(key);
    const user = JSON.parse(userString);
    return user;
} 

function serviceUnavailable() {
    alertify.warning('This service is not available now. Will be included in the coming days!');
}
export {storeInLocalStorage, clearLocalStorage, checkLocalStorage, serviceUnavailable};