import "font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/fduckart.css";

import type {AppProps} from 'next/app'
import {useEffect} from "react";

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return <Component {...pageProps} />
}
