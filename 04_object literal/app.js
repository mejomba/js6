// function createAddress(country, city) {

//     const newAddress = {
//         country,
//         city,
//         zipCode: 'none'
//     }

//     console.log(newAddress);
// }

// createAddress('iran', 'tehran')



function createAddress(address) {
    const {country, city} = address;
    const newAddress = {
        country,
        city
    }

    console.log(newAddress);
    console.log(`${newAddress.country}`);
}

createAddress({country: 'iran', city: 'rudsar'})

































