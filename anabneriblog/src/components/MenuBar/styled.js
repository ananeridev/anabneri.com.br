import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuBarWrapper = styled.aside`
    align-items: center;
    background: #1d2a38;
    border-left: 1px solid #4f2549;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 0.8rem 0;
    position: fixed;
    right: 0;
    width: 3.75rem;
      
`

export const MenuBarGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const MenubarLink = styled(Link)`
    display: block;
`

export const MenuBarItem = styled.span`
    color: #d8e0e8;
    cursor: pointer;
    display: block;
    height: 3.75rem;
    padding: 1.1rem;
    position: relative;
    width: 3.75rem;

`
export const MenuBarNotification = styled.span`
  background: red;
  border-radius: 50%;
  display: block;
  height: 0.4rem;
  position: absolute;
  right: 12px;
  top: 12px;
  width: 0.4rem;
`
