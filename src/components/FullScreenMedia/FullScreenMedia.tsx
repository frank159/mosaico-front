import React from 'react';
import { MediaContainer, MediaWrapper, FullScreenVideo, FullScreenImage, FullScreenMediaProps} from './FullScreenMediaStyled';


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
    </MediaContainer>
  );
};

export default FullScreenMedia;
