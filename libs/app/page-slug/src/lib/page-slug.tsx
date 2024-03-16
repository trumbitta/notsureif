import { useEffect, useRef } from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import fitty from 'fitty';

import {
  accent,
  rootFontSizeAbsolute,
  text,
} from '@notsureif.me/shared/styling';
import { useHypeText } from '@notsureif.me/shared/utils';

export const PageSlug = () => {
  const theThingRef = useRef<HTMLParagraphElement>(null);

  const { slug } = useParams();
  const theThing = slug ? slug.split('-').join(' ') : '';
  const maxFontSizeAbsolute = 1000;

  const { hypeSentence, reaffirmingIntro } = useHypeText();

  useEffect(() => {
    if (theThingRef.current) {
      fitty('.fit', {
        minSize: rootFontSizeAbsolute,
        maxSize: maxFontSizeAbsolute,
      });
    }
  }, []);

  return (
    <Container>
      <div>
        <TextContainer>{hypeSentence}</TextContainer>
      </div>
      <div>
        <IntroContainer>{reaffirmingIntro}</IntroContainer>
      </div>
      <div>
        <MainTextContainer ref={theThingRef}>{theThing}</MainTextContainer>
      </div>
    </Container>
  );
};

const Container = styled.article`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-gap: 2vw;
  align-self: center;
  text-align: center;
`;

const TextContainer = styled.p`
  display: inline-block;
  white-space: nowrap;
  margin: 0 auto;
  padding: 0;
  color: ${accent};
  text-align: center;
`;

const IntroContainer = styled(TextContainer)`
  color: ${text};
`;

const MainTextContainer = styled(TextContainer).attrs({ className: 'fit' })`
  font-weight: 700;
  text-transform: uppercase;
`;
