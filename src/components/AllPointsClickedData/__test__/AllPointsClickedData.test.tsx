import { render, screen } from '@testing-library/react'
import AllPointsClickedData from '@components/AllPointsClickedData/AllPointsClickedData.component'
import { School } from '@interfaces/school'

const data: School[] = [
    {
        id: '1',
        country: 'country1',
        camp: 'camp1',
        school: 'school1',
        month: '1',
        lessons: 1
    },
    {
        id: '2',
        country: 'country2',
        camp: 'camp2',
        school: 'school2',
        month: '2',
        lessons: 2
    },
    {
        id: '3',
        country: 'country3',
        camp: 'camp3',
        school: 'school3',
        month: '3',
        lessons: 3
    }
]
it('renders cards of data with same number of points clicked', () => {
    render(<AllPointsClickedData allData={data} />)
    expect(screen.getAllByTestId('pointDataContainer')).toHaveLength(data.length)
})

it('renders cards of data with school data of each point', () => {
    render(<AllPointsClickedData allData={data} />)
    data.forEach((el) => {
        screen.getAllByText(new RegExp(`^country: ${el.country}$`)).forEach((el) => {
            expect(el).toBeInTheDocument()
        })
        screen.getAllByText(new RegExp(`^camp: ${el.camp}$`)).forEach((el) => {
            expect(el).toBeInTheDocument()
        })
        screen.getAllByText(new RegExp(`^school: ${el.school}$`)).forEach((el) => {
            expect(el).toBeInTheDocument()
        })
        screen.getAllByText(new RegExp(`^month: ${el.lessons}$`)).forEach((el) => {
            expect(el).toBeInTheDocument()
        })
        screen.getAllByText(new RegExp(`^lessons: ${el.month}$`)).forEach((el) => {
            expect(el).toBeInTheDocument()
        })
    })
})
