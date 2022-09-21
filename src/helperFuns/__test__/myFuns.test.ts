import { getFilter, sortDataForSchool } from '@helpers/myFuns'
const data = [
    {
        id: 'first id',
        school: 'first school',
        country: 'first country',
        camp: 'first camp'
    },
    {
        id: 'second id',
        school: 'second school',
        country: 'second country',
        camp: 'second camp'
    },
    {
        id: 'third id',
        school: 'third school',
        country: 'third country',
        camp: 'third camp'
    },
    {
        id: 'fourth id',
        school: 'third school',
        country: 'third country',
        camp: 'third camp'
    }
]

const oneSchoolData = [
    {
        id: 'first id',
        school: 'first school',
        country: 'first country',
        camp: 'first camp',
        month: 'Nov',
        lessons: 100
    },
    {
        id: 'first id',
        school: 'first school',
        country: 'first country',
        camp: 'first camp',
        month: 'Nov',
        lessons: 50
    },
    {
        id: 'first id',
        school: 'first school',
        country: 'first country',
        camp: 'first camp',
        month: 'Dec',
        lessons: 50
    }
]

it('gets countries in schools arr by passing country as 2nd arg', () => {
    expect(getFilter(data, 'country')).toEqual([
        { id: 'first id', name: 'first country' },
        { id: 'second id', name: 'second country' },
        { id: 'third id', name: 'third country' }
    ])
})

it('gets camps in schools arr by passing camp as 2nd arg', () => {
    expect(getFilter(data, 'camp')).toEqual([
        { id: 'first id', name: 'first camp' },
        { id: 'second id', name: 'second camp' },
        { id: 'third id', name: 'third camp' }
    ])
})

it('gets schools in schools arr by passing school as 2nd arg', () => {
    expect(getFilter(data, 'school')).toEqual([
        { id: 'first id', name: 'first school' },
        { id: 'second id', name: 'second school' },
        { id: 'third id', name: 'third school' }
    ])
})

it('takes arr and sort it filling all months', () => {
    expect(sortDataForSchool(oneSchoolData)).toEqual({
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 50],
        backgroundColor: 'red',
        borderColor: 'red',
        pointBackgroundColor: 'white',
        pointRadius: 5,
        pointHoverBackgroundColor: '',
        pointHoverRadius: 8
    })
})
