import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Home</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to='/'>Home</Link>
      </nav>
    </div>
  );
}