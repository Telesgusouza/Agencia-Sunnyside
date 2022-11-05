import * as Styled from "./style";
import milkbottles from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import orange from '../../assets/images/desktop/image-gallery-orange.jpg';
import cone from '../../assets/images/desktop/image-gallery-cone.jpg';
import sugarcubes from '../../assets/images/desktop/image-gallery-sugarcubes.jpg';

export default function ImagensSection() {
  return (
    <Styled.Container>
      <img src={milkbottles} />
      <img src={orange} />
      <img src={cone} />
      <img src={sugarcubes} />
    </Styled.Container>
  );
}
