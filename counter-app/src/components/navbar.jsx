//stateless functional component
const Navbar = (props) => {
  return (
    <nav className="navnar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
//Lifecycle Hookes
//1: Mount
//        constructor,render,componebtDidMount
//2: Update
//         render, componentDidUpdate
//3: Unmount
//         componebtWillUnmount
