import Footer from "./Footer"
import Header from "./Header"

function App() {
  return (
    <>
      <div className="flex-container">
          <div className="col-11 green">
            <Header />
          </div>
          <div className="col-3 yellow">
              <p>OTHER BLOGS</p>
              <p>OTHER BLOGS</p>
              <p>OTHER BLOGS</p>
          </div>
          <div className="col-5 purple">
              <p>POSTS</p>
              <p>POSTS</p>
              <p>POSTS</p>
          </div>
          <div className="col-3 orange">
              <p>RECENT ENTRIES</p>
              <p>RECENT ENTRIES</p>
              <p>RECENT ENTRIES</p>
          </div>
          <div className="col-11 blue">
            <Footer />
          </div>
      </div>
    </>
  )

}

export default App
