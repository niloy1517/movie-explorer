import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout/MainLayout'
import MovieListing from './pages/MovieListing'

const App = () => {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {index: true, element: <HomePage />},
        {path: '/movies', element: <MovieListing />}
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default App