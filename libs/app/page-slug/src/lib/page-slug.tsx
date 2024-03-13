import { useParams } from 'react-router-dom';

export const PageSlug = () => {
  const { slug } = useParams();
  const theThing = slug ? slug.split('-').join(' ') : '';

  return <p>Heck yeah you are {theThing}!</p>;
};
