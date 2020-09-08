async function getAllVendorVehicles(vendorId) {
    //get
    //sleep
    // await new Promise(r => setTimeout(r,5000));    
    // const rawData = await fetch("https://localhost:5001/api/vehicles");
    const rawData = await fetch(`https://localhost:44376/api/vehicles/vendorVehicles/${vendorId}`);
    const vehicles = await rawData.json();
    return vehicles;
}

async function getAllAvailableVehicles() {
    const rawData = await fetch(`https://localhost:44376/api/vehicles/availableVehicles`);
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
        // console.log('I recieved this obj:', newVehicle);
        const groomedObj = {
            RegId: newVehicle.regId,
            Uid: newVehicle.uid,
            Name: newVehicle.name,
            Company: newVehicle.company,
            Price: newVehicle.price,
            VendorId: newVehicle.vendor_id,
            VendorName: newVehicle.vendor_name
        };
        // console.log('I am going to send this:', groomedObj);
        const port = '44376';//5001
        const response = await fetch(`https://localhost:${port}/api/vehicles`, {
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
        if(response.status === 201) {
            console.log('Response from VEHICLE api: ', response);
            return "success";
        } else {
            throw new Error(`${response.status} - ${response.title}`);
        }
    } catch(error) {
        return error;
    }
}

function bookAVehicle(vehicle) {
    return true;
}

export {getAllVendorVehicles, getVehicle, addVehicle, getAllAvailableVehicles, bookAVehicle};