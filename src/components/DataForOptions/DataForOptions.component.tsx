type Iprops = {
    label: string
    data: { id: string; name: string }[]
}
export default function DataForOptions({ label, data }: Iprops) {
    return (
        <>
            {label !== 'school' ? <option value="">select {label}</option> : <option>all schools</option>}
            {data.map((el) => {
                return (
                    <option key={el.id} value={el.name}>
                        {el.name}
                    </option>
                )
            })}
        </>
    )
}
