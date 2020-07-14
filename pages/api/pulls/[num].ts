import { NextApiResponse, NextApiRequest } from 'next';
import octo from '../../../utils/octo';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const pull = await octo.pulls.get({
        pull_number: (parseInt(req.query.num)),
        owner: "Standard-Structure",
        repo: "Standard-Structure"
    })

    pull.status === 200 ? (
        res.json(pull)
    ) : (
        res.send(pull.status)
    )

    return pull
}