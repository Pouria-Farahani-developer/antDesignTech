import "./App.css";
import { Layout } from "antd";
import AppHeader from "./component/common/header";
import AppHome from "./views/home";
import AppFooter from "./component/common/Footer";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
