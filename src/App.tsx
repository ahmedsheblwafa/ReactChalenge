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
import {
    filterByCamp,
    filterByCountry,
    filterBySchool,
    getCampFilter,
    getCountryFilter,
    getSchoolFilter,
    setDataSets
} from '@redux/reducers/filteredSchoolsReducer'
import { RootState } from '@redux/store'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const App: React.FC = (): JSX.Element => {
    const filter = useSelector((state: RootState) => state.filteredSchoolsReducer.filter)
    const countryFilteredSchools = useSelector((state: RootState) => state.filteredSchoolsReducer.countryFilteredScools)
    const allSchools = useSelector((state: RootState) => state.allSchoolsReducer.allSchools)
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
