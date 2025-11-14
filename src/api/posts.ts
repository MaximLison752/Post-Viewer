import axios from "axios";
import { type Comment, type Post } from "../types/posts";

const API_BASE = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(API_BASE);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${(error as Error).message}`);
  }
};

export const getPost = async (id: number): Promise<Post> => {
  try {
    const response = await axios.get<Post>(`${API_BASE}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch post ${id}: ${(error as Error).message}`);
  }
};

export const getComments = async (postId: number): Promise<Comment[]> => {
  try {
    const response = await axios.get<Comment[]>(
      `${API_BASE}/${postId}/comments`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch comments for post ${postId}: ${(error as Error).message}`
    );
  }
};
