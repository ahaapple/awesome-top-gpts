import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function POST(req: Request) {
    const { url } = await req.json();
    const urlPattern = /^https:\/\/chat\.openai\.com\/g\/g-[a-zA-Z0-9]+$/;
    if (!urlPattern.test(url)) {
        return NextResponse.json({ message: 'Invalid GPTS URL' }, { status: 404 })
    }
    try {
        await redis.sadd("gpts", url);
        return NextResponse.json({ message: 'success' })
    } catch (error) {
        return NextResponse.json({ error: `${error}` }, { status: 500 })
    }
}