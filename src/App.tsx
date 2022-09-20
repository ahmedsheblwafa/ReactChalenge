import './App.css'
import IntegratedChart from '@components/main/main.component'
import { Routes, Route } from 'react-router'
import Datapage from '@components/datapage/Datapage.component'
import {
    getAllSchools,
    setLoading,
    removeLoading,
    setError,
    removeError,
    setErrorMsg
} from '@redux/reducers/schoolsReducer'
import { getCountryFilter } from '@redux/reducers/filteredSchoolsReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const App: React.FC = (): JSX.Element => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setLoading())
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => {
                dispatch(removeLoading())
                dispatch(removeError())
                dispatch(getAllSchools(data))
                dispatch(getCountryFilter(data))
            })
            .catch((err) => {
                dispatch(setError())
                dispatch(removeLoading())
                dispatch(setErrorMsg((err as Error).message))
            })
    }, [])
    return (
        <Routes>
            <Route path="/" element={<IntegratedChart />} />
            <Route path="/points-data" element={<Datapage />} />
        </Routes>
    )
}

export default App
