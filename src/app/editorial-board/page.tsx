import data from "@/data/editorial-board.json";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";

interface Member {
  _id: string;
  name: string;
  role: string;
  affiliation?: string;
  bio?: string;
  photoUrl?: string;
}

const EDITORIAL_BOARD_QUERY = `
  *[_type == "editorialBoard"] | order(order asc, name asc) {
    _id,
    name,
    role,
    affiliation,
    bio,
    "photoUrl": photo.asset->url
  }
`;

function MemberCard({ member }: { member: Member }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group rounded-xl border-emerald-100 dark:border-emerald-900/50">
      <CardContent className="p-0">
        <div className="aspect-square relative overflow-hidden bg-emerald-50 dark:bg-emerald-950/20 flex flex-col items-center justify-center border-b border-emerald-100 dark:border-emerald-900/50">
          {member.photoUrl ? (
            <Image
              src={member.photoUrl}
              alt={member.name}
              width={640}
              height={640}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0 group-hover:contrast-110"
            />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-300 dark:text-emerald-800 opacity-60"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          )}
        </div>
        <div className="p-6 text-center bg-white dark:bg-slate-950">
          <h3 className="font-bold text-lg text-emerald-900 dark:text-emerald-400 mb-1">{member.name}</h3>
          <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-500">{member.role}</p>
          {member.affiliation && <p className="mt-1 text-sm text-muted-foreground">{member.affiliation}</p>}
          {member.bio && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>}
        </div>
      </CardContent>
    </Card>
  );
}

function Section({ title, members }: { title: string; members: Member[] }) {
  if (!members || members.length === 0) return null;
  
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 shrink-0">{title}</h2>
        <div className="h-[1px] w-full bg-emerald-100 dark:bg-emerald-900/50"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>
    </section>
  );
}

export default async function EditorialBoardPage() {
  const sanityMembers = await client.fetch<Member[]>(EDITORIAL_BOARD_QUERY).catch(() => []);
  const roleLabels: Record<string, string> = {
    editorInChief: "Editor-in-Chief",
    managingEditors: "Managing Editor",
    associateEditors: "Associate Editor",
    boardMembers: "Editorial Board Member",
    technicalAdvisors: "Technical Advisor",
  };
  const localMembers = Object.entries(data).flatMap(([group, groupMembers]) =>
    groupMembers.map((member, index) => ({
      _id: `${group}-${index}`,
      name: member.name,
      role: roleLabels[group] || "Editorial Board Member",
      affiliation: member.affiliation,
      photoUrl: member.photo || undefined,
    })),
  );
  const members = sanityMembers.length ? sanityMembers : localMembers;
  const roles = [
    "Editor-in-Chief",
    "Managing Editor",
    "Associate Editor",
    "Editorial Board Member",
    "Technical Advisor",
    ...members.map((member) => member.role),
  ].filter((role, index, allRoles) => allRoles.indexOf(role) === index);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
      <div className="relative text-white py-16 px-4 mb-12 border-b-8 border-emerald-700 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c8a?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/90 to-emerald-950" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-in slide-in-from-bottom-6 duration-500">Editorial Board</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto font-light animate-in fade-in duration-700 delay-150">
            Meet the distinguished experts guiding the scientific rigor and editorial excellence of Harit Chetna.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl animate-in fade-in duration-1000 delay-300">
        {roles.map((role) => (
          <Section key={role} title={role} members={members.filter((member) => member.role === role)} />
        ))}
      </div>
    </div>
  );
}
