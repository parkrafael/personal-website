import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

interface WorkBlockProps {
  position: string;
  company: string;
  url: string;
  timeline?: string;
  firstDescription?: string;
  secondDescription?: string;
  thirdDescription?: string;
}

export default function WorkBlock(props: WorkBlockProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between mb-[8px]">
        <div className="flex items-center group gap-[2px]">
          <a
            href={props.url}
            className="font-medium transition-all cursor-pointer group-hover:text-orange-500"
          >
            {props.position}, {props.company}
          </a>
          <ArrowUpRightIcon className="size-5 transition-transform group-hover:translate-x-[2px] group-hover:translate-y-[-2px] group-hover:text-orange-500" />
        </div>
        <span className="text-slate-500">{props.timeline}</span>
      </div>
      <p>{props.firstDescription && `• ${props.firstDescription}`}</p>
      <p>{props.secondDescription && `• ${props.secondDescription}`}</p>
      <p>{props.thirdDescription && `• ${props.thirdDescription}`}</p>
    </div>
  );
}
