import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Agendamentos from './routes/Agendamentos/index.tsx'
import CodigoVerificacao from './routes/CodigodeVerificacao/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Login from './routes/Login/index.tsx'
import LoginSenha from './routes/LoginComSenha/index.tsx'
import QuemSomos from './routes/QuemSomos/index.tsx'
import Agendar from './routes/Agendar/index.tsx'


const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
   {path: '/home', element: <Home />},
   {path: '/agendamentos', element: <Agendamentos />},
   {path: '/codigodeverificacao', element: <CodigoVerificacao />},
   {path: '/cadastro', element: <Cadastro />},
   {path: '/faq', element: <Faq />},
   {path: '/login', element: <Login />},
   {path: '/loginsenha', element: <LoginSenha />},
   {path: '/quemsomos', element: <QuemSomos />},
   {path: '/agendar', element: <Agendar />},
  ]}
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
