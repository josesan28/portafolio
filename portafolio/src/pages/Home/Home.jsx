import About from './sections/About'
import Stack from './sections/Stack'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <About />
      <Stack />
    </div>
  )
}