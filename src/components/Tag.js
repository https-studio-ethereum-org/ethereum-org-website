import React from "react"
import styled from "styled-components"

import Icon from "./Icon"

const StyledTag = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  background: radial-gradient(
    46.28% 66.31% at 66.95% 58.35%,
    rgba(127, 127, 213, 0.2) 0%,
    rgba(134, 168, 231, 0.2) 50%,
    rgba(145, 234, 228, 0.2) 100%
  );
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.colors.white800};
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  svg {
    fill: ${(props) => props.theme.colors.text};
  }
  opacity: ${(props) => (props.isActive ? 1 : 0.3)};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.text200};
    opacity: 1;
    svg {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`

const CloseIcon = styled(Icon)`
  margin-left: 1em;
`

// TODO add "plus" icon
const PlusIcon = styled.span`
  margin-left: 1em;
  font-weight: bold;
`

const Tag = ({ name, onSelect, value, isActive = true }) => {
  const handleSelect = () => {
    onSelect(value)
  }

  return (
    <StyledTag onClick={handleSelect} isActive={isActive}>
      {name} {isActive && <CloseIcon name="close" size="16" />}
      {!isActive && <PlusIcon>+</PlusIcon>}
    </StyledTag>
  )
}

export default Tag
