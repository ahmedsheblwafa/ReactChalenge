import { colors } from '@helpers/myFuns'
import { School } from '@interfaces/school'
import { setDataSets, toggleNestedFilter } from '@redux/reducers/filteredSchoolsReducer'
import { RootState } from '@redux/store'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

type Iprops = {
    schoolFilteredSchools: { arr: School[]; color: string }[]
}

export default function SchoolsAsideListFilter({ schoolFilteredSchools }: Iprops) {
    const nestedSchools = useSelector((state: RootState) => state.filteredSchoolsReducer.nestedSchools)
    const dispatch = useDispatch()
    const schoolClickHandeler = (schoolName: string) => {
        dispatch(toggleNestedFilter(schoolName))
        dispatch(setDataSets())
    }
    return (
        <>
            {schoolFilteredSchools.map((schoolDataArr, i) => (
                <div
                    data-testid="testId"
                    onClick={() => {
                        schoolClickHandeler(schoolDataArr.arr[0].school)
                    }}
                    className={`d-flex px-5 mb-5 ${
                        nestedSchools.some((el) => el == schoolDataArr.arr[0].school) ? '' : 'text-muted'
                    }`}
                    style={{ color: colors[i] }}
                    key={schoolDataArr.arr[0].id}
                >
                    <i className="bi bi-record-circle h2"></i>
                    <div className="ms-4">
                        <p className="lead my-0 d-flex align-items-center">
                            <span className="h2">{schoolDataArr.arr.reduce((pv, cr) => pv + cr.lessons, 0)}</span>
                            lessons <br />
                        </p>
                        <p className="my-0">in {schoolDataArr.arr[0].school}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
