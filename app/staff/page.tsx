import staff from "../data/users.json";
import MyMenu from "../components/menu";
import MyFooter from "../components/footer";

export default function Staff(){
    let title = "ทีมงานของเรา";
    let description = "ทีมงานคุณภาพของเรา ดูรายละเอียดโปรไฟล์เพื่อติดต่อ";

    return (
     <div>
        <MyMenu/>
        <h1 className="text-4xl font-bold text-blue-500">{title}</h1>
        <h2>{description}</h2>
        {/*การอ่านข้อมูลจาก object array ด้วย Map Function*/}
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* {<!-- Card 1 -->} */}
            
            {
                staff.map((stfobj, ind) => (
                    <div key={ind}className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="grid grid-cols-[auto_1fr] gap-3">
                            <div>
                                <img src = {stfobj.userAvartar} className="h-35 w-35"/>
                            </div>
                            <div>

                                <h3 className="text-lg font-semibold text-gray-900">{stfobj.userFullname}</h3>
                                <h3 className="text-lg font-semibold text-gray-900">{stfobj.userEmail}</h3>                                
                            </div>

                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                        Short description text. Rows automatically adjust to match the tallest card in that row.
                        </p>
                        <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                        View Profile
                        </button>
                    </div>
                        ))
            }
        </div>

        <MyFooter/>
     </div>
    );
}
