interface Props {
    id: number
    blogTitle: string
    link: string
  }

function OtherBlog(props: Props) {
    return (
        <div className="card yellow">
            <h3>{props.blogTitle}</h3>
            <a href={props.link}>{props.link}</a>
        </div>
    )
}

export default OtherBlog