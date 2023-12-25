import PaymentMethodList from './PaymentMethodList';
import styled from 'styled-components';
import PAYMENT_METHOD_LIST_DATA from '../../../data/PaymentMethodListData';

const PaymentMethodListGroup = ({ onChange, checked }) => {
  return (
    <RadioGroupArea>
      {PAYMENT_METHOD_LIST_DATA.map(({ id, name, value, text, src }) => {
        return (
          <PaymentMethodList
            key={id}
            id={id}
            name={name}
            value={value}
            text={text}
            src={src}
            alt={text}
            onChange={onChange}
            checked={checked}
          />
        );
      })}
    </RadioGroupArea>
  );
};

const RadioGroupArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

export default PaymentMethodListGroup;
