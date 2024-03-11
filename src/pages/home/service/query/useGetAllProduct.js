import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProduct = (category, id) => {
  return useQuery({
    queryKey: ["all-product", category],
    queryFn: () =>
      request.get(`/${category.toLowerCase()}/${id}`).then((res) => res.data),
  });
};