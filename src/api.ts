import axios, {AxiosResponse} from 'axios'; 
 import { SinglePostResponse, PostListResponse, CreatePostData, PostQueryArgs, PostInterface } from './types';
  
//  const baseDomain = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_SERVER : process.env.REACT_APP_PROD_SERVER; 
  
const axiosInstance = axios.create({ 
   baseURL: `https://five0fin.onrender.com/api`, 
}); 
  
  
 export const serializeQuery = (query: any) => { 
   return Object.keys(query) 
     .map( 
       (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`, 
     ) 
     .join('&'); 
 };

 export const getPosts = async (queryParams: object): Promise<PostListResponse[]> => {
  try {
    const query = serializeQuery({ ...queryParams });
    const response: AxiosResponse<PostListResponse[]> = await axiosInstance.get(`/posts/?${query}`);
    const data: PostListResponse[] = response.data;
    return data;

  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const getPost = async (identifier: string): Promise<SinglePostResponse> => {
  try {
    const response: AxiosResponse<SinglePostResponse> = await axiosInstance.get(`/posts/${identifier}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const createPost = async (data: CreatePostData): Promise<PostInterface> => {
  try {
    const response: AxiosResponse<PostInterface> = await axiosInstance.post('/posts/', data);
    return response.data;
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