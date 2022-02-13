import styled from "styled-components";

export const HeaderWrap = styled.header`
  background: url("/images/header-bg.png");
  width: 100%;
  height: 100vh;
  background-size: cover;
  padding: 35px 0 70px;
  color: #fff;
  ${(props) => props.theme.screens.lg} {
    height: 500px;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.mg(24)};
  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45%;
    font-size: 25px;
    > svg {
      cursor: pointer;
    }
    .user {
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        display: none;
        margin-left: ${(props) => props.theme.mg(2)};
        font-size: ${(props) => props.theme.fz(1) + "px"};
      }
    }
  }
  ${(props) => props.theme.screens.lg} {
    .icons {
      width: 25%;
      .user {
        span {
          display: block;
        }
      }
    }
  }
  ${(props) => props.theme.screens.xl} {
    .icons {
      width: 20%;
    }
  }
  ${(props) => props.theme.screens.twoXl} {
    .icons {
      width: 15%;
    }
  }
`;

export const Cart = styled.div`
  font-size: ${(props) => props.theme.fz(1) + "px"};
  cursor: pointer;
`;
export const MainTitle = styled.div`
  font-size: ${(props) => props.theme.fz(9) + "px"};
  text-align: center;
  margin-bottom: ${(props) => props.theme.mg(6)};
  span {
    font-weight: 700;
  }
`;
export const SecondTitle = styled.div`
  font-size: ${(props) => props.theme.fz(2) + "px"};
  line-height: ${(props) => props.theme.lh(props.theme.fz(2)) + "px"};
  text-align: center;
  margin-bottom: ${(props) => props.theme.mg(10)};
`;

export const Search = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  color: #000;
  svg {
    color: #757575;
  }
  h4,
  input,
  button {
    width: 50%;
    padding: ${(props) => props.theme.pd(2)};
  }
  h4 {
    display: flex;
    align-items: center;
    span {
      margin-left: ${(props) => props.theme.mg(1)};
    }
  }
  h4:nth-child(2) {
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background-color: #ccc;
    }
  }
  input {
    flex: 1;
    &:focus {
      outline: 1px solid #ccc;
    }
  }
  button {
    width: 30%;
    color: #fff;
    background-color: #d23f57;
    border: none;
    font-size: ${(props) => props.theme.fz(1) + "px"};
    cursor: pointer;
  }
  ${(props) => props.theme.screens.lg} {
    width: 90%;
    margin: 0 auto;
    h4 {
      width: 15%;
    }
    input {
      flex: 1;
      border: 1px solid #ccc;
      padding: ${(props) => props.theme.pd(3)} ${(props) => props.theme.pd(2)};
      &:focus {
        outline: none;
      }
    }
    button {
      width: 15%;
    }
  }
  ${(props) => props.theme.screens.xl} {
    width: 55%;
    margin: 0 auto;
    h4 {
      width: 20%;
    }
    input {
      flex: 1;
      border: 1px solid #ccc;
      &:focus {
        outline: none;
      }
    }
    button {
      width: 15%;
    }
  }
  ${(props) => props.theme.screens.twoXl} {
    width: 40%;
    margin: 0 auto;
  }
`;