import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetSingleCategory = (slug) => {
  return useQuery({
    queryKey: ["single-category", slug],
    queryFn: () =>
      request.get(`/${slug.toLowerCase()}`).then((res) => res.data),
  });
};
