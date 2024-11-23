import * as S from './ResultFortune.style';

const ResultFortune = ({ data }) => {
  return (
    <div css={S.containerStyle}>
      {data.map((item) => (
        <div css={S.itemStyle} key={item.id}> 
          <div css={S.iconStyle}>
            <item.icon style={{ width: item.iconSize }} />
          </div>
          <h2 css={S.titleStyle}>{item.title}</h2>
          <p css={S.contentStyle}>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultFortune;
