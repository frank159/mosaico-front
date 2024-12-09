import "keen-slider/keen-slider.min.css";

import {
  Container,
  CardContainer,
  FlexContainer1,
  FlexContainer2,
  FlexContainerINTER1,
  LeftContent,
  Title,
  Text,
  TopicsContainer,
  Topics,
  TitleSmall,
  RightContent,
  ImageFrame,
  Image,
  LongTextContainer
} from "./CardComponentStyled"

const mediaSrc = require('../../assets/images/products/boat2.jpg');


const CardComponent = () => {

  return (
    <Container>
      <CardContainer>
        <FlexContainer1>
          <FlexContainerINTER1>
            <LeftContent>
              <Title>
                Long heading is what you see here in this feature section
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </Text>
              <TopicsContainer>
                <Topics>
                  <TitleSmall>
                    Subheading one
                  </TitleSmall>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </Text>
                </Topics>
                <Topics>
                  <TitleSmall>
                    Subheading two
                  </TitleSmall>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </Text>
                </Topics>
              </TopicsContainer>
          </LeftContent>
          </FlexContainerINTER1>
          <FlexContainerINTER1>
          <RightContent>
            <ImageFrame>
              <Image src={mediaSrc} alt="Full screen media" />
            </ImageFrame>
          </RightContent>
          </FlexContainerINTER1>
        </FlexContainer1>
        <FlexContainer2>
          <LongTextContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Quisque vehicula, nunc ac pellentesque interdum, eros felis faucibus neque, sed pulvinar lacus ipsum a mi. Ut bibendum ultrices malesuada. Sed id facilisis libero, non fringilla risus. Praesent a urna id sem tristique malesuada. Integer at enim ut tortor dictum tincidunt ac eget nunc. Nam sit amet ex eu eros pellentesque viverra. Sed vel semper nisi. Fusce a lacus vel purus faucibus laoreet ut sit amet orci. Integer vitae nisl vel sapien tristique malesuada. Etiam efficitur viverra ante a fermentum. Vestibulum ac odio non urna ultrices suscipit nec vel velit. Sed id ligula vel ipsum egestas dapibus sit amet quis ligula. Pellentesque tempor sollicitudin lorem, et vulputate lorem convallis vel. Nam venenatis, arcu at vestibulum tempor, mi felis convallis ex, at dignissim ligula justo sed ex. Cras auctor molestie ipsum sed laoreet. Phasellus quis arcu ut turpis viverra ultrices eget at turpis. Sed eget nisi vitae lorem sodales tincidunt. Aliquam dapibus, quam vel sodales mollis, augue nisi fermentum nisi, nec suscipit libero lacus ac mi. Donec faucibus nisl vel nunc pretium, in vulputa.
          </LongTextContainer>
        </FlexContainer2>
      </CardContainer>
    </Container>
  );
};

export default CardComponent;
