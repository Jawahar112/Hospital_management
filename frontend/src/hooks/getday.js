const getday=()=>{
    let currentdate=new Date()
    const dayofweek=currentdate.getDay();
    const daysofweek=["sunday","monday","tuesday","wednesday","thursday","friday","saturnday"];
    let dayName=daysofweek[dayofweek]
    return dayName
}
export default getday