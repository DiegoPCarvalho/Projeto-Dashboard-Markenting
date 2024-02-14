// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  name: string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
   const tabela = await axios("https://api.pipe.run/v1/deals?token=8181a47927f0f5c9768f6e8fa2ac1e6e&show=200")
    .then(resp => resp.data.data);

  res.json(tabela)
}
