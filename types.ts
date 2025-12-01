export interface LinkInfo {
  url: string;
  label: string;
}

export interface Profile {
  name: string;
  englishName: string;
  birthYear: number;
  email: string;
  education: string;
  majors: string[];
  interests: string[];
  links: {
    linkedin: string;
    github: string;
    velog: string;
  };
}

export interface DriveFolder {
  title: string;
  description: string;
  url: string;
  previewImages: string[]; // Placeholder URLs since we can't scrape Drive
  tags?: string[];
}
