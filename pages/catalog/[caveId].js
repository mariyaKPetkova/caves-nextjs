import Image from "next/image"
import { getOne, getAll } from "../../helpers/api-util"

function CaveDetails(props) {
    const cave = props.cave
    if (!cave) {
        return(
            <p>Not Found</p>
        )
      }
    return (
        <>
            <h1>Cave Details</h1>
            <p>{cave.name}</p>
            <p>{cave.location}</p>
            <p>{cave.description}</p>
            <img src={cave.imageUrl} />
            {/* <Image src={`/${cave.imageUrl}`} alt={cave.name} width={250} height={200}/> */}
            <p>{cave.likes.length}</p>
        </>
    )
}
export async function getStaticProps(context) {
    const caveId = context.params.caveId
    const item = await getOne(caveId)
    return {
        props: {
            cave: item
        },
        revalidate:1800
    }
}
export async function getStaticPaths() {
    const caves = await getAll()

    const pathsCaves = caves.map(cave => ({ params: { caveId: cave._id } }))
    return {
        paths: pathsCaves,
        fallback: true
    }
}
export default CaveDetails