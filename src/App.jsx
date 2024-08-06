import Header from "./components/Header";
import HeaderContainer from "./containers/HeaderContainer";
import PageContainer from "./containers/PageContainer";

function App() {
  return (
    <div>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <PageContainer>{/* Dolduurulucak */}</PageContainer>
    </div>
  );
}

export default App;
