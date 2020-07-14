import { NextApiRequest, NextApiResponse } from 'next';
import octo from '../../../utils/octo';


const getPulls = async (_: NextApiRequest, res: NextApiResponse) => {
    const pulls = await octo.pulls.list({
        owner: "Standard-Structure",
        repo: "Standard-Structure"
    })
    res.json(pulls)

    return pulls
}

export default getPulls