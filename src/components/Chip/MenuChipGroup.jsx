import { useEffect, useState } from 'react';
import { customAxios } from '../../API/API.jsx';
import { API } from '../../config.jsx';
import Chip from './Component/Chip.jsx';
import styled from 'styled-components';

const MenuChipGroup = () => {
  // menuChipData를 받아오기 위한 state
  const [menuChipData, setMenuChipData] = useState([]);

  // 페이지 진입시 requestMenuChipList 함수를 실행시킴
  useEffect(() => {
    requestMenuChipList();
  }, []);

  // customAxios를 이용하여 MENU_CHIP이라는 json파일에 대한 데이터를 받아옴
  // 데이터를 성공적으로 받아오면 setMenuChipData를 통해 menuChipData의 상태를 업데이트
  // 에러발생시 경고창을 띄움
  const requestMenuChipList = async () => {
    const response = await customAxios //eslint-disable-line no-unused-vars
      .get(API.MENU_CHIP)
      .then(response => {
        setMenuChipData(response.data.result);
      })
      .catch(error => {
        if (error) {
          alert('에러 발생');
        }
      });
  };

  // 업데이트 된 menuChipData가 화면에 렌더링됨
  return (
    <ChipWrap>
      {menuChipData.map(({ id, name, content }) => (
        <Chip key={id} id={id} name={name} content={content} color="white" />
      ))}
    </ChipWrap>
  );
};

export default MenuChipGroup;

const ChipWrap = styled.div`
  display: flex;
`;
