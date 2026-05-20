import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home.tsx'
import { ErrorPage } from './pages/ErrorPage.tsx'
import { Layout } from './components/Layout.tsx'

function App() {
   return (
      <Router>
         <Routes>
            <Route
               path="/"
               element={
                  <Layout>
                     <HomePage />
                  </Layout>
               }
            />
            <Route
               path="*"
               element={
                  <Layout>
                     <ErrorPage />
                  </Layout>
               }
            />
         </Routes>
      </Router>
   )
}

export default App
