import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
    return(
        <div className="w-full text-white pt-6 px-6">
            <div className="bg-[#6469F2] px-4 py-3 rounded-md flex flex-row gap-2 cursor-pointer">
                <FontAwesomeIcon className='text-white' icon={faTableColumns} />
                <h1 className="text-sm font-semibold">Dashboard</h1>
            </div>

        </div>
    )
}

export default SideBar;