import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

export function SucessfulyPaid() {
  return (
    <>
      <SucessWraper>
        <StyledConfirm variant="h6" color='#454545' weight='700' >Pagamento confirmado</StyledConfirm>
        <StyledConfirm variant="h6" color='#8E8E8E' weight='500' >Prossiga para a escolha de hospedagem e atividades</StyledConfirm>
      </SucessWraper>
    </>
  );
}

const SucessWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 14px;`;

const StyledConfirm = styled.p`
  font-weight: ${props => props.weight};
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.color};
`;
