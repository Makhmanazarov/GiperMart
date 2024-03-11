import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useGetPhones = () => {
  return useQuery({
    queryKey: ["phones"],
    queryFn: () => request.get("/Phones").then((res) => res.data)
  })
}