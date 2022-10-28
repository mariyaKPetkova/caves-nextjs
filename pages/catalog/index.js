import CavesList from '../../components/caves/caves-list';
import { getAll } from '../../helpers/api-util'

function Catalog(props) {

  return (
    <>
      <h1>Catalog</h1>
      <CavesList items={props.caves} />
    </>
  )
}
export async function getStaticProps() {
  const items = await getAll()
  return {
    props: {
      caves: items
    },
    revalidate: 1800
  }
}
export default Catalog