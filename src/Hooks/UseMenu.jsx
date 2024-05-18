import { useEffect, useState } from "react";

const useMenu = () => {
    const [ menu, setMenu ] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
      fetch("/menuData.json")
        .then((res) => res.json())
        .then(data => {setMenu(data)
            setLoading(false)
            // console.log(data);
        });
    }, []);
    return [menu,loading]
}

export default useMenu;