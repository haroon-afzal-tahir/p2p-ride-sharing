import { client } from "../../../lib/sanity";
import type { NextApiRequest, NextApiResponse } from 'next'

const query = `*[_type=="rides"]{
    "service": title,
    "iconUrl": icon.asset->url,
    priceMultiplier,
    orderById
}|order(orderById asc)`;

const getRideTypes = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try {
        const sanityResponse = await client.fetch(query);
        res.status(200).json({ message: 'success', data: sanityResponse });
    }
    catch (error: any) {
        res.status(500).json({ message: 'error', data: error.message });
    }
}

export default getRideTypes;