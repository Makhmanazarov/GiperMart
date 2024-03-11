import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useGetAutos = () => {
  return useQuery({
    queryKey: ["auto"],
    queryFn: () => request.get("/Auto").then((res) => res.data)
  })
}