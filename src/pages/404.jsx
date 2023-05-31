import {SimpleLayout} from '@/components/SimpleLayout'
import {useRouter} from "next/router";
import {NextSeo} from "next-seo";

export default function Custom404() {
    const {asPath} = useRouter();
    console.log(asPath)
    return (
        <>
            <NextSeo
                title="Not Found"/>
            <SimpleLayout
                title={"404 - Oh no, you found a page that's missing stuff."}
                intro={`"${asPath}" is not a valid page on inderdeepsync.netlify.app. So sorry.`}
            >
            </SimpleLayout>
        </>)
}