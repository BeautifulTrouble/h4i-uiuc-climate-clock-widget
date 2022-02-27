import Lifeline from './components/Lifeline'
import { ModuleResInterface } from './interfaces'
import { get } from './api/config'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { theme } from './components/ui/GlobalStyle'
import { WindowSize } from '@reach/window-size'

function App() {
  const [modules, setModules] = useState<ModuleResInterface[]>([])

  useEffect(() => {
    let URL: string = 'https://api.climateclock.world/v1/clock'
    let ERROR_MSG: string = 'Error getting module data'
    const getData = async (url: string, error: string) => {
      let res = await get(url, error)
      let content: ModuleResInterface[] = Object.values(
        res['data']['data']['modules'],
      )
      setModules(content)
    }

    getData(URL, ERROR_MSG)
  }, [])

  const returnFirstString = (array: string[] | undefined) => {
    if (array === undefined || !array.length) {
      return ''
    }
    return array[0]
  }

  const toUpperCase = (str: string | undefined) => {
    if (str === undefined) {
      return ''
    }
    return str.toUpperCase()
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header"></header>
        {modules.map(
          (module) =>
            module['type'] !== 'newsfeed' &&
            module['flavor'] === 'lifeline' && (
              <Lifeline
                key={module['description']}
                title={returnFirstString(module['labels'])}
                module_type={toUpperCase(module['flavor'])}
                value={module['initial']}
                unit={returnFirstString(module['unit_labels'])}
                rate={module['rate']}
                resolution={module['resolution']}
              />
            ),
        )}
      </div>
      <WindowSize>
        {(windowSize) => <GlobalStyle windowSize={windowSize} />}
      </WindowSize>
    </ThemeProvider>
  )
}

export default App
