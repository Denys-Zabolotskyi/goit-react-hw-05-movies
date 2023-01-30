import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
`;
export const GoBackLink = styled(NavLink)`
  display: flex;
  font-size: 12px;
  width: 80px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  text-transform: uppercase;
  font-weight: 700;
  color: black;
  border: black 1px solid;
  margin-bottom: 20px;
  :hover {
    color: red;
  }
`;
export const MovieInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PosterImage = styled.img`
  display: block;
  margin-right: 20px;
`;
export const MovieInfo = styled.div`
  flex-grow: 2;
  justify-content: flex;
`;
export const MainTitle = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const SecondTitle = styled.h3`
  font-size: 30px;
`;
export const TitleInfoText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;
//additional information
export const AdditionalInfo = styled.div``;

export const AdditionalInfoLink = styled(NavLink)`
  color: black;
  font-size: 26px;

  &:hover,
  &:focus {
    color: red;
    font-weight: 700;
  }
`;
