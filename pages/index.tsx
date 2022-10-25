/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-22 16:16:27
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-25 16:33:10
 * @FilePath: /notion-statistics/pages/index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { urlParse, isEmbedInNotion, getNotionSoDomain, getNotionSiteDomain } from '../lib/notion-embed-access';
import { useEffect } from 'react';

const Home: NextPage = () => {
    useEffect(() => {
        const url = process.env.NEXT_PUBLIC_TARGET_URL || '';
        console.log(`target url = ${url}, is embed notion: ${isEmbedInNotion(url)}`);
        console.log(
            `notion.so = ${getNotionSoDomain('https://www.notion.so/nicodemusdu/fa242578bc2441de97310057192d6962')}`,
        );
        console.log(
            `notion.site = ${getNotionSiteDomain('https://seedao.notion.site/5443fbba0e694306a72d5271a9f1eb34')}`,
        );
    });

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Create Next App With Tailwindcss</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Welcome to{' '}
                    <a className="text-blue-600" href="https://nextjs.org">
                        Next.js!
                    </a>
                </h1>

                <p className="mt-3 text-2xl">
                    Get started by editing{' '}
                    <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">pages/index.tsx</code>
                </p>

                <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                    <a
                        href="https://nextjs.org/docs"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
                        <p className="mt-4 text-xl">Find in-depth information about Next.js features and its API.</p>
                    </a>

                    <a
                        href="https://nextjs.org/learn"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Learn &rarr;</h3>
                        <p className="mt-4 text-xl">Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Examples &rarr;</h3>
                        <p className="mt-4 text-xl">Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
                        <p className="mt-4 text-xl">Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </a>
                </div>
                <iframe src="/posts/notion" width="300" height="380"></iframe>
            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </a>
            </footer>
        </div>
    );
};

export default Home;
