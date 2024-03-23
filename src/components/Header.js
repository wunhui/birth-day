import Icon from './Icon';
import { styled } from 'styled-components';
const Header = () => {
    return (
        <HeaderWrap className="header">
            <div className="header-container">
                <button>
                    <Icon icon="arrow" size="16" />
                </button>
                <CenterText>
                    <span>ys_been2</span>
                    <span>게시물</span>
                </CenterText>
            </div>
        </HeaderWrap>
    )
}

export default Header;

const HeaderWrap = styled.header`
    position: relative;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    button{ 
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        width: 16px;
        height: 16px;
    }
`
const CenterText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    span{
        font-size: 13px;
        color: rgba(255, 255, 255, .5);
        font-weight: 600;
        &:last-child{
            color: #fff;
            font-size: 14px;
        }
    }
`