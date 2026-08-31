import { useState } from "react";
import { Button, Filter } from "../components";
import { allData } from "../api/apiHandle";

export const Shoping = () => {
    const [open,setOpen] = useState(false);
    allData()
    
    return(
        <div className="pt-20">
            <Button varient="filterBtn" onClick={() => setOpen(prevOpen => !prevOpen)}>
                <span className="material-symbols-outlined text-[18px]">tune</span> Filters
            </Button>
            <Filter open={open} setOpen={setOpen} />
        </div>
    )
}
