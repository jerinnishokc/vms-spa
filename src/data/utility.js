function storeInLocalStorage(key,value) {
    console.log('STORE LOCAL STORAGE',key,value);
    window.localStorage.setItem(key, value);
} 

function clearLocalStorage(key) {
    console.log('CLEAR LOCAL STORAGE', key);
    window.localStorage.removeItem(key);
} 

function checkLocalStorage(key) {
    console.log('CHECK LOCAL STORAGE', key);
    const userString = window.localStorage.getItem(key);
    const user = JSON.parse(userString);
    return user;
} 

export {storeInLocalStorage, clearLocalStorage, checkLocalStorage};