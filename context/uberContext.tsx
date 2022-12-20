import { createContext, useState, useEffect } from "react";

export const UberContext = createContext(null);

export const UberProvider = ({ children } : any) => {
    const [pickup, setPickup] = useState(null);
    const [dropoff, setDropoff] = useState(null);
    const [pickupCoordinates, setPickupCoordinates] = useState(null);
    const [dropoffCoordinates, setDropoffCoordinates] = useState(null);

    useEffect(() => {
        if (pickup && dropoff) {
            (async () => {
                await createLocationCoordinatePromise(pickup, 'pickup');
                await createLocationCoordinatePromise(dropoff, 'dropoff');
            })();
        } else return;
    }, [pickup, dropoff]);

    const createLocationCoordinatePromise = async (locationName: any, locationType: any) => {
        return new Promise(async (resolve, reject) => {
            const response = await fetch('/api/map/getLocationCoordinates', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ location: locationName })
            })
    
            const data = await response.json();
    
            if (data.message === 'success') {
                switch(locationType) {
                    case 'pickup':
                        setPickupCoordinates(data.data);
                        break;
                    case 'dropoff':
                        setDropoffCoordinates(data.data);
                        break;
                }
                resolve(data.data);
            } else {
                reject();
            }
        })
    }

    return (
        <UberContext.Provider value={{pickup, setPickup, dropoff, setDropoff, pickupCoordinates, setPickupCoordinates, dropoffCoordinates, setDropoffCoordinates}}>
            {children}
        </UberContext.Provider>
    )
}