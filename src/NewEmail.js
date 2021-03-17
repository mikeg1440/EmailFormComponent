import "./styles.css";
import styled from "styled-components";
import EmailToolbar from "./EmailToolbar";
import MinimizeIcon from "@material-ui/icons/Minimize";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import CloseIcon from "@material-ui/icons/Close";

export default function NewEmail() {
  return (
    <AppWrapper>
      <Header>
        <b>New EMail</b>

        <div>
          <MinimizeIcon />
          <AspectRatioIcon />
          <CloseIcon />
        </div>
      </Header>

      <EmailBody>
        <EmailInputWrapper>
          To:
          <input type="text" placeholder="Recipient" />
          <span>Cc Bcc</span>
        </EmailInputWrapper>

        <EmailInputWrapper>
          <input type="text" placeholder="Subject" />
        </EmailInputWrapper>

        <EmailMessage className="email-body" contentEditable="true">
          Email Message
        </EmailMessage>

        <EmailToolbar />
      </EmailBody>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background: white;
  width: 510px;
  height: 515px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 0px;
  right: 0px;
`;

const Header = styled.header`
  background: darkgray;
  color: white;
  padding: 0.5rem;
  height: 20px;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  flex: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    svg {
      padding: 0.25rem;
      border-radius: 5px;
      :hover {
        background-color: lightgray;
      }
    }
  }
`;

const EmailBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 0.5rem;
  flex: 1;
`;

const EmailInputWrapper = styled.div`
  border-radius: 5px;
  background: white;
  padding: 0.25rem;
  border-bottom: 1px solid lightgray;
  height: 100%;

  display: flex;
  align-items: center;
  flex: 0;

  input[type="text"] {
    width: 100%;
    box-sizing: border-box;
    border: none;
    :focus {
      outline: none;
    }
  }
`;

const EmailMessage = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  flex: 1;
`;
