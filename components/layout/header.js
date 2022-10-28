import Link from "next/link";

function Header(props) {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/catalog'>Catalog</Link>
                </li>
                <li>
                    <Link href='/news'>News</Link>
                </li>
                <li>
                    <Link href='/users'>Users</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;