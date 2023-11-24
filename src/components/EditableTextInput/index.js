import {Component} from 'react'

import {
  AppContainer,
  EditorContainer,
  EditorHeading,
  InputContainer,
  InputElement,
  ParagraphElement,
  ButtonElement,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    showInput: true,
    showSaveBtn: true,
    inputValue: '',
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  buttonClicked = () => {
    this.setState(prev => ({
      showInput: !prev.showInput,
      showSaveBtn: !prev.showSaveBtn,
    }))
  }

  renderInputOrP = () => {
    const {showInput, showSaveBtn, inputValue} = this.state

    return (
      <>
        {showInput ? (
          <InputElement value={inputValue} onChange={this.onChangeInput} />
        ) : (
          <ParagraphElement>{inputValue}</ParagraphElement>
        )}
        <ButtonElement onClick={this.buttonClicked}>
          {showSaveBtn ? 'Save' : 'Edit'}
        </ButtonElement>
      </>
    )
  }

  render() {
    return (
      <AppContainer>
        <EditorContainer>
          <EditorHeading>Editable Text Input</EditorHeading>
          <InputContainer>{this.renderInputOrP()}</InputContainer>
        </EditorContainer>
      </AppContainer>
    )
  }
}

export default EditableTextInput
