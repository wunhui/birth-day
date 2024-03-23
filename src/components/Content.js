import { styled } from 'styled-components';
import Icon from './Icon';
import { useState } from 'react';
const Content = () => {
    const [heartOn, setHeartOn] = useState(0)
   return (
        <ContentWrap>
            <ContentTop>
                <div>
                    <div className="img-wrap">
                        <img src="https://wunhui.github.io/birth-day/images/profile.jpg" />
                    </div>
                    <p>ys_been2</p>
                </div>
            </ContentTop>
            <ContentMain>
                <img src="https://wunhui.github.io/birth-day/images/main.jpg" />
            </ContentMain>
            <Contentbottom>
                <div className='icon-list'>
                    <div className='left'>
                        <button onClick={() => {setHeartOn(heartOn === 0 ? 1 : 0)}}>
                            <Icon size="24" icon={heartOn === 0 ? "heart_full" : "heart"} />
                        </button>
                        <button>
                            <Icon size="24" icon="chat" />
                        </button>
                        <button>
                            <Icon size="24" icon="send" />
                        </button>
                    </div>
                    <div className='right'>
                        <button>
                            <Icon size="24" icon="bookmark" />
                        </button>   
                    </div>
                </div>
                <div className='text-box'>
                    <div className='like-text-box'>
                        <p><strong>whx_hee</strong></p>
                        <p>님 외 <strong>여러 명</strong>이 좋아합니다</p>
                    </div>
                    <div className='desc-box'>
                        <div>
                            <p><strong>ys_been2</strong></p>
                            <p>생일파티에 초대합니다.</p>    
                        </div>
                        <div className='hash-box'>
                            <span className='tag'>#생일</span>
                            <span className='tag'>#마굿간</span>
                            <span className='tag'>#3월30일</span>
                            <span className='tag'>#22:00</span>
                            <span className='tag'>#Start</span>
                            <span className='tag'>#회비</span>
                            <span className='tag'>#30000</span>
                            <span className='tag'>#샴페인파티</span>
                            <span className='tag'>#드레스코드</span>
                            <span className='tag'>#검은색</span>
                            <span className='tag'>#흰색</span>
                            <span className='tag'>#반팔티</span>
                        </div>
                    </div>
                    <div className='comment-wrap'>
                        <p>댓글 30개 모두 보기</p>
                        <ul className='comment-list'>
                            <li><strong>whx_hee</strong><span>생일 축하해~!!</span></li>
                        </ul>
                    </div>
                    <div className='date-box'>
                        <p>3월30일</p>
                    </div>
                </div>
            </Contentbottom>
        </ContentWrap>
    )
}

export default Content;

const ContentWrap = styled.div`
    padding-bottom: 20px;
`
const ContentTop = styled.div`
    padding: 8px 12px;
    & > div{
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .img-wrap{
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`
const ContentMain = styled.div`
position: relative;
width: 100%;
height: 0;
overflow: hidden;
padding-top: 130%;
img{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Contentbottom = styled.div`
    .icon-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        button {
            display: inline-block;
            width: 24px;
            height: 24px;
        }
        .left{
            display: flex;
            align-items: center;
            gap: 12px;
        }
    }
    .text-box{
        padding: 0 12px;
        .like-text-box{
            display: flex;
            align-items: center;
            margin-bottom: 4px;
            p {
                font-size: 14px;
                strong {font-weight: 600;}
            }
        }
        .desc-box{
            div:first-child {
                display: flex;
                margin-bottom: 4px;
            }
            p {
                font-size: 14px;
                strong{
                    font-weight: 600;
                }
                &:first-child {
                    margin-right: 4px;
                }
            }
            .hash-box{
                display: block;
                margin-bottom: 4px;
                .tag{
                    font-size: 14px;
                    line-height: 1.2;
                }
            }
        }
        .comment-wrap{
            p{
                font-size: 14px;
                color: rgba(255,255,255, 0.5);
                margin: 8px 0;
            }
            .comment-list{
                li {
                    font-size: 14px;
                    strong{
                        font-weight: 600;
                        margin-right: 4px;s
                    }
                }
            }
        }
        .date-box{
            margin-top: 8px;
            p{
                font-size: 12px;
                color: rgba(255,255,255, 0.5);
            }
        }
        
    }
`