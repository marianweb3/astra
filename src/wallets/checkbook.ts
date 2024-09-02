import axios from "axios";

const checkBookUrl = process.env.CHECKBOOK_URL;
const publicKey = process.env.CHECKBOOK_PUBLIC;
const secretKey = process.env.CHECKBOOK_SECRET;

export const createCard = async (city, country, address, zip, phone, email) => {

    const options = {
        method: 'POST',
        url: `${checkBookUrl}/v3/account/vcc`,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `${publicKey}:${secretKey}`
        },
        data: {
            address: { city: city, country: country, line_1: address, zip: zip },
            phone: phone,
            email: email
        }
    };

    try {

        const response = await axios.request(options);
        console.log(response)
        return response.data;

    } catch (err) {
        console.log(err)
        return err;
    }

}
