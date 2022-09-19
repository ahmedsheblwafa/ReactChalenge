export const dates = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
export const colors = (()=>{
    const arr =["green","blue","red","Orange"]
    for(var i =0;i<30;i++){
        arr.push(`#${Math.ceil(Math.random()*999999)}`)
    }
    return arr
})()


// takes in an arr of one school data and sorts it and adds duplicates returns object dataset 
export const sortDataForSchool = (arr)=>{
    const newArr = []; 
    // array of lessons per month for one school
    for(let i=0;i<dates.length;i++){
        newArr[i]={
            month:dates[i],
            lessons:arr.filter(el=>el.month==dates[i]).reduce((pv,cr)=>pv+cr.lessons,0)
        }
    }
    return ({
            data: newArr.map(el=>el.lessons),
            backgroundColor: 'red',
            borderColor: 'red',
            pointBackgroundColor: 'white',
            pointRadius: 5 ,
            pointHoverBackgroundColor:"",
            pointHoverRadius:8
    })
}

// takes in array and a filter ex:
//  need to get countries in all data 
//  need to get camps in a country 
//  need to get schools in a camp 
export const getFilter = (arr,filter)=>{   
    const newArr = []
    let exist=false
    for(let i=0;i<arr.length;i++){
        exist =false
        for(let j=0;j<newArr.length;j++){
           if (arr[i][filter]==newArr[j].name){
            exist = true
            break
           }
        }
        if(!exist){
            newArr.push({name:arr[i][filter],id:arr[i].id}) 
        }
    }
    return newArr
}