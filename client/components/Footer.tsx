import data from '../data/footer.ts'

function Footer() {
    return (
        <footer>@{data.copyright} {data.author}</footer>
    )
}

export default Footer