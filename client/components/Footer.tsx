import data from '../data/footer.ts'

function Footer() {
    return (
        <footer className='footer blue'>@{data.copyright} {data.author}</footer>
    )
}

export default Footer