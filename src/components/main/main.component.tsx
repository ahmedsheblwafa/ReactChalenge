import ChartComponent from '@components/chart/Chart.component'
import FilterationSection from '@components/filterationsection/FilterationSection.component'
import SchoolsSection from '@components/schools/Schools.component'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'

const IntegratedChart: React.FC = (): JSX.Element => {
    const loading = useSelector((state: RootState) => state.allSchoolsReducer.loading)
    const error = useSelector((state: RootState) => state.allSchoolsReducer.error)
    const errorMsg = useSelector((state: RootState) => state.allSchoolsReducer.errorMsg)

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

export default IntegratedChart
