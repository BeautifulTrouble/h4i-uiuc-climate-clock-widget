import Newsfeed from '../components/clock/Newsfeed'
import { getHeadlines } from '../utils/utils'
import Clock from '../components/clock/Clock'
import { useState, useEffect } from 'react'
import { ERROR_MSG, URL } from '../utils/constants'
import { getData } from '../utils/utils'
import Lifelines from '../components/lifelines/Lifelines'
import { ModuleResInterface, NewsInterface } from '../interfaces/index'

export default function Home() {
  const [defaultLanguage, setDefaultLanguage] = useState<string>('eng')
  const [modules, setModules] = useState<ModuleResInterface[]>([])
  const [lifelineModules, setLifelineModules] = useState<ModuleResInterface[]>(
    [],
  )
  const [newsfeedModules, setNewsfeedModules] = useState<NewsInterface[]>([])
  const [errorFlag, setErrorFlag] = useState<boolean>(false)

  useEffect(() => {
    getData(
      URL,
      ERROR_MSG,
      setErrorFlag,
      setDefaultLanguage,
      setModules,
      setLifelineModules,
      setNewsfeedModules,
    )
  }, [defaultLanguage])
  return (
    <>
      <Clock timestamp={modules && modules[0] && modules[0].timestamp} />
      {!errorFlag ? (
        <div>
          <Lifelines
            key={lifelineModules}
            lifeLineData={lifelineModules}
            displayNum={3}
          />
          <Newsfeed headline={getHeadlines(newsfeedModules)} />
        </div>
      ) : (
        // <h1>{ERROR_MSG}</h1>
        <div></div>
      )}
    </>
  )
}
