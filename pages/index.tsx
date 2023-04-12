import Head from 'next/head'
import App from "@/component/App";

export default function Home() {
    return (
        <>
            <Head>
                <title>Frank Duckart</title>
                <meta name="description" content="Frank Duckart Faves"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <App/>
        </>
    )
}
