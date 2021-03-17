import styled from "styled-components";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import AttachmentIcon from "@material-ui/icons/Attachment";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function EmailTools() {
  return (
    <ToolsWrapper>
      <SendButtonWrapper>
        <SendButton>Send</SendButton>
        <SendOptions>^</SendOptions>
      </SendButtonWrapper>

      <FormatColorTextIcon />
      <InsertLinkIcon />
      <AttachmentIcon />
      <InsertEmoticonIcon />
      <InsertPhotoIcon />

      <DeleteIcon />
      <MoreVertIcon />
    </ToolsWrapper>
  );
}

export default EmailTools;

const ToolsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0;
  padding: 0.5rem;

  svg {
    border-radius: 5px;
    padding: 0.25rem;
    :hover {
      background-color: lightgray;
      cursor: pointer;
    }
  }
`;

const SendButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  div {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: blue;
    color: white;

    :hover {
      cursor: pointer;
      filter: brightness(2);
    }
  }
`;

const SendButton = styled.div`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const SendOptions = styled.div`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid black;
`;
