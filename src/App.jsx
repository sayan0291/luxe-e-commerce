import { Routes,Route,Navigate } from 'react-router-dom';
import { Hero ,Collections, UnderConstruction, PageNotFound} from './pages';
import { MainLayouts } from './components/layouts/MainLayouts';

export default function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collection" element={<UnderConstruction />} />
        </Route>
        <Route>
          <Route path="/not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Route>
      </Routes>
    </>
  )
}