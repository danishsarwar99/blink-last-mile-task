import NavBar from './navbar';
import Footer from './footer';
export default function layout(props) {
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
