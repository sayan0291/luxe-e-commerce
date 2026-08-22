import { Routes,Route,Navigate } from 'react-router-dom';
import { Hero ,Collections, UnderConstruction} from './pages';
import { MainLayouts } from './components/layouts/MainLayouts';

export default function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="*" element={<Navigate to="/under-construction" replace />} />
        </Route>
      </Routes>
    </>
  )
}