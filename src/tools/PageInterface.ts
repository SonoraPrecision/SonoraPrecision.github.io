export interface Page {
  currentPage: number;
  data: Array<{
    image: string;
    date: string;
    title: string;
    desc: string;
    slug: string;
  }>;
  url: { first?: string; prev?: string; next?: string; last?: string };
}
