import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useGetLaptops = () => {
  return useQuery({
    queryKey: ["laptops"],
    queryFn: () => request.get("/Laptops").then((res) => res.data)
  })
}