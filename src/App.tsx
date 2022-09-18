import './App.css'
import ChartComponent from './components/chart/Chart.component'
import FilterationSection from './components/filterationsection/FilterationSection.component'
import SchoolsSection from './components/schools/Schools.component'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './Redux/store'
import {
    getAllSchools,
    setLoading,
    removeLoading,
    setError,
    removeError,
    setErrorMsg
} from './Redux/reducers/schoolsReducer'
import { getCountryFilter } from './Redux/reducers/filteredSchoolsReducer'
import { useEffect } from 'react'

const App: React.FC = (): JSX.Element => {
    const loading = useSelector((state: RootState) => state.allSchoolsReducer.loading)
    const error = useSelector((state: RootState) => state.allSchoolsReducer.error)
    const errorMsg = useSelector((state: RootState) => state.allSchoolsReducer.errorMsg)
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
        <>
            <div className="container-fluid p-5">
                <FilterationSection />
                {loading && !error ? (
                    <div className="row vh-100 justify-content-center align-items-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {!loading && !error ? (
                    <div className="row bg-white justify-content-between">
                        <ChartComponent />
                        <SchoolsSection />
                    </div>
                ) : (
                    ''
                )}
                {error ? (
                    <div className="row vh-100 justify-content-center align-items-center">
                        <div className="alert alert-danger" role="alert">
                            {errorMsg}
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </>
    )
}

export default App
