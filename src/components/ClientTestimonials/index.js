import * as Styled from "./style";
import avatarEmily from "../../assets/images/image-emily.jpg";
import avatarThomas from "../../assets/images/image-thomas.jpg";
import avatarJennie from "../../assets/images/image-jennie.jpg";

export default function ClientTestimonials() {
  return (
    <Styled.Container>
      <Styled.ContainerSectionClients>
        <h3>CLIENT TESTIMONIALS</h3>
        <Styled.ContainerUser>

          <Styled.User>
            <img src={avatarEmily} />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
              
            </p>
            <strong>Emily R.</strong>
            <span>Marketing Director</span>
          </Styled.User>

          <Styled.User>
            <img src={avatarThomas} />
            <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
            </p>
            <strong>Thomas S.</strong>
            <span>Chief Operating Officer</span>
          </Styled.User>

          <Styled.User>
            <img src={avatarJennie} />
            <p>
            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            </p>
            <strong>Jennie F.</strong>
            <span>Business Owner</span>
          </Styled.User>
          
        </Styled.ContainerUser>
      </Styled.ContainerSectionClients>
    </Styled.Container>
  );
}
