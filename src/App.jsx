import AppRoutes from "./routes/AppRoutes";
import { AppContainer } from "./styles";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  );
}
