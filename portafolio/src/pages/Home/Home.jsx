import SectionHashTracker from '../../components/SectionHashTracker/SectionHashTracker'
import About from './sections/About'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import Stack from './sections/Stack'
import './Home.css'

const homeSectionIds = ['about', 'stack', 'projects', 'contact']

export default function Home() {
  return (
    <div className="home">
      <SectionHashTracker sectionIds={homeSectionIds} />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </div>
  )
}
