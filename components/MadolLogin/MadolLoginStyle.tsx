import styled from "styled-components";

export const Login = styled.div`
  .title {
    font-size: ${(props) => props.theme.fz(2) + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz(2)) + "px"};
    font-weight: 700;
  }
  .content {
    font-size: ${(props) => props.theme.fz() + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
    font-weight: 700;
    margin-bottom: ${(props) => props.theme.mg(8)};
  }
  .on {
    position: relative;
    /* 偽元素製作左右兩條橫線 */
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 12%;
      width: 30%;
      height: 1px;
      background-color: #aaa;
    }
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      right: 12%;
      width: 30%;
      height: 1px;
      background-color: #aaa;
    }
    margin-bottom: ${(props) => props.theme.mg(4)};
  }
`;
export const LoginMail = styled.div`
  text-align: left;
  /* inline-block 才能用mb */
  label {
    display: inline-block;
    margin-bottom: ${(props) => props.theme.mg(1)};
    font-size: ${(props) => props.theme.fz() + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
  }
  margin-bottom: ${(props) => props.theme.mg(4)};
  input {
    width: 100%;
    height: 40px;
    padding-left: ${(props) => props.theme.pd()};
    border: 1px solid #aaa;
    border-radius: 3px;
  }
`;
export const LoginPassword = styled(LoginMail)``;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.pd(2)} 0;
  background-color: #d23f57;
  border: none;
  border-radius: 3px;
  color: #fff;
  margin-bottom: ${(props) => props.theme.mg(3)};
`;
export const FbButton = styled(LoginButton)`
  background-color: #3f51b5;
  span {
    margin-left: ${(props) => props.theme.mg(1)};
  }
`;
export const GoogleButton = styled(LoginButton)`
  background-color: #1976d2;
  span {
    margin-left: ${(props) => props.theme.mg(1)};
  }
`;
export const SignUp = styled.p`
  font-size: ${(props) => props.theme.fz() + "px"};
  span {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const ResetPassword = styled.p`
  position: absolute;
  width: 100%;
  bottom: 0;
  background: #f6f9fc;
  margin: 0 ${(props) => props.theme.mg(-3)};
  padding: ${(props) => props.theme.pd(3)} 0;
  color: #999;
  a {
    text-decoration: underline;
    margin-left: ${(props) => props.theme.mg(3)};
  }
`;
