import { useParams } from 'react-router-dom';
import { AutoTextSize } from 'auto-text-size';
import styled from 'styled-components';

import { rootFontSizeAbsolute } from '@notsureif.me/shared/styling';

export const PageSlug = () => {
  const { slug } = useParams();
  const theThing = slug ? slug.split('-').join(' ') : '';

  const maxFontSizeAbsolute = 1000;

  return (
    <Container>
      <TextContainer>
        <AutoTextSize
          as="span"
          maxFontSizePx={maxFontSizeAbsolute}
          minFontSizePx={rootFontSizeAbsolute}
        >
          Heck yeah!
        </AutoTextSize>
      </TextContainer>
      <IntroContainer>
        <AutoTextSize
          as="span"
          maxFontSizePx={maxFontSizeAbsolute}
          minFontSizePx={rootFontSizeAbsolute}
        >
          You sure are
        </AutoTextSize>
      </IntroContainer>
      <TextContainer>
        <AutoTextSize
          as="span"
          maxFontSizePx={maxFontSizeAbsolute}
          minFontSizePx={rootFontSizeAbsolute}
        >
          {theThing}!
        </AutoTextSize>
      </TextContainer>
    </Container>
  );
};

const Container = styled.article`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-gap: 2vw;
  align-self: center;
  max-width: 100%;
`;

const TextContainer = styled.p`
  color: red;
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

const IntroContainer = styled(TextContainer)`
  width: 50%;
  margin-inline: auto;
`;
