async function getAllVendorVehicles(vendorId) {
    //get
    //sleep
    // await new Promise(r => setTimeout(r,5000));    
    // const rawData = await fetch("https://localhost:5001/api/vehicles");
    const rawData = await fetch(`https://localhost:44376/api/vehicles/vendorVehicles/${vendorId}`);
    const vehicles = await rawData.json();
    return vehicles;
    
}

function getVehicle(id) {
    //get
    return [];
}

async function addVehicle(newVehicle) {
    //post
    try{
        const groomedObj = {
            Id: newVehicle.id,
            Name: newVehicle.name,
            Company: newVehicle.company
        };
        const response = await fetch("https://localhost:5001/api/vehicles", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(groomedObj) // body data type must match "Content-Type" header
        });
    
        console.log('Response from api: ', response);
        return "success";
    } catch(error) {
        return error;
    }
}

export {getAllVendorVehicles, getVehicle, addVehicle};