import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5d0fe;
`

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  background-size: cover;
  padding: 20px 10px 30px 10px;
  border-style: none;
  border-radius: 10px;
  font-family: 'Roboto';
  width: 40%;
`

export const EditorHeading = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin: 35px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const InputElement = styled.input`
  height: 40px;
  border: solid 1px #cbd2d9;
  border-radius: 5px;
  color: #323f4b;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`

export const ParagraphElement = styled.p`
  font-size: 16px;
  color: #323f4b;
`

export const ButtonElement = styled.button`
  height: 40px;
  width: 80px;
  background-color: #d946ef;
  font-family: 'Roboto';
  text-align: center;
  color: #fff;
  padding: 10px;
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
`
