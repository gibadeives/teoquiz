import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import FooterWrapper from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')
  console.log('Retorno do useState', name, setName)

  return (
    <QuizBackground backgroundImage={db.bg} >
      <Head>
        <title>TEOQUIZ - W A R</title>
      </Head>
      <QuizContainer>
      <QuizLogo />
        <Widget >
          <h1>#TEOQUIZ</h1>
          <Widget.Header>
            <Widget.Content>

              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault()
                router.push(`/quiz?name=${name}`)
                console.log('Fazendo uma submissão por meio do React')
                //router manda para a próxima página
              }} >

                <input onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value)
                  //state
                  setName(infosDoEvento.target.value)
                }} placeholder='Insira seu nome' />
                <button type="submit" disabled={name.length === 0}>Jogar - {name}</button>
              </form>

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
