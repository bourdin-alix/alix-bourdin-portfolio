import { Project } from "../data/projects";

interface Props extends Pick<Project, "status"> {
  labelLive: string;
  labelDev: string;
}

export function StatusBadge({ status, labelLive, labelDev }: Props) {
  return status === "live" ? (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
      ● {labelLive}
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-50 text-yellow-700">
      ⚙ {labelDev}
    </span>
  );
}
