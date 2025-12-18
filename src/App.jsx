import { useState } from "react"
import "./App.css"
import { LocationContainer } from "./location_container"
import { SearchContainer } from "./search_container"

function App() {
  const [location, setLocation] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
    }, 2500)
  }

  return (
    <div className="app">

    <header className="app-header">
      <LocationContainer
        location={location}
        setLocation={setLocation}
      />

      <h1 className="app-title">SastaKart</h1>
    </header>

      <SearchContainer
        onSearch={handleSearch}
        isSearching={isSearching}
      />
    </div>
  )
}

export default App
