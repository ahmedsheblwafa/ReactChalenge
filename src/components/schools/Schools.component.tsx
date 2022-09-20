import './schools.styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@redux/store'
import { useEffect, useState } from 'react'
import { colors } from '@helpers/myFuns'
import { toggleNestedFilter, setDataSets } from '@redux/reducers/filteredSchoolsReducer'

const Schools: React.FC = (): JSX.Element => {
    const camp = useSelector((state: RootState) => {
        const firstSchool = state.filteredSchoolsReducer.schoolFilteredScools[0]
        return firstSchool ? firstSchool.arr[0].camp : ''
    })
    const schools = useSelector((state: RootState) => state.filteredSchoolsReducer.school)
    const schoolFilteredSchools = useSelector((state: RootState) => {
        return state.filteredSchoolsReducer.schoolFilteredScools
    })
    const dispatch = useDispatch()
    const [totalLessons, setTotalLessons] = useState(0)
    const schoolClickHandeler = (schoolName: string) => {
        dispatch(toggleNestedFilter(schoolName))
        dispatch(setDataSets())
    }
    const nestedSchools = useSelector((state: RootState) => state.filteredSchoolsReducer.nestedSchools)
    useEffect(() => {
        setTotalLessons(
            schoolFilteredSchools.reduce((pv, cr) => pv + cr.arr.reduce((pv2, cr2) => pv2 + cr2.lessons, 0), 0)
        )
    }, [schoolFilteredSchools])
    return (
        <div className="col-lg-3 p-relative">
            {schoolFilteredSchools.length > 1 && schools.length > 0 ? (
                <div className="scroll">
                    <div className="p-5 d-flex flex-column ">
                        <p className="my-0  lead d-flex align-items-center">
                            <span className="h2">{totalLessons}</span>
                            lessons <br />
                        </p>
                        <p>in {camp}</p>
                    </div>
                    <div>
                        {schoolFilteredSchools.map((schoolDataArr, i) => (
                            <div
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
                                        <span className="h2">
                                            {schoolDataArr.arr.reduce((pv, cr) => pv + cr.lessons, 0)}
                                        </span>
                                        lessons <br />
                                    </p>
                                    <p className="my-0">in {schoolDataArr.arr[0].school}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default Schools
