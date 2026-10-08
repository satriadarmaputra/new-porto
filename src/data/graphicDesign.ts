export type GraphicDesignProject = {
  title: string;
  category: string;
  year: string;
  image?: string;
  href?: string;
};

// Isi `image` dengan path gambar di folder public, misalnya `/design/project-01.jpg`.
// Isi `href` jika karya memiliki halaman studi kasus atau tautan eksternal.
export const graphicDesignProjects: GraphicDesignProject[] = [
  { title: 'Project 01', category: 'Brand Identity', year: '20—' },
  { title: 'Project 02', category: 'Social Media Design', year: '20—' },
  { title: 'Project 03', category: 'Campaign Visual', year: '20—' },
  { title: 'Project 04', category: 'Editorial Design', year: '20—' },
  { title: 'Project 05', category: 'Infographic', year: '20—' },
  { title: 'Project 06', category: 'Other Selected Work', year: '20—' },
];
