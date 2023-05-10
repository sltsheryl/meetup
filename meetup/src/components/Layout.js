import Navbar from "./Navbar";
function Layout(props) {
    return (
      <div>
        <Navbar />
        <div> {props.children}</div>
      </div>
    );
}
export default Layout;
