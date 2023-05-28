export interface PostListResponse {
  id: string;
  title: string;
  body: string;
  slug: string;
  reading_time: string;
  created_at: Date;
}

export interface CreatePostData {
  title: string;
  body: string;
}

export interface PostQueryArgs {
  search?: string;
  page?: number;
  limit?: number;
}