import React from 'react';
import { MediaContainer, MediaWrapper, FullScreenVideo, FullScreenImage, FullScreenMediaProps, TitleContainer, Title, Text} from './FullScreenMediaStyled';


const FullScreenMedia: React.FC<FullScreenMediaProps> = ({ mediaSrc, isVideo = false }) => {
  return (
    <MediaContainer>
      <MediaWrapper>
        {isVideo ? (
          <FullScreenVideo loop autoPlay muted>
            <source src={mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </FullScreenVideo>
        ) : (
          <FullScreenImage src={mediaSrc} alt="Full screen media" />
        )}
      </MediaWrapper>
      <TitleContainer>
        <Title>
          Mosaico
        </Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Nam sit amet ex eu eros pellentesque viverra. Sed vel semper nisi. Fusce a lacus vel purus faucibus laoreet ut sit amet orci. Integer vitae nisl vel sapien tristique malesuada. Etiam efficitur viverra ante a fermentum. Vestibulum ac odio non urna ultrices suscipit nec vel velit.
        </Text>
      </TitleContainer>
    </MediaContainer>
  );
};

export default FullScreenMedia;
