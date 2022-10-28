import Head from 'next/head';
import { getFilteredNews } from '../../helpers/api-util';

function SelectedDate(props) {
  const news = props.news

  return (
    <>
    <Head>
      <title>News</title>
      <meta name='description'
      content={`all news created on ${news[0].created}`}/>
    </Head>
      <h2>SLUG</h2>
      <ul>{news?news.map(n=><li key={n._id}><p>{n.name}</p><p>{n.description}</p><img src={n.imageUrl} alt='image'/></li>):''}</ul>
    </>
  );
}

export async function getServerSideProps(context) {
  const {params}=context 
  const year = Number(params.slug[0])
  const month = Number(params.slug[1])
  const filteredNews = await getFilteredNews(`${month}.${year}`)

  return {
    props:{
      news:filteredNews
    }
  }
}

export default SelectedDate;