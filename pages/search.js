import Head from 'next/head'
import { useRouter } from "next/router"
import Header from "../components/Header"
import Response from "../Response"
import SearchResults from '../components/SearchResults'

const API_KEY = process.env.API_KEY
const CONTEXT_API_KEY = process.env.CONTEXT_API_KEY

const Search = ({ results }) => {

    console.log(results)
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* header */}
            <Header />

            {/* search results */}
            <SearchResults results={results} />
        </div>

    )
}

export default Search

export const getServerSideProps = async (context) => {
    const dummyData = false
    const startIndex = context.query.start || "0"
    const data = dummyData ? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_API_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then(res => res.json())

    return {
        props: {
            results: data
        }
    }

}