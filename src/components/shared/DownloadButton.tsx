import { Download } from "lucide-react";
import DeltaButton from "./DeltaButton";
import { siteConfig } from "@/config/site";
import { useT } from "@/i18n/useT";

type DownloadButtonProps = {
  className?: string;
};

export default function DownloadButton({ className }: DownloadButtonProps) {
  const t = useT();

  return (
    <DeltaButton href={siteConfig.apkUrl} className={className}>
      <span className="inline-flex items-center gap-2">
        <Download className="h-5 w-5" />
        {t("common.downloadAndroid")}
      </span>
    </DeltaButton>
  );
}
