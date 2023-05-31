import { useState } from 'react';
import DialogueMenu from '../dialogue/DialogueMenu';
import MainLayout from '../layouts/MainLayout';
import { getPage } from '../../utils/module';
import { useNavigate } from 'react-router-dom';

const Talk = ({ screens, isGrey, isDarkBg }: any) => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const currentPageInfo = getPage(screens, page);

  const goToNextPage = () => {
    if (currentPageInfo.forcedUrl) {
      navigate(currentPageInfo.forcedUrl);
      return;
    }
    setPage(currentPageInfo.nextPage);
  };

  const handleChoiceClick = (nextPage: number) => {
    setPage(nextPage);
    return;
  };

  return (
    <MainLayout isDarkBg={isDarkBg}>
      <img
        style={{
          position: 'fixed',
          left: '40px',
          bottom: '260px',
          width: '300px',
        }}
        src={require('../../images/character-images/caramel/Caramel-Neutral.png')}
      />
      {!isGrey ? (
        <img
          style={{
            position: 'fixed',
            right: '30px',
            bottom: '260px',
            width: '300px',
          }}
          src={require('../../images/character-images/picasso/Picasso-Neutral.png')}
        />
      ) : (
        <img
          style={{
            position: 'fixed',
            right: '30px',
            bottom: '260px',
            width: '300px',
          }}
          src={require('../../images/character-images/picasso/Picasso-Neutral-Gray.png')}
        />
      )}
      {currentPageInfo && (
        <DialogueMenu
          name={currentPageInfo.speaker}
          message={currentPageInfo.script}
          onclick={goToNextPage}
          choices={currentPageInfo.choices}
          handleChoiceClick={handleChoiceClick}
        ></DialogueMenu>
      )}
    </MainLayout>
  );
};

export default Talk;
