import { render as renderComponent, screen } from '@testing-library/react'
import SchoolsAsideListFilter from '@components/SchoolsAsideListFilter/SchoolsAsideListFilter.component'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import { School } from '@interfaces/school'

type schoolFilteredSchools = {
    arr: School[]
    color: string
}[]

const data: schoolFilteredSchools = [
    {
        arr: [
            {
                id: '1',
                country: 'country 1',
                camp: 'camp 1',
                school: 'school 1',
                lessons: 50,
                month: '1'
            },
            {
                id: '2',
                country: 'country 1',
                camp: 'camp 1',
                school: 'school 1',
                lessons: 70,
                month: '1'
            },
            {
                id: '3',
                country: 'country 1',
                camp: 'camp 1',
                school: 'school 1',
                lessons: 70,
                month: '3'
            }
        ],
        color: 'red'
    },
    {
        arr: [
            {
                id: '4',
                country: 'country 1',
                camp: 'camp 1',
                school: 'school 2',
                lessons: 50,
                month: '2'
            },
            {
                id: '5',
                country: 'country 1',
                camp: 'camp 1',
                school: 'school 2',
                lessons: 80,
                month: '2'
            },
            {
                id: '6',
                country: 'country 1',
                camp: 'camp 1',
                school: 'school 2',
                lessons: 70,
                month: '3'
            }
        ],
        color: 'green'
    }
]

const render = (component: JSX.Element) => renderComponent(<Provider store={store}>{component}</Provider>)
it('renders same number of schools', () => {
    render(<SchoolsAsideListFilter schoolFilteredSchools={data} />)
    expect(screen.getAllByTestId('testId')).toHaveLength(data.length)
})

it('renders total number of lessons in each school in the camp', () => {
    render(<SchoolsAsideListFilter schoolFilteredSchools={data} />)
    const allNumberOfLessons = data[0].arr.reduce((pv, cr) => pv + cr.lessons, 0)
    screen.getAllByTestId('testId').forEach((el, i) => {
        expect(el).toContainHTML(`${data[i].arr.reduce((pv, cr) => pv + cr.lessons, 0)}`)
    })
})
