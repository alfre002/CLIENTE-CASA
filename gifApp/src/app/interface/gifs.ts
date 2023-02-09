export interface Gif{
  id: string;
  title: string;
  images: {
      downsized_medium: {
          url: string;
      }
  }
}

export interface SearchGifsResponse {
  data: Gif[];
}