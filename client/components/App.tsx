import Footer from "./Footer"
import Header from "./Header"
import OtherBlogs from "./OtherBlogs"
import Posts from "./Posts"

function App() {
  return (
    <>
      <div className="flex-container">
          <div className="col-11">
            <Header />
          </div>
          <div className="col-3">
            <OtherBlogs />
          </div>
          <div className="col-5">
            <Posts />
          </div>
          <div className="col-3 orange">
              <p>RECENT ENTRIES</p>
              <p>RECENT ENTRIES</p>
              <p>RECENT ENTRIES</p>
          </div>
          <div className="col-11">
            <Footer />
          </div>
      </div>
    </>
  )

}

export default App
