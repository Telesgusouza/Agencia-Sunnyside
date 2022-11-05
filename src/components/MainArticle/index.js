import * as Styled from "./style";

export default function MainSection() {
  return (
    <Styled.Section>
      <Styled.inlineContent>
        <Styled.ImageIllustrationEgg></Styled.ImageIllustrationEgg>
        <Styled.ArticleContent>
          <div>
            <h1>Transform your brand</h1>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <Styled.LinkYellow href="*">LEARN MORE</Styled.LinkYellow>
          </div>
        </Styled.ArticleContent>
      </Styled.inlineContent>

      <Styled.inlineContent>
        <Styled.ImageIllustrationCup></Styled.ImageIllustrationCup>
        <Styled.ArticleContent>
          <div>
            <h1>Stand out to the right audience</h1>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <Styled.LinkRed href="*">LEARN MORE</Styled.LinkRed>
          </div>
        </Styled.ArticleContent>
      </Styled.inlineContent>

      <Styled.inlineContent>
        <Styled.ContentGraphicDesign>
          <Styled.ArticleContentDesign>
            <div>
              <h1>Graphic Design</h1>
              <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </Styled.ArticleContentDesign>
        </Styled.ContentGraphicDesign>

        <Styled.ContentPhotography>
          <Styled.ArticleContentDesign>
            <div>
              <h1>Photography</h1>
              <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </Styled.ArticleContentDesign>
        </Styled.ContentPhotography>
      </Styled.inlineContent>
      
    </Styled.Section>
  );
}
