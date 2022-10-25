/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-22 16:30:41
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-25 19:32:53
 * @FilePath: /notion-statistics/pages/posts/notion.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { urlParse, isEmbedInNotion } from '../../lib/notion-embed-access';

export default function FirstPost() {
    const routers = useRouter();
    useEffect(() => {
        const url = (process.env.NEXT_PUBLIC_TARGET_URL as string) || '';
        console.log(`target url = ${url}, is embed notion: ${isEmbedInNotion(url)} :`, process.env.NODE_ENV);
    });
    return (
        <div>
            <Head>
                <title> Frirst Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => {
                    console.log('load script');
                }}
            />
            <h1>First Post </h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <Image src="/images/profile.png" height={256} width={256} alt="nicodemus" />
        </div>
    );
}
