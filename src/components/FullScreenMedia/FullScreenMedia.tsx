import React from 'react';
import { MediaContainer, MediaWrapper, FullScreenVideo, FullScreenImage, FullScreenMediaProps} from './FullScreenMediaStyled';
import TitlePage from '../TitlePage/TitlePage';


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
      <TitlePage titleText="Mosaico" text="Mosaico" titleColor="#ffffff" textColor="#ffffff" backgroundColor="#000000"/>
    </MediaContainer>
  );
};

export default FullScreenMedia;
