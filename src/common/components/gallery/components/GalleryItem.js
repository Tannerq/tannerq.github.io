import styled from 'styled-components';

const GalleryItem = styled.div`
  border: 1px solid white;
  transition: border,color .3s ease;
  padding: 10px;
  min-width: 180px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: ${props => `1px solid ${props.theme.yellow}`};
    color: ${props => props.theme.yellow};
  }
`;

export default GalleryItem;
