import {Component} from 'react'

import {
  BgContainer,
  MemeGeneratorHeading1,
  MemeGeneratorHeading2,
  MemeContainer,
  TextEl,
  FormContainer,
  InputContainer,
  LabelEl,
  InputEl,
  SelectEl,
  OptionEl,
  GenerateBtn,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class memeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    renderImage: false,
  }

  submitForm = event => {
    event.preventDefault()
    this.setState({renderImage: true})
  }

  onChangeImgUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onchangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, renderImage} = this.state

    return (
      <BgContainer>
        <MemeGeneratorHeading1>Meme Generator</MemeGeneratorHeading1>
        {renderImage && (
          <MemeContainer data-testid="meme" img={imageUrl}>
            <TextEl textSize={`${fontSize}px`}>{topText}</TextEl>
            <TextEl textSize={`${fontSize}px`}>{bottomText}</TextEl>
          </MemeContainer>
        )}
        <FormContainer onSubmit={this.submitForm}>
          <MemeGeneratorHeading2>Meme Generator</MemeGeneratorHeading2>
          <InputContainer>
            <LabelEl htmlFor="imgUrl">Image URL</LabelEl>
            <InputEl
              type="text"
              id="imgUrl"
              value={imageUrl}
              onChange={this.onChangeImgUrl}
              placeholder="Enter the Image URL"
            />
          </InputContainer>
          <InputContainer>
            <LabelEl htmlFor="topTxt">Top Text</LabelEl>
            <InputEl
              type="text"
              id="topTxt"
              value={topText}
              onChange={this.onChangeTopText}
              placeholder="Enter the Top Text"
            />
          </InputContainer>
          <InputContainer>
            <LabelEl htmlFor="btmText">Bottom Text</LabelEl>
            <InputEl
              type="text"
              id="btmText"
              value={bottomText}
              onChange={this.onChangeBottomText}
              placeholder="Enter the Bottom Text"
            />
          </InputContainer>
          <InputContainer>
            <LabelEl htmlFor="font">Font Size</LabelEl>
            <SelectEl
              className="form-control"
              value={fontSize}
              onChange={this.onchangeFontSize}
              id="font"
            >
              {fontSizesOptionsList.map(each => (
                <OptionEl value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </OptionEl>
              ))}
            </SelectEl>
          </InputContainer>
          <GenerateBtn type="submit">Generate</GenerateBtn>
        </FormContainer>
      </BgContainer>
    )
  }
}

export default memeGenerator
