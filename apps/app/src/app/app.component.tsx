import { Link, Outlet, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <header>
              <h1>Imma layout</h1>
            </header>
            <main>
              <Outlet />
            </main>
          </>
        }
      >
        <Route
          index
          element={
            <article>
              <h1>Home!</h1>
            </article>
          }
        />

        <Route
          path="*"
          element={
            <div>
              <h2>Nothing to see here!</h2>
              <p>
                <Link to="/">Go to the home page</Link>
              </p>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};
