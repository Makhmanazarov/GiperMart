import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";
// search: http://localhost:3000/customer?name_like=rist 

export const useGetAllData = (search = "") => {
  return useQuery({
    queryKey: ["all-data", search],
    queryFn: () =>
      request.get(`/allData`,{params:{title_like:search}}).then((res) => res.data),
  });
};