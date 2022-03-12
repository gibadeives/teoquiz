import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import FooterWrapper from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg} >
      <QuizContainer>
        <Widget>
          <h1>Titulo</h1>
          <Widget.Header>
            <Widget.Content>
              <p>Bla, bla, bla bla bla</p>
            </Widget.Content>
          </Widget.Header>
        </Widget>
        
        <Widget>
          <h1>Titulo 2</h1>
          <Widget.Header>
            <Widget.Content>
              <p>Bla, bla, bla bla bla</p>
            </Widget.Content>
          </Widget.Header>
        </Widget>

        
        <FooterWrapper />
      </QuizContainer>
      <GitHubCorner projectUrl={"https://github.com/gibadeives"} />
    </QuizBackground>

  )

}
