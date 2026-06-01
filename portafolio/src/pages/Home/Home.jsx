import About from './sections/About'
import Stack from './sections/Stack'
import Projects from '../Projects/Projects'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <About />
      <Stack />
      <Projects />
    </div>
  )
}
