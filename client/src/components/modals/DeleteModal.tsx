import '@reach/dialog/styles.css'

import { DialogContent, DialogOverlay } from '@reach/dialog'
import { Close } from '@styled-icons/evaicons-solid'
import styled from 'styled-components'

import StyledButton, { ButtonProps } from '../buttons/button'

const CloseButton = styled(Close)`
  color: #575757;
  height: 36px;
  width: 36px;
  cursor: pointer;
`

const SubmitButton = styled(StyledButton)<ButtonProps>`
  float: right;
  font-size: 12px;
`

const StyledDialogContainer = styled.div`
  .close-button {
    float: right;
  }
  .element {
    text-align: center;
    padding-top: 60px;
  }
  .description {
    text-align: center;
    padding-top: 5px;
    padding-bottom: 60px;
    font-size: 16px;
  }
  .cancel {
    float: right;
    color: ${({ theme }) => theme.buttonBackground};
    margin: 12px;
    font-size: 12px;
    background: none;
    border-color: transparent;
    cursor: pointer;
  }
`

const StyledHeader = styled.h1`
  font-family: ${({ theme }) => theme.secondaryFonts};
  font-size: 24px;
  color: black;
  font-weight: 500;
`

const StyledDescription = styled.p`
  font-family: ${({ theme }) => theme.secondaryFonts};
  font-size: 14px;
`

function DeleteModal({
  showDialog,
  setShowDialog,
  deleteLifeline,
}: {
  showDialog: boolean
  setShowDialog: (boolean) => void
  deleteLifeline: () => void
}) {
  const close = () => setShowDialog(false)
  return (
    <div>
      <DialogOverlay isOpen={showDialog} onDismiss={close}>
        <DialogContent
          style={{
            border: 'solid 1px hsla(0, 0%, 0%, 0.5)',
            borderRadius: '10px',
            width: '325px',
            height: '255px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: '-200px',
            marginTop: '-200px',
          }}
        >
          <StyledDialogContainer>
            <CloseButton className="close-button" onClick={close}>
              <span aria-hidden>X</span>
            </CloseButton>

            <StyledHeader className="element">Delete Lifeline</StyledHeader>
            <StyledDescription className="description">
              Do you want to delete this lifeline?
            </StyledDescription>
            <SubmitButton
              buttonLabel={'Delete'}
              onClick={() => {
                deleteLifeline()
                setShowDialog(false)
              }}
            ></SubmitButton>
            <button className="cancel" onClick={() => setShowDialog(false)}>
              Cancel
            </button>
          </StyledDialogContainer>
        </DialogContent>
      </DialogOverlay>
    </div>
  )
}

export default DeleteModal
