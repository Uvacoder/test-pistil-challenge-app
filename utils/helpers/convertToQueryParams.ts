export const convertToQueryParams = (params: any) => {
  Object.keys(params).forEach((key) => !params[key] as any && delete params[key]);

  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
};
