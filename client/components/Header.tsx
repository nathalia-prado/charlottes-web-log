import data from '../data/header.ts'

function Header() {
    return (
        <header className='header green'>
            <a className='header-title' href={data.link}>{data.title}</a>
        </header>
    )
}

export default Header