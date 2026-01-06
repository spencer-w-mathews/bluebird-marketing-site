import {useEffect, useMemo, useState} from 'react'
import {fetchSanity} from './fetch'

type State<T> = {
  data?: T
  loading: boolean
  error?: Error
}

export function useSanityDoc<T>(query: string, params?: Record<string, unknown>) {
  const [state, setState] = useState<State<T>>({loading: true})

  const key = useMemo(() => JSON.stringify({query, params}), [query, params])

  useEffect(() => {
    let active = true
    setState((prev) => ({...prev, loading: true}))

    fetchSanity<T>(query, params)
      .then((data) => {
        if (!active) return
        setState({data, loading: false})
      })
      .catch((error: Error) => {
        if (!active) return
        setState({error, loading: false})
      })

    return () => {
      active = false
    }
  }, [key, query, params])

  return state
}
