import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: auto;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
`;
export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  border-radius: 50%;
  background-color: lightcyan;
`;
export const Name = styled.p`
  font-size: 25px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  margin-bottom: 20px;
`;
export const Tag = styled.p`
  font-size: 15px;
  font-weight: 500;
  opacity: 0.5;
  margin-bottom: 15px;
`;
export const Location = styled.p`
  font-size: 15px;
  font-weight: 500;
  opacity: 0.5;
`;
export const StatsBlock = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  justify-content: space-between;
  align-items: center;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  gap: 10px;
  padding: 20px 5px;
  align-items: center;
  justify-content: center;
  background-color: lightcyan;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  &:nth-child(2) {
    border-left: 2px solid rgba(0, 0, 0, 0.1);
    border-right: 2px solid rgba(0, 0, 0, 0.1);
  }
`;
export const Label = styled.p`
  font-size: 13px;
  font-weight: 500;
  opacity: 0.5;
`;
export const Quantity = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  font-weight: bold;
`;
