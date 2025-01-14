import ProjectBlock from "@/components/ProjectBlock";
import WorkBlock from "@/components/WorkBlock";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="mx-auto my-[10vh] w-[750px] max-w-[80%]">
      <div className="flex flex-row justify-between items-center mb-[56px]">
        <p className="font-medium text-lg">Rafael Park</p>
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/parkrafael"
            className="cursor-pointer hover:text-orange-500 transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/parkrafael"
            className="cursor-pointer hover:text-orange-500 transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:parkrafael11@gmail.com"
            className="cursor-pointer hover:text-orange-500 transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      {/* ----- About Me ----- */}
      <p className="font-medium text-lg mb-[24px]">🐥 About Me</p>
      <p className="font-normal mb-[56px]">
        Hello! I&apos;m Rafael, a fifth-year Computer Science student at The
        University of British Columbia. Currently, I&apos;m working at
        Cognitive3D as a Software Engineer Co-op, working with their analytics
        platform that measures human behavior in VR/AR simulations.
      </p>

      {/* ----- Work Experience ----- */}
      <p className="font-medium text-lg mb-[24px]">💼 Work Experience</p>
      <div className="flex flex-col gap-[24px] mb-[56px]">
        <WorkBlock
          position="Software Engineer Co-op"
          company="Cognitive3D"
          url="https://cognitive3d.com/"
          timeline="Jan 2025 - Present"
          firstDescription="Developing VR applications for Meta Quest, HTC Vive, and Pico headsets
        in Unity and C# to showcase the analytic features of Cognitive3D's SDK."
          secondDescription="Implementing CI/CD pipelines with GitHub Actions and Codacy to
        streamline development and deployment processes."
        />
        <WorkBlock
          position="Research Analyst Co-op"
          company="Alphabyte"
          url="https://alphabytesolutions.com/"
          timeline="Jan 2024 - Apr 2024"
          firstDescription="Created custom Power BI dashboards to track and analyze internal team
          performance metrics, providing insights that resulted in a 20%
          increase in operational efficiency."
          secondDescription="Contributed to the planning and
          execution of 10+ consulting projects, delivering digital integration
          solutions, including market research, vendor assessment, and cost
          analysis, to enhance client services."
        />
      </div>

      {/* ----- Extracurricular Activities ----- */}
      <p className="font-medium text-lg mb-[24px]">
        🌱 Extracurricular Activities
      </p>
      <div className="flex flex-col gap-[24px] mb-[56px]">
        <WorkBlock
          position="Software Developer"
          company="UBC Emerging Media Labs"
          url="https://eml.ubc.ca"
          timeline="Nov 2024 - Present"
          firstDescription="Collaborating as part of a 6-person cross-functional team to develop a VR studio in Unreal Engine, enabling artists to
perform and record with virtual instruments in realistic and hard-to-replicate acoustic environments such as caves
and forests."
        />
        <WorkBlock
          position="Software Developer"
          company="UBC Launch Pad"
          url="https://www.ubclaunchpad.com/"
          timeline="Sep 2024 - Present"
          firstDescription="Leading the back-end development as part of an 8-person cross-functional
        team, planning, designing, and building a clinical logging platform for
        FlowLeaflets, a non-profit organization providing speciality-specific
        clinical logbooks to healthcare professionals."
        />
      </div>

      {/* ----- Projects ----- */}
      <p className="font-medium text-lg mb-[24px]">🚀 Projects</p>
      <div className="flex flex-col mb-[56px]">
        <ProjectBlock
          title="Clinical Logging Software"
          url="https://github.com/ubclaunchpad/clinical-logging"
          firstDescription="Developing a web application to scan, digitize, and store information
          from handwritten clinical records from FlowLeaflet's clinical
          logbooks."
          secondDescription="Building a RESTful API with Express.js to store and retrieve
          data from Supabase, ensuring secure and efficient access to user
          information and clinical records."
        />
      </div>
    </div>
  );
}
