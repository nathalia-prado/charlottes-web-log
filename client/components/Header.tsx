import data from '../data/header.ts'

function Header() {
    return (
        <header>{data.title} {data.link}</header>
    )
}

export default Header