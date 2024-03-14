import { Link, Outlet, Route, Routes } from 'react-router-dom';

import { PageSlug } from '@notsureif.me/page-slug';
import styled from 'styled-components';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main>
            <Outlet />
          </Main>
        }
      >
        <Route
          index
          element={
            <article>
              <h1>Home!</h1>
              <p>Explain what's this, why this, link a couple examples.</p>
            </article>
          }
        />

        <Route path=":slug" element={<PageSlug />} />

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

const Main = styled.main`
  display: grid;
  height: 100%;
`;
