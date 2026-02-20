import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import CentralPage from "./pages/CentralPage";
import SquadPage from "./pages/SquadPage";
import OnlinePage from "./pages/OnlinePage";
import OfficePage from "./pages/OfficePage";
import SeasonPage from "./pages/SeasonPage";

const App = () => {
  return (
    <div className="relative text-zinc-100 bg-[url(/bg_main.jpg)] bg-cover bg-top min-h-screen w-full mx-auto py-14 px-6">
      <div className="absolute inset-0 bg-zinc-900/20" />

      <div className="text-zinc-100 container bg-zinc-950/50 backdrop-blur-xs min-h-[80vh] w-full mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <CentralPage />
              </Layout>
            }
          />

           <Route
            path="/squad"
            element={
              <Layout>
                <SquadPage />
              </Layout>
            }
          />

          <Route
            path="/online"
            element={
              <Layout>
                <OnlinePage/>
              </Layout>
            }
          />

          <Route
            path="/office"
            element={
              <Layout>
                <OfficePage />
              </Layout>
            }
          />

          <Route
            path="/season"
            element={
              <Layout>
                <SeasonPage />
              </Layout>
            }
          />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
