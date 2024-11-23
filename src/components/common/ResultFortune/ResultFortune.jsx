import * as S from './ResultFortune.style';

const ResultFortune = ({ data }) => {
  return (
    <div css={S.containerStyle}>
      {data.map((item) => (
        <div css={S.itemStyle} key={item.id}> 
          <item.icon style={{ width: item.iconSize }} />
          <h2 css={S.titleStyle}>{item.title}</h2>
          <p css={S.contentStyle}>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultFortune;
