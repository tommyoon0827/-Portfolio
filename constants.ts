import { Profile, DriveFolder } from './types';

export const PROFILE: Profile = {
  name: "김윤지",
  englishName: "Yoonji Kim",
  birthYear: 2004,
  email: "kyjnkyj@naver.com",
  education: "Department of Data Science, Hallym University",
  majors: ["Data Tech", "Big Data"],
  interests: ["LLM", "RAG", "Data Science", "Machine Learning", "Deep Learning"],
  links: {
    linkedin: "https://www.linkedin.com/in/tommyoon/",
    github: "https://github.com/tommyoon0827",
    velog: "https://velog.io/@rosyoon/posts"
  }
};

export const PHOTO_ALBUM: DriveFolder = {
  title: "Yoonji's Moments",
  description: "A collection of memories and daily inspirations captured through my lens. Click to view the full gallery on Google Drive.",
  url: "https://drive.google.com/drive/folders/1uROhbIV0mrCAS5MnsI2iBlIDyjS6kreB?usp=drive_link",
  previewImages: [
    "https://images.unsplash.com/photo-1507842217153-e21f20104434?w=400&h=300&fit=crop&q=80", // Cafe/Dark Academia vibe
    "https://images.unsplash.com/photo-1519681393784-d8e5b5a4570e?w=400&h=300&fit=crop&q=80", // Books/Autumn
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=300&fit=crop&q=80"  // Nature/Autumn
  ]
};

export const AWARDS: DriveFolder = {
  title: "Awards & Activities",
  description: "Certificates of achievement and recognition for academic excellence and competitions.",
  url: "https://drive.google.com/drive/folders/1W17Jt3u_048GtBwrHXYgIT_3V6BiOEGG?usp=sharing",
  previewImages: [
    "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=400&h=600&fit=crop&q=80", // Certificate abstract
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=600&fit=crop&q=80"  // Friends/Team
  ]
};

export const EXPERIENCE: DriveFolder = {
  title: "Project",
  description: "An archive of my prototypes, functionality demos, and data science projects.",
  url: "https://drive.google.com/drive/folders/1UFu5qnSEIPqZt6HugsSUV8QpxEZrKkb2?usp=sharing",
  previewImages: [
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop&q=80", // Code
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80", // Data Analysis
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&q=80"  // Tech
  ]
};