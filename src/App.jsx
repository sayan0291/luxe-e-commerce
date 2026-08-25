import { Routes,Route,Navigate } from 'react-router-dom';
import { Hero ,Collections, UnderConstruction, PageNotFound, Lookbook} from './pages';
import { MainLayouts } from './components/layouts/MainLayouts';

export default function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/cart" element={<UnderConstruction />} />
          <Route path="/user" element={<UnderConstruction />} />
          <Route path="/about" element={<UnderConstruction />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/sustainability" element={<UnderConstruction />} />
          <Route path="/new-arrivals" element={<UnderConstruction />} />
          <Route path="/best-sellers" element={<UnderConstruction />} />
          <Route path="/sale" element={<UnderConstruction />} />
          <Route path="/shipping" element={<UnderConstruction />} />
          <Route path="/policy" element={<UnderConstruction />} />
          <Route path="/terms" element={<UnderConstruction />} />
        </Route>
        <Route>
          <Route path="/not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Route>
      </Routes>
    </>
  )
}