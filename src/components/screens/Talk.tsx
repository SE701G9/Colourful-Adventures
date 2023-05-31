import { useState } from 'react';
import DialogueMenu from '../dialogue/DialogueMenu';
import MainLayout from '../layouts/MainLayout';
import { getPage } from '../../utils/module';
import { useNavigate } from 'react-router-dom';

const Talk = ({ screens }: any) => {
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
    <MainLayout>
      <img
        style={{
          position: 'fixed',
          right: 0,
          bottom: '20px',
          height: '1000px',
        }}
        src={require('../../images/avatar.png')}
      />
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
