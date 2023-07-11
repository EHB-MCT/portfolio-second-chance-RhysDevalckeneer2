import { Routes, Route } from "react-router-dom";
import {DetailsPage, HomePage, NotFoundPage} from "./pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="movie/:id" element={<DetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
