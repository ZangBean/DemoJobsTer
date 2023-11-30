import styled from 'styled-components';

const Wrapper = styled.main`
    nav {
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }
    .page {
        min-height: calc(100vh - var(--nav-height));
        display: flex;
        align-items: center;
        margin-top: -3rem;
    }
    h1 {
        font-weight: 700;
        span {
            color: var(--primary-500);
        }
    }
    p {
        color: var(--grey-600);
    }
    .main-img {
        display: none;
    }
    @media (min-width: 992px) {// media để xác định các quy tắc CSS nên được áp dụng khi màn hình có độ rộng tối thiểu là 992px.
        .page {
            grid-template-columns:1fr 1fr;// có 2 cột trong lưới, mỗi cột sẽ chiếm một phần bằng nhau
            column-gap: 3rem;// khoảng cách giữa các cột trong lưới
        }
        .main-img {
            display: block;
        }
    }
`;

export default Wrapper;