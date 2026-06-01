import SectionHashTracker from '../../components/SectionHashTracker/SectionHashTracker'
import About from './sections/About'
import Contact from './sections/Contact'
import Stack from './sections/Stack'
import Projects from '../Projects/Projects'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <SectionHashTracker sectionIds={['about', 'stack', 'projects', 'contact']} />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </div>
  )
}
