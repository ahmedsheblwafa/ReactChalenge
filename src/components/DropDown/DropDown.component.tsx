import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@redux/store'
import { label } from '@components/filterationsection/FilterationSection.component'
import {
    getCampFilter,
    getSchoolFilter,
    filterByCountry,
    filterByCamp,
    filterBySchool,
    setDataSets,
    resetDataSets,
    setCountryFilter,
    setCampFilter,
    setSchoolFilter
} from '@redux/reducers/filteredSchoolsReducer'

interface Iprops {
    label: label
}

const DropDown: React.FC<Iprops> = ({ label }: Iprops): JSX.Element => {
    const allSchools = useSelector((state: RootState) => state.allSchoolsReducer.allSchools)
    const selectHandeler = {
        ['country']: (e: { target: { value: string } }) => {
            dispatch(setCountryFilter(e.target.value))
            dispatch(filterByCountry({ all: allSchools }))
            dispatch(getCampFilter(false))
            dispatch(setDataSets())
            dispatch(resetDataSets())
        },
        ['camp']: (e: { target: { value: string } }) => {
            dispatch(setCampFilter(e.target.value))
            dispatch(filterByCamp())
            dispatch(getSchoolFilter())
            dispatch(filterBySchool('all schools'))
            dispatch(setDataSets())
        },
        ['school']: (e: { target: { value: string } }) => {
            dispatch(filterBySchool(e.target.value))
            dispatch(setDataSets())
            dispatch(setSchoolFilter(e.target.value))
        }
    }

    const data = useSelector((state: RootState) => state.filteredSchoolsReducer[label])
    const filter = useSelector((state: RootState) => state.filteredSchoolsReducer.filter)
    const dispatch = useDispatch()

    return (
        <div className="col-lg-3 my-3 my-lg-0">
            <div className="row justify-content-center align-items-center">
                <div className="col-3">
                    <label className="text-capitalize" htmlFor={label}>
                        {label}
                    </label>
                </div>
                <div className="col-9">
                    <p>{filter.camp}</p>
                    <select
                        value={filter[label]}
                        onChange={selectHandeler[label]}
                        className="form-control"
                        name={label}
                        id={label}
                    >
                        {label !== 'school' ? <option value="">select {label}</option> : <option>all schools</option>}
                        {data.map((el) => {
                            return (
                                <option key={el.id} value={el.name}>
                                    {el.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default DropDown
