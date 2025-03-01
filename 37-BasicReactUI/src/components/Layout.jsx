import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <main>
        <Outlet /> {/* This will be replaced with Home or About */}
      </main>

      <footer>
        <p>© 2025 My Website</p>
      </footer>
    </>
  );
}

export default Layout;

