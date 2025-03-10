/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import queryString from "query-string";

export const sendRequest = async <T>(props: IRequest) => {
  let {
    url,
    method,
    body,
    queryParams = {},
    useCredentials = false,
    headers = {},
    nextOption = {},
  } = props;

  const options: any = {
    method: method,
    // by default setting the content-type to be json type
    headers: new Headers({ "content-type": "application/json", ...headers }),
    body: body ? JSON.stringify(body) : null,
    ...nextOption,
  };
  if (useCredentials) options.credentials = "include";

  if (queryParams) {
    console.log(queryParams)
    // const paramSearch = queryParams.query;
    const isSearch = queryParams?.q?.q || "";
    if(isSearch){
      url = `${url}/search?${queryString.stringify(queryParams.q)}`;
      console.log("url: ", url);
    } else{
      url = `${url}/?${queryString.stringify(queryParams)}`;
    }
  }

  return fetch(url, options).then((res) => {
    if (res.ok) {
      return res.json() as T;
    } else {
      return res.json().then(function (json) {
        // to be able to access error status when you catch the error
        return {
          statusCode: res.status,
          message: json?.message ?? "",
          error: json?.error ?? "",
        } as T;
      });
    }
  });
};

