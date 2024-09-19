import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CeysaAI from './pages/Ceysa/index.jsx'
import Application from './pages/Application/index.jsx'
import KeyTech from './pages/KeyTech/index.jsx'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <Layout>
        <App />
      </Layout>
  },
  {
    path: '/KeyTech',
    element:
      <Layout>
        <KeyTech />
      </Layout>
  },
  {
    path: '/Application',
    element:
      <Layout>
        <Application />
      </Layout>
  },
  {
    path: '/CeysrAI',
    element:
      <Layout>
        <CeysaAI />
      </Layout>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
