import styled from 'styled-components';
import GalleryItem from './GalleryItem';

const Gallery = styled.div`
  display: flex;
  border: 1px solid white;
  justify-content: space-evenly;
  padding: 30px;
`;

Gallery.Item = GalleryItem;

export default Gallery;
