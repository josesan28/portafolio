import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import RouterScrollManager from './components/RouterScrollManager/RouterScrollManager'
import Home from './pages/Home/Home'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'

export default function App() {
  return (
    <>
      <RouterScrollManager />

      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/proyectos/:projectId"
          element={
            <Layout>
              <ProjectDetail />
            </Layout>
          }
        />
      </Routes>
    </>
  )
}
