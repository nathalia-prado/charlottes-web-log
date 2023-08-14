import data from '../data/header.ts'

function Header() {
    return (
        <header className='header green'>
            <a className='header-title' href={data.link}>{data.title}</a><br />
            <img className='img' alt="Charlotte blog" src="/images/charlottes-web.png" />
        </header>
    )
}

export default Header