import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  youtubeUrl?: string;
}

export function BlogCard({ title, excerpt, date, imageUrl, youtubeUrl }: BlogCardProps) {
  // Convert standard YouTube URL to embed URL
  const getEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&]{11})/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
  };

  const embedUrl = youtubeUrl ? getEmbedUrl(youtubeUrl) : null;

  return (
    <Card className="overflow-hidden flex flex-col h-full border-emerald-100 hover:border-emerald-400 dark:border-emerald-900/40 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-lg group bg-slate-50/50 dark:bg-slate-900/50">
      <div className="relative w-full aspect-video bg-muted overflow-hidden">
        {embedUrl ? (
          <iframe 
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800">
            No media available
          </div>
        )}
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-2">{date}</div>
        <CardTitle className="line-clamp-2 text-lg leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
      </CardContent>
    </Card>
  );
}
