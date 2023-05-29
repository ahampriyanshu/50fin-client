export interface PostInterface {
  id: string;
  title: string;
  body: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
}

export interface AdjacentPostInterface {
  id: string;
  title: string;
  slug: string;
}

export interface MetaDataInterface {
  results: number;
  limit: number;
  page: number;
}

export interface SinglePostResponse {
  data: PostInterface;
  next_post: AdjacentPostInterface;
  previous_post: AdjacentPostInterface;
}

export interface PostListResponse {
  data: PostInterface[];
  metadata: MetaDataInterface;
}

export interface CreatePostData {
  title?: string;
  body?: string;
}

export interface PostQueryArgs {
  search?: string;
  page?: number;
  limit?: number;
}