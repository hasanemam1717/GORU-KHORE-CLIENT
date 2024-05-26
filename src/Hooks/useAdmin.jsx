import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSequre from "./useAxiosSequre";


const useAdmin = () => {
    const axiosSecure = useAxiosSequre()
    const {user} = useAuth()
    const {data : isAdmin,isPending:isAdminLoading} = useQuery({
        queryKey:[user?.email,'isAdmin'],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/allusers/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.isAdmin
        }
    })
    return [isAdmin ,isAdminLoading]
};

export default useAdmin;