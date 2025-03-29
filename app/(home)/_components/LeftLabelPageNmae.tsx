import { PageLabelProps } from "@/app/types";

function LeftLabelPageName({ pageName, label }: PageLabelProps) {
  return (
    <div className="flex left-6 top-24 flex-col items-center">
      <p className="text-2xl font-light">{label}</p>
      <div className="w-0.5 h-40 bg-gray-600 mt-4"></div>
      <p className="mt-15 rotate-90 text-sm text-purple-400 tracking-wide whitespace-nowrap">
        {pageName}
      </p>
    </div>
  );
}

export default LeftLabelPageName;
