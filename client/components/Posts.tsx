import data from '../data/posts.ts'
import Post from './Post.tsx'

function Posts() {
    return (
        <div>
            {data.map(post => <Post key={post.id} {...post} />)}
        </div>
    )
}

export default Posts