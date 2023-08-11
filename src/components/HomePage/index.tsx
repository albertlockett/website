import React, { ReactElement } from 'react'
import { Button, Frame, List, TaskBar, ThemeProvider, TitleBar } from '@react95/core'
import { Coreui3000 } from '@react95/icons'

import '@react95/icons/icons.css'
import './styles.scss'

export function CV(): ReactElement {
  return (
    <Frame w={800} h={500} position="fixed" top="50" left="50">
      <TitleBar active={true} title="Albert Lockett - CV - Aug 2023" icon={<Coreui3000 variant="32x32_4" />}>
        <TitleBar.OptionsBox>
          <TitleBar.Option>X</TitleBar.Option>
        </TitleBar.OptionsBox>
      </TitleBar>
      Hello, world
    </Frame>
  )
}

export default function HomePage(): ReactElement {
  const [cvOpen, setCVOpen] = React.useState(true)
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'darkcyan',
      }}
    >
      <ThemeProvider>
        {cvOpen && <CV />}
        <TaskBar
          list={[
            <List>
              <List.Item icon={<Coreui3000 variant="32x32_4" />} onClick={() => setCVOpen(true)}>
                CV
              </List.Item>
              <List.Item></List.Item>
            </List>,
          ]}
        />
        {/* {menuOpen && (
          <Frame h={350} w={250} position="fixed" bottom="24">
            Hello Chou Chou
          </Frame>
        )}
        <Frame w="100%" h={24} position="fixed" bottom="0" left="0">
          <Button onClick={() => setMenuOpen(!menuOpen)}>
            <User1 variant="14x14_4" />
            <span
              style={{
                position: 'relative',
                top: '-2px',
                marginLeft: '4px',
              }}
            >
              Menu
            </span>
          </Button>
        </Frame> */}
      </ThemeProvider>
    </div>
  )
}
