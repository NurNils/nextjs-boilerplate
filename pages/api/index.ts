import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
import Recipe from "../../models/Recipe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const recipes = await Recipe.find({});
                res.status(200).json({ status: 'success', data: recipes });
            } catch (e) {
                console.error(e);
                res.status(404).json({ status: 'error', message: 'Recipe search could not be performed.' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).send(`Method ${method} is not allowed.`);
            break;
    }
}

