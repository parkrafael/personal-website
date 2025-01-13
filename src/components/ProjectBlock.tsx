import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

interface ProjectBlockProps {
  title: string;
  url: string;
  firstDescription?: string;
  secondDescription?: string;
  thirdDescription?: string;
}

export default function ProjectBlock(props: ProjectBlockProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between mb-[8px]">
        <div className="flex items-center group gap-[2px]">
          <a
            href={props.url}
            className="font-medium transition-all cursor-pointer group-hover:text-orange-500"
          >
            {props.title}
          </a>
          <ArrowUpRightIcon className="size-5 transition-transform group-hover:translate-x-[2px] group-hover:translate-y-[-2px] group-hover:text-orange-500" />
        </div>
      </div>
      <p>{props.firstDescription && `• ${props.firstDescription}`}</p>
      <p>{props.secondDescription && `• ${props.secondDescription}`}</p>
      <p>{props.thirdDescription && `• ${props.thirdDescription}`}</p>
    </div>
  );
}
