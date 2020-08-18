import React from "react"
import styled from "styled-components"

import Icon from "./Icon"

const StyledTag = styled.div`
  padding: 4px 8px;
  background: radial-gradient(
    46.28% 66.31% at 66.95% 58.35%,
    rgba(127, 127, 213, 0.2) 0%,
    rgba(134, 168, 231, 0.2) 50%,
    rgba(145, 234, 228, 0.2) 100%
  );
  border-radius: 4px;
  margin-right: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  svg {
    fill: ${(props) => props.theme.colors.text};
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    svg {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`

const Tag = ({ name, onSelect, value }) => {
  const handleSelect = () => {
    onSelect(value)
  }

  return (
    <StyledTag onClick={handleSelect}>
      {name} <Icon name="close" size="16" />
    </StyledTag>
  )
}

export default Tag