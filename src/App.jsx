import "./styles/index.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { MenuProvider } from "./components/MenuContext";
import SearchPage from "./pages/SearchPage";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <HashRouter>
        <MenuProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="SearchPage" element={<SearchPage />} />
              <Route path="About" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </MenuProvider>
      </HashRouter>
    </>
  );
}
export default App;
