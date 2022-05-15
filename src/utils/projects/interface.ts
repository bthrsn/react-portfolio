export interface IProjects {
  projects: IProjectsItem[];
}

interface IProjectsItem {
  name: string;
  img_url: string;
  page_url: string;
  code_url: string;
  description?: string;
}
