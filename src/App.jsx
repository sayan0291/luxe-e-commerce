import { Routes,Route } from 'react-router-dom';
import { Hero } from './pages';
import { MainLayouts } from './components/layouts/MainLayouts';

export default function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Hero />} />
        </Route>
      </Routes>
    </>
  )
}