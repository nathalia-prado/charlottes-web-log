interface Props {
    id: number
    title: string
    date: string
    commentCount: number
    paragraphs: string[]
  }

function Post(props: Props) {
    return (
        <div className="card purple">
            <h3>{props.title}</h3>
            <p>{props.date}</p>
            {props.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <p className="comment">Comments: {props.commentCount}</p>
        </div>
    )
}

export default Post