import * as Styled from './style';
import arrowUp from '../../assets/images/icon-arrow-down.svg'; // icon-arrow-down.svg

export default function Main() {
    return (
        <Styled.Main>
            <h1>WE ARE CREATIVES</h1>
            <img src={arrowUp} />
        </Styled.Main>
    )
}