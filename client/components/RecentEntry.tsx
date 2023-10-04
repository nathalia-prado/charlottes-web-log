interface Props {
    id: number
    name: string
    link: string
  }

function RecentEntry(props: Props) {
    return (
        <div className="card orange">
            <h3>{props.name}</h3>
            <a href={props.link}>{props.link}</a>
        </div>
    )
}

export default RecentEntry