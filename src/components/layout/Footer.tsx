import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t bg-emerald-50/50 dark:bg-emerald-950/20 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image src="/logo.png" alt="Harit Chetna" width={507} height={302} className="h-16 w-auto object-contain mb-4 drop-shadow-sm" />
            <p className="text-sm text-muted-foreground w-3/4">
              A peer-reviewed, open-access monthly magazine dedicated to creating awareness, promoting innovation, and strengthening communication in agriculture and rural development.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/editorial-board" className="text-sm text-muted-foreground hover:text-primary transition-colors">Editorial Board</Link>
            <Link href="/author-guidelines" className="text-sm text-muted-foreground hover:text-primary transition-colors">Author Guidelines</Link>
            <Link href="/archives" className="text-sm text-muted-foreground hover:text-primary transition-colors">Archives</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-primary">Contact</h4>
            <p className="text-sm text-muted-foreground">Editor.haritchetna@gmail.com</p>
            <p className="text-sm text-muted-foreground">+91 9984149456</p>
            <p className="text-sm text-muted-foreground">+91 7009571328</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Harit Chetna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
