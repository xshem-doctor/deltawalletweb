// components/download/DownloadExperience.tsx

import { Download } from "lucide-react";
import DeltaButton from "@/components/shared/DeltaButton";
import { siteConfig } from "@/config/site";

type DownloadExperienceProps = {
  buttonLabel: string;
};

export default function DownloadExperience({ buttonLabel }: DownloadExperienceProps) {
  return (
    <DeltaButton
      href={siteConfig.apkUrl}
      className="h-14 w-full px-8 text-base md:w-auto"
    >
      <span className="inline-flex items-center gap-2">
        <Download className="h-5 w-5" />
        {buttonLabel}
      </span>
    </DeltaButton>
  );
}