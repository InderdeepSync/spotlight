import {SimpleLayout} from '@/components/SimpleLayout'
import {useRouter} from "next/router";
import {NextSeo} from "next-seo";

export default function Custom404() {
    const {asPath} = useRouter();
    const obj = useRouter()
    console.log(obj)
    return (
        <>
            <NextSeo
                title="Not Found"/>
            <SimpleLayout
                title={"404 - Oh no, you found a page that's missing stuff."}
                intro={`This page could not be found. So sorry.`}
            >
            </SimpleLayout>
        </>)
}