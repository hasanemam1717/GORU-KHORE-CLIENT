import { useEffect, useState } from "react";

const useMenu = () => {
    const [ manu, setManu ] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
      fetch("Manu.json")
        .then((res) => res.json())
        .then(data => {setManu(data)
            setLoading(false)
        });
    }, []);
    return [manu,loading]
}

export default useMenu;