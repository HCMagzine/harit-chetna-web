import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20 dark:bg-slate-900">
      <div className="relative mb-12 overflow-hidden border-b-8 border-emerald-700 bg-emerald-950 px-4 py-16 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="container relative mx-auto text-center">
          <p className="mb-3 text-sm font-semibold uppercase text-emerald-300">About the magazine</p>
          <h1 className="text-4xl font-extrabold">Harit Chetna</h1>
        </div>
      </div>
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="border-emerald-100 shadow-sm dark:border-emerald-900/50">
          <CardContent className="space-y-5 p-6 leading-relaxed text-muted-foreground md:p-8">
            <p className="text-lg font-medium text-emerald-950 dark:text-emerald-200">
              Harit Chetna is an open-access monthly agricultural magazine focused on practical, science-based information for farming and rural development.
            </p>
            <p>
              The magazine shares agricultural research, innovations, field experience, and success stories with farmers, rural communities, students, researchers, extension workers, and policymakers.
            </p>
            <p>
              Through accessible articles and editorial coverage, Harit Chetna aims to strengthen communication between agricultural knowledge and the people who can put it to work.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}