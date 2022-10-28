import Head from "next/head";
import { useRouter } from "next/router";
import SearchByDate from "../../components/search/search";
import { getAllNews } from "../../helpers/api-util"

function News(props) {
  const router = useRouter()
  const news = props.news
  function searchedDate(year, month) {
    const fullPath = `/news/${year}/${month}`;
    router.push(fullPath);
  }
    return (<>
    <Head>
      <title>News</title>
      <meta name='description'
      content='News'/>
    </Head>
      <h1>News</h1>
      <SearchByDate onSearch={searchedDate}/>
      <ul>{news.map(n=><li key={n._id}>{n.name}</li>)}</ul>
      </>
    )
  }
  export async function getStaticProps() {
    const items = await getAllNews()
    return {
      props: {
        news: items
      },
      revalidate: 1800
    }
  }
  export default News