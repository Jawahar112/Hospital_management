import AdminNavbar from "../pages/navbar/AdminNav"
import StaffNavbar from "../pages/navbar/StaffNav"
import DoctorNavbar from "../pages/navbar/DoctorNav"

const useNav=(nav)=>{
switch(nav){
    case "admin":
        return <AdminNavbar/>
        case "doctor":
            return <DoctorNavbar/>
            case "staff":
                return <StaffNavbar/>
                default:
                    return ''
}
}
export default useNav
