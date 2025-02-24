import { Content } from "./components/Content"
import { Navbar } from "./components/Navbar"
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <div className="flex gap-[2%] flex-wrap content-start flex-row">
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
