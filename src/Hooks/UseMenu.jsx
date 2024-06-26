// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";

const useMenu = () => {
  const axiosPublic = useAxiosOpen();
  // const [ menu, setMenu ] = useState([]);
  // const [loading,setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then(data => {setMenu(data)
  //         setLoading(false)
  //         // console.log(data);
  //     });
  // }, []);
  const { data: menu = [] ,isPending:loading,refetch} = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });
  return [menu, loading ,refetch ];
};

export default useMenu;
