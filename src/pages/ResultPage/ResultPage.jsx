import ResultFortune from '@/components/common/ResultFortune/ResultFortune';
import * as S from './ResultPage.style';
import Header from '@/components/common/Header/Header';
import { FortuneData } from '@/constants/fortuneData';

const ResultPage = () => {
  const fortuneData = FortuneData;

  return (
    <>
      <Header>이민규님의 운세 카드 대령이오 !</Header>
      <div css={S.cardContainer}>
        <ResultFortune data={fortuneData} />
      </div>
    </>
  );
};

export default ResultPage;
