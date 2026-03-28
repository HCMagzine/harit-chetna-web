import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface CurrentIssuePDFProps {
  volumeNumber: number;
  issueNumber: number;
  monthYear: string;
  coverImageUrl: string;
  pdfUrl: string;
}

export function CurrentIssuePDF({
  volumeNumber,
  issueNumber,
  monthYear,
  coverImageUrl,
  pdfUrl,
}: CurrentIssuePDFProps) {
  // Format the date if needed, assuming monthYear is YYYY-MM-DD from sanity
  const displayDate = new Date(monthYear).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 bg-card border rounded-xl p-8 shadow-sm mt-8">
      {/* Cover Image */}
      <div className="relative w-48 h-64 md:w-64 md:h-80 flex-shrink-0 rounded-lg overflow-hidden border shadow-inner">
        {coverImageUrl ? (
          <img
            src={coverImageUrl}
            alt={`Cover of Vol ${volumeNumber} Issue ${issueNumber}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-sm">No Cover</span>
          </div>
        )}
      </div>

      {/* Details & Download Action */}
      <div className="flex flex-col flex-grow text-center md:text-left items-center md:items-start">
        <h3 className="text-2xl font-bold mb-2">Current Issue</h3>
        <p className="text-lg text-muted-foreground mb-1">
          Volume {volumeNumber}, Issue {issueNumber}
        </p>
        <p className="text-md text-muted-foreground mb-6">
          {displayDate}
        </p>
        
        <div>
          <a href={pdfUrl} download>
            <Button size="lg" className="hover:scale-105 transition-transform gap-2 text-md">
              <Download className="h-5 w-5" />
              Download PDF
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
