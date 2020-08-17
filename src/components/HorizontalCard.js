import React from "react"
import styled from "styled-components"
import { Twemoji } from "react-emoji-render"

const StyledCard = styled.div`
<<<<<<< HEAD
  background: ${(props) => props.theme.colors.searchBackground};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.lightBorder};
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
`

const Emoji = styled(Twemoji)`
  & > img {
=======
  border-radius: 4px;
  display: flex;
`

const Emoji = styled(Twemoji)`
  margin: 0rem;
  & > img {
    width: 5em !important;
    height: 5em !important;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
>>>>>>> 1d83212d7988cf53713f6ffa3871454937f4b6de
    width: 3em !important;
    height: 3em !important;
  }
`

const Content = styled.div`
<<<<<<< HEAD
  margin-left: 1.3rem;
  margin-bottom: -1rem;
=======
  flex: 0 1 75%;
  margin-left: 2rem;
>>>>>>> 1d83212d7988cf53713f6ffa3871454937f4b6de
`

const Description = styled.p`
  opacity: 0.8;
  margin-top: -1rem;
`

const Title = styled.p`
  font-size: 20px;
`

const HorizontalCard = ({ emoji, title, description, children, className }) => {
  return (
    <StyledCard className={className}>
      <Emoji svg text={emoji} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {children}
      </Content>
    </StyledCard>
  )
}

export default HorizontalCard
