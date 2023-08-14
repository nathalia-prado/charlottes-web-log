interface Props {
    id: number
    title: string
    date: string
    commentCount: number
    paragraphs: string[]
  }

function Post(props: Props) {
    return (
        <div>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p>{props.commentCount}</p>
        {props.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
    )
}

export default Post