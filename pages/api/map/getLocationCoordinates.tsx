import type { NextApiRequest, NextApiResponse } from 'next'

const getLocationCoordinates = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const mapboxUrl = `${process.env.NEXT_PUBLIC_MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;
    try {
        const sanityResponse = await fetch(mapboxUrl);
        const data = await sanityResponse.json();
        res.status(200).json({ message: 'success', data: data.features[0].center });
    }
    catch (error: any) {
        res.status(500).json({ message: 'error', data: error.message });
    }
}

export default getLocationCoordinates;