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
        <Widget >
          <h1>#TEOQUIZ</h1>
          <Widget.Header>
            <Widget.Content>
              <p>Clique aqui para jogar</p>
            </Widget.Content>
          </Widget.Header>
        </Widget>
        <Widget>
          <h1>Quiz da Comunidade</h1>
          <Widget.Header>
            <Widget.Content>
              <div>
                <a href={db.external} >omariosouto</a>
              </div>
              <div>
                <a href={db.external} >devsoutinho.omariosouto</a>
              </div>
            </Widget.Content>
          </Widget.Header>
        </Widget>


        <FooterWrapper />
      </QuizContainer>
      <GitHubCorner projectUrl={"https://github.com/gibadeives"} />
    </QuizBackground>


  )

}
