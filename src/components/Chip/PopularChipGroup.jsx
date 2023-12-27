import { useEffect, useState } from 'react';
import { customAxios } from '../../API/API.jsx';
import { API } from '../../config.jsx';
import Chip from './Component/Chip.jsx';
import styled from 'styled-components';

const PopularChipGroup = () => {
  // popularChipData를 받아오기 위한 state
  const [popularChipData, setPopularChipData] = useState([]);

  // 페이지 진입시 requestPopularChipList 함수를 실행시킴
  useEffect(() => {
    requestPopularChipList();
  }, []);

  // customAxios를 이용하여 POPULAR_CHIP이라는 json파일에 대한 데이터를 받아옴
  // 데이터를 성공적으로 받아오면 setPopularChipData를 통해 menuChipData의 상태를 업데이트
  // 에러발생시 경고창을 띄움
  const requestPopularChipList = async () => {
    try {
      const request = await customAxios.get(API.POPULAR_CHIP);
      setPopularChipData(request.data.result);
    } catch (error) {
      alert('에러 발생');
    }
  };

  // 업데이트 된 popularChipData가 화면에 렌더링됨
  return (
    <ChipWrap>
      {popularChipData.map(({ id, name, content, defaultChecked }) => (
        <Chip
          key={id}
          id={id}
          name={name}
          content={content}
          defaultChecked={defaultChecked}
          color="beige"
        />
      ))}
    </ChipWrap>
  );
};

export default PopularChipGroup;

const ChipWrap = styled.div`
  display: flex;
  margin-bottom: 28px;
`;
