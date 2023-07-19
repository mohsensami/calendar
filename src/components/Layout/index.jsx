import Wrapper from "../../hoc/Wrapper";
import Header from "../Header";

const Layout = (props) => {
  return (
    <Wrapper>
      <Header />
      <main className="container mx-auto content">
        <div className="">{props.children}</div>
      </main>
    </Wrapper>
  );
};

export default Layout;
