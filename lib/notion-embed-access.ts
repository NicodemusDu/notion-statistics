/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-25 14:40:30
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-25 19:40:19
 * @FilePath: /notion-statistics/lib/notion-embed-access.ts
 * @Description: 判断当前页面是否潜入在notion中
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
export function isEmbed() {
    return !(window.self === window.top);
}

export function isEmbedInNotion(targetUrl: string) {
    const currentUrl = window.top?.location.href || window.parent.location.href;
    console.log(`local url:\t`, currentUrl);
    if (isEmbed()) {
        // const currentUrlObj = urlParse(window.location.href);
        // const targetUrlObj = urlParse(targetUrl);
        // if (currentUrlObj.scheme === targetUrlObj.scheme && currentUrlObj.host === targetUrlObj.host) {
        //     return true;
        // }
        const currentNotionDomain = getNotionSiteDomain(currentUrl) || getNotionSoDomain(currentUrl);
        const targetNotionDomain = getNotionSiteDomain(targetUrl) || getNotionSoDomain(targetUrl);
        if (currentNotionDomain && targetNotionDomain && currentNotionDomain === targetNotionDomain) {
            return true;
        }
        // 两种表现形式
        // https://seedao.notion.site/5443fbba0e694306a72d5271a9f1eb34     公开页面
        // https://www.notion.so/seedao/d4377e7963224371b9284061032bd67e   需要访问权限
    } else {
        console.log('not embed');
    }
    return false;
}

interface IUrl {
    url: string;
    scheme: string; // http https...
    slash: string; //  //
    host: string;
    port?: string;
    path?: string;
    query?: string;
    hash?: string;
}
export function urlParse(url: string): IUrl {
    var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    const result = parse_url.exec(url) || [];
    enum EFieldIndex {
        URL = 0,
        SCHEME = 1,
        SLASH = 2,
        HOST = 3,
        PORT = 4,
        PATH = 5,
        QUERY = 6,
        HASH = 7,
    }
    return {
        url: result[EFieldIndex.URL],
        scheme: result[EFieldIndex.SCHEME],
        slash: result[EFieldIndex.SLASH],
        host: result[EFieldIndex.HOST],
        port: result[EFieldIndex.PORT],
        path: result[EFieldIndex.PATH],
        query: result[EFieldIndex.QUERY],
        hash: result[EFieldIndex.HASH],
    } as IUrl;
}
export function getNotionSiteDomain(ur: string): string | null {
    const parse_url =
        /^(?:([A-Za-z]+):)?(\/{0,3})([0-9\-A-Za-z]+).([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    const result = parse_url.exec(ur) || [];
    enum EFieldIndex {
        URL = 0,
        SCHEME = 1,
        SLASH = 2,
        DOMAIN = 3, // 用户的域名(例如: nicodemus    https://nicodemus.notion.site)
        HOST = 4,
    }

    return result && result[EFieldIndex.HOST] === 'notion.site' ? result[EFieldIndex.DOMAIN] : null;
}
export function getNotionSoDomain(ur: string): string | null {
    const parse_url =
        /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)\/([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    const result = parse_url.exec(ur) || [];
    enum EFieldIndex {
        URL = 0,
        SCHEME = 1,
        SLASH = 2,
        HOST = 3,
        DOMAIN = 4, // 用户的域名(例如: nicodemus    https://www.notion.so/nicodemus/)
    }

    return result && result[EFieldIndex.HOST] === 'www.notion.so' ? result[EFieldIndex.DOMAIN] : null;
}
