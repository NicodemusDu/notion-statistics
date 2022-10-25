/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-22 16:16:27
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-25 11:28:58
 * @FilePath: /notion-statistics/pages/api/hello.ts
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ name: 'John Doe' });
}
