import data from '../data/other-blogs.ts'
import OtherBlog from './OtherBlog.tsx'

function OtherBlogs() {
    return (
        <div>
            {data.map(blog => <OtherBlog key={blog.id} {...blog} />)}
        </div>
    )
}

export default OtherBlogs