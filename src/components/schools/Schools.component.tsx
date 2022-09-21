import './schools.styles.css'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { useEffect, useState } from 'react'
import SchoolsAsideListFilter from '@components/SchoolsAsideListFilter/SchoolsAsideListFilter.component'

const Schools: React.FC = (): JSX.Element => {
    const camp = useSelector((state: RootState) => {
        const firstSchool = state.filteredSchoolsReducer.schoolFilteredScools[0]
        return firstSchool ? firstSchool.arr[0].camp : ''
    })
    const schools = useSelector((state: RootState) => state.filteredSchoolsReducer.school)
    const schoolFilteredSchools = useSelector((state: RootState) => {
        return state.filteredSchoolsReducer.schoolFilteredScools
    })
    const [totalLessons, setTotalLessons] = useState(0)

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
                        <SchoolsAsideListFilter schoolFilteredSchools={schoolFilteredSchools} />
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default Schools
