import axios, {AxiosResponse} from 'axios'; 
 import { DEV_SERVER } from './constants'; 
 import { PostListResponse, CreatePostData, PostQueryArgs } from './types';
  
//  const baseDomain = process.env.NODE_ENV === 'development' ? DEV_SERVER : process.env.REACT_APP_PROD_SERVER; 
  
const axiosInstance = axios.create({ 
   baseURL: `http://localhost:8000/api`, 
}); 
  
  
 export const serializeQuery = (query: any) => { 
   return Object.keys(query) 
     .map( 
       (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`, 
     ) 
     .join('&'); 
 };

 export const getPosts = async (queryParams: PostQueryArgs): Promise<PostListResponse[]> => {
  try {
    const query = serializeQuery({ ...queryParams });
    const response: AxiosResponse<PostListResponse[]> = await axiosInstance.get(`/posts/?${query}`);
    const data: PostListResponse[] = response.data;
    return data;

  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const getPost = async (postIdOrSlug: string): Promise<PostListResponse> => {
  try {
    const response: AxiosResponse<PostListResponse> = await axiosInstance.get(`/posts/${postIdOrSlug}`);
    const postData: PostListResponse = response.data;
    return postData;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

// export const getPost = async (id: string): Promise<AxiosResponse<PostListResponse>> => {
//   return axios.get(`/api/v1/posts/${id}`);
// };

export const createPost = async (data: CreatePostData): Promise<PostListResponse> => {
  try {
    const response: AxiosResponse<PostListResponse> = await axiosInstance.post('/posts/', data);
    const postData: PostListResponse = response.data;
    return postData;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const updatePost = async (
  id: string,
  data: CreatePostData
): Promise<AxiosResponse<PostListResponse>> => {
  return axios.put(`/api/v1/posts/${id}`, data);
};