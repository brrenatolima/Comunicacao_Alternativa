import { lazy } from 'react';
import {Home as HomeIcon, Class} from '@mui/icons-material';
import ImageIcon from '@mui/icons-material/Image';

const Login = lazy(() => import('./pages/Authentication/Login'))
const Register = lazy(() => import('./pages/Authentication/Register'))
const RecoveryPassword = lazy(() => import('./pages/Authentication/RecoveryPassword'))
const Home = lazy(() => import('./pages/Internal/Home'))
const Category = lazy(() => import('./pages/Internal/Category'))
const Image = lazy(() => import('./pages/Internal/Image'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Profile = lazy(() => import('./pages/Internal/Profile'))
const Timeline = lazy(() => import('./pages/Internal/Timeline'))
const Task = lazy(() => import('./pages/Internal/Task'))
const Settings = lazy(() => import('./pages/Internal/Settings'))

const routes = [
    { path: '/', element: Home, title: 'Home', tab: true, icon: HomeIcon, getLastRoute: false },
    { path: '/category', element: Category, title: 'Categoria', tab: true, icon: Class, getLastRoute: false },
    { path: '/image', element: Image, title: 'Imagem', tab: true, icon: ImageIcon, getLastRoute: false },
    // { path: '/profile', element: Profile, title: 'Perfil', tab: true },
    // { path: '/timeline', element: Timeline , title: 'Timeline', tab: true },
    // { path: '/task', element: Task, title: 'Nova Tarefa', tab: true, extraCss: 'add-button' },
    // { path: '/settings', element: Settings, title: 'Configurações', tab: true },
    { path: '/login', element: Login, title: 'Login' },
    { path: '/register', element: Register, title: 'Registrar' },
    { path: '/recovery-password', element: RecoveryPassword, title: 'Recuperar Senha' },
    // { path: '/task/:id', element: Task, title: 'Editar Tarefa' },
    { path: '*', element: NotFound, title: 'Página não encontrada' },
  ];
  
  export default routes;