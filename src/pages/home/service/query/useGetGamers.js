import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useGetGamers = () => {
  return useQuery({
    queryKey: ["gamers"],
    queryFn: () => request.get("/Gamers").then((res) => res.data)
  })
}