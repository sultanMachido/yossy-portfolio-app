import ProjectCard from "./ProjectCard";
import { Carousel } from "react-responsive-carousel";
import SkillsList from "./SkillsList";
import { useState, useRef } from "react";
import { gsap } from "gsap";

type ProjectsType = {
  image: string;
  title: string;
  link: string;
};
type ProjectListType = {
  projects: ProjectsType[];
};

const ProjectList = ({ projects }: ProjectListType) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const contentRef3 = useRef<HTMLDivElement>(null);
  const contentRef4 = useRef<HTMLDivElement>(null);

  const toggleContent = () => {
    if (!contentRef.current) return;

    if (!open) {
      gsap.to(contentRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }

    setOpen(!open);
  };

  const toggleContent2 = () => {
    if (!contentRef2.current) return;

    if (!open2) {
      gsap.to(contentRef2.current, {
        height: "auto",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef2.current, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }

    setOpen2(!open2);
  };

  const toggleContent3 = () => {
    if (!contentRef3.current) return;

    if (!open3) {
      gsap.to(contentRef3.current, {
        height: "auto",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef3.current, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }

    setOpen3(!open3);
  };

  const toggleContent4 = () => {
    if (!contentRef4.current) return;

    if (!open4) {
      gsap.to(contentRef4.current, {
        height: "auto",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef4.current, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }

    setOpen4(!open4);
  };

  return (
    <>
      <div className="w-[90%] md:w-[80%] mx-auto mb-2 rounded-md bg-black p-5">
        <div className="text-white p-2">
          <p className="text-white font-bold text-lg text-center">
            End-to-End Business Concept Development & Operational Launch
          </p>
        </div>
        <div>
          <p className="text-sm sm:text-base leading-relaxed sm:leading-loose text-white">
            The founder identified a clear market gap after struggling to find
            high-quality furniture that met expectations. He wanted to build a
            business that would provide well-crafted, premium furniture to
            customers who valued quality and design.
          </p>
          <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
            While the idea was strong, it needed structure, proper research,
            financial planning, and a clear execution plan to become a real,
            sustainable business.
          </p>
          <div
            ref={contentRef}
            style={{ height: 0, overflow: "hidden" }}
            className="text-sm sm:text-base text-white"
          >
            <p className="font-bold pt-10 text-md">Mandate</p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Provide end-to-end guidance to validate the business concept,
              develop a structured business plan with financial projections,
              establish the business's physical and operational structure, and
              oversee implementation from idea to full launch.
            </p>
            <p className="font-bold pt-10 text-md">Work Done</p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              The engagement began with market research to assess demand for
              premium furniture, customer expectations around quality and
              finish, competitive pricing, and positioning gaps within the
              segment. Industry analysis was conducted to validate commercial
              viability and capital requirements.
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              A detailed five-year business plan was developed, covering revenue
              projections, cost structure, capital expenditure planning,
              break-even analysis, and cash flow forecasting. Financial
              assumptions were stress-tested to ensure sustainability prior to
              capital deployment.
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Supplier sourcing was conducted both locally and internationally.
              International vendor identification and partnership development
              were conducted with manufacturers in Turkey to secure high-quality
              furniture aligned with the brand’s positioning. Supplier terms,
              logistics considerations, and procurement timelines were evaluated
              to ensure supply consistency and margin viability
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Location scouting and showroom setup were managed end-to-end.
              Renovation vendors were identified and supervised, and the
              physical space was structured to reflect premium brand standards.
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Operational systems were designed to support daily execution,
              including inventory tracking, supplier coordination, customer
              engagement processes, and basic financial reporting. Recruitment
              of operational staff was conducted, followed by onboarding and
              role-based training to ensure service quality and accountability.
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              A go-to-market approach was developed covering brand positioning,
              digital marketing, and targeted outreach to residential and
              commercial clients. Post-launch reviews were conducted to assess
              operational performance and refine strategy where necessary.
            </p>
            <p className="font-bold pt-10 text-md">Outcome</p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              The Furniture Booth transitioned from concept to a fully
              operational retail business with validated financial projections,
              structured operational systems, and established international
              supplier partnerships. A premium showroom was successfully
              launched in Lagos, Nigeria, supported by trained staff, defined
              workflows, and active customer acquisition channels.
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              The business moved from an idea to a functioning enterprise with
              documented processes, a clear supply chain, and a foundation for
              sustainable growth.
            </p>
          </div>
          <button onClick={toggleContent} className="text-secondaryColor mt-2">
            {open ? "View Less" : "View More"}
          </button>
        </div>
        <SkillsList
          skills={[
            { skill: "Market & Industry Feasibility Research" },
            { skill: "Five-Year Financial Modelling & Break-Even Analysis" },
            { skill: "Business Plan Development" },
            { skill: "Vendor Sourcing & Evaluation Framework" },
            { skill: "Recruitment & Role Structuring" },
            { skill: "Project Management" },
          ]}
        />
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto mb-2 rounded-md bg-black p-5">
        <div className="text-white p-2">
          <p className="text-white font-bold text-lg text-center">
            Cross-Border Market Entry & Commercial Ecosystem Design
          </p>
        </div>
        <div>
          <p className="text-sm sm:text-base leading-relaxed sm:leading-loose text-white">
            A technology manufacturer preparing to enter multiple West African
            markets sought to compete in the affordable-premium smartphone
            segment. While product readiness was established, the organisation
            lacked clarity on market positioning, distribution structure,
            financing accessibility, and regulatory sequencing across both
            countries. A structured, risk-mitigated entry architecture was
            required to avoid costly missteps in highly competitive markets.
          </p>

          <div
            ref={contentRef2}
            style={{ height: 0, overflow: "hidden" }}
            className="text-sm sm:text-base text-white"
          >
            <p className="font-bold pt-10 text-md">Mandate</p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Design an end-to-end cross-border market entry strategy covering
              competitive positioning, pricing logic, channel architecture,
              financing ecosystem integration, regulatory pathway, and phased
              geographic rollout.
            </p>
            <p className="font-bold pt-10 text-md">Work Done</p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              The engagement began with a market and competitive landscape
              assessment across the selected West African countries to
              understand pricing bands, dominant players, margin structures, and
              channel control dynamics. Attention was paid to the
              affordable-premium segment to determine whitespace positioning and
              differentiation levers
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Customer behaviour was analysed to identify purchasing triggers,
              device replacement cycles, and second-phone usage patterns. Based
              on these insights, a clear positioning strategy was developed to
              balance affordability, perceived quality, and aspirational
              branding within the mass-premium category.
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              A multi-layer distribution architecture was then defined,
              specifying the roles of national distributors, regional
              wholesalers, and retail partners, and mapping margin expectations
              and channel incentives. Recognising affordability constraints in
              the target segment, a financing overlay was incorporated,
              identifying viable BNPL and device-financing partners to expand
              accessibility without eroding pricing integrity.
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Regulatory and compliance requirements in both countries were
              sequenced into the rollout plan, ensuring import approvals,
              certifications, and distribution readiness were aligned with
              launch timelines. A phased 12–24-month commercial roadmap was
              designed.
            </p>
            <p className="font-bold pt-10 text-md">Outcome</p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              The organisation received a commercially grounded market entry
              blueprint spanning the selected countries, with clear positioning,
              channel logic, financing integration, and rollout sequencing.
              Entry risk was reduced through structured ecosystem mapping, and
              leadership obtained a phased growth pathway aligned to capital
              deployment and operational capacity.
            </p>
          </div>
          <button onClick={toggleContent2} className="text-secondaryColor mt-2">
            {open2 ? "View Less" : "View More"}
          </button>
        </div>
        <SkillsList
          skills={[
            {
              skill:
                "Quantitative Market Surveys (Consumer Demand & Price Sensitivity)",
            },
            { skill: "Stakeholder Interviews" },
            { skill: "Market Sizing & Revenue Potential Analysis" },
            { skill: "Stakeholder Management" },
            { skill: "6 Forces Model" },
            { skill: "GTM" },
          ]}
        />
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto mb-2 rounded-md bg-black p-5">
        <div className="text-white p-2">
          <p className="text-white font-bold text-lg text-center">
            Process Optimisation & SOP Development
          </p>
        </div>
        <div>
          <p className="text-sm sm:text-base leading-relaxed sm:leading-loose text-white">
            A fast-growing food and hospitality business required an operational
            structure to support scale and consistency. While demand was strong,
            core processes across kitchen operations, inventory management,
            staff coordination, and reporting lacked standardisation. The
            business needed documented systems to reduce inefficiencies and
            improve control.
          </p>

          <div
            ref={contentRef3}
            style={{ height: 0, overflow: "hidden" }}
            className="text-sm sm:text-base text-white"
          >
            <p className="font-bold pt-10 text-md">Mandate</p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Conduct a current-state operational assessment, identify process
              gaps, and design structured Standard Operating Procedures (SOPs)
              to improve efficiency, accountability, and scalability.
            </p>
            <p className="font-bold pt-10 text-md">Work Done</p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              The engagement began with a current-state assessment using a
              Day-in-the-Life-of (DILO) to observe real-time workflows across
              kitchen and service operations. Workflows were observed and
              mapped, including food production processes, order management,
              inventory tracking, staff communication channels, and reporting
              routines.
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Workflow mapping revealed inconsistencies in task ownership,
              communication handoffs between teams, stock reconciliation
              practices, and documentation discipline. Bottlenecks and risk
              points were analysed to determine root causes rather than
              surface-level symptoms.
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Key operational processes were redesigned and documented into
              structured SOPs covering food production flow, order handling,
              inventory management, cash reconciliation, escalation procedures,
              and defined role responsibilities.
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Standardised templates, tracking logs, escalation pathways, and
              control checkpoints were introduced to reduce dependency on
              informal communication and improve operational visibility. The
              redesigned processes were aligned with the business's practical
              realities to ensure usability and adoption.
            </p>
            <p className="font-bold pt-10 text-md">Outcome</p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              The business transitioned from informal, person-dependent
              operations to structured, documented systems. Operational clarity
              improved, role ambiguity was reduced, and process consistency
              increased. The introduction and implementation of SOPs
              strengthened internal controls, improved coordination among teams,
              and laid a scalable foundation for future growth.
            </p>
          </div>
          <button onClick={toggleContent3} className="text-secondaryColor mt-2">
            {open3 ? "View Less" : "View More"}
          </button>
        </div>
        <SkillsList
          skills={[
            {
              skill: "Day-in-the-Life-Of (DILO) Workflow Observation",
            },
            { skill: "Process Mapping & Bottleneck Analysis" },
            { skill: "Gap Analysis Framework" },
            { skill: "SOP Development & Documentation Structuring" },
            { skill: "Operational Control & Tracking Templates" },
            { skill: "Visio" },
          ]}
        />
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto mb-2 rounded-md bg-black p-5">
        <div className="text-white p-2">
          <p className="text-white font-bold text-lg text-center">
            Corporate Strategy Renewal & Portfolio Realignment
          </p>
        </div>
        <div>
          <p className="text-sm sm:text-base leading-relaxed sm:leading-loose text-white">
            At the close of its previous five-year strategy, a diversified
            investment holding company with over 10 portfolio businesses needed
            a clear direction for its next growth phase. During the prior cycle,
            the portfolio had expanded unevenly; some businesses outperformed,
            others lagged, and alignment across people, process, and technology
            had weakened. A complete strategic reset was required
          </p>

          <div
            ref={contentRef4}
            style={{ height: 0, overflow: "hidden" }}
            className="text-sm sm:text-base text-white"
          >
            <p className="font-bold pt-10 text-md">Mandate</p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Design and deliver a renewed five-year corporate strategy that
              assessed past performance, rationalised the expanded portfolio,
              clarified enterprise direction, and cascaded aligned strategic
              initiatives across all portfolio businesses.
            </p>
            <p className="font-bold pt-10 text-md">Work Done</p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              The process began with a comprehensive current-state assessment to
              evaluate delivery against the previous strategy. Portfolio
              performance, capability maturity, governance structures, and
              operational systems were examined across people, process, and
              technology. Misalignment between certain businesses and the
              corporate thesis became evident, alongside gaps in automation,
              documentation, and accountability.
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              A seven-day strategy renewal process followed. At the Board level,
              the organisation revisited its long-term ambition, reassessed its
              vision and mission, and evaluated portfolio positioning using the
              BCG matrix to distinguish growth engines from underperforming
              assets. A refreshed SWOT informed new corporate objectives and the
              definition of 6 strategic pillars to anchor the next five years.
            </p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              Management-level sessions then translated these pillars into
              action. Through structured breakouts and facilitated working
              sessions, strategic initiatives were developed, stress-tested, and
              aligned to the enterprise direction. Each initiative was made
              time-bound, measurable, and assigned accountable ownership using a
              RACI framework, with embedded KPIs to enable disciplined
              execution.
            </p>
            <p className="font-bold pt-10 text-md">Outcome</p>
            <p className="pt-2 text-sm sm:text-base  leading-relaxed sm:leading-loose text-white">
              The organisation adopted a renewed five-year strategy grounded in
              precise portfolio positioning and enterprise-wide alignment. All
              13 portfolio businesses developed structured initiatives directly
              linked to corporate pillars, each supported by defined KPIs and
              ownership. The strategy moved from aspirational planning to a
              measurable execution framework with strengthened governance
              oversight and reduced strategic drift.
            </p>
          </div>
          <button onClick={toggleContent4} className="text-secondaryColor mt-2">
            {open4 ? "View Less" : "View More"}
          </button>
        </div>
        <SkillsList
          skills={[
            {
              skill:
                "Current-State Assessment Framework (Strategy, People, Process, Technology lens)",
            },
            { skill: "BCG Growth-Share Portfolio Matrix" },
            { skill: "SWOT Analysis (Board & Management)" },
            { skill: "RACI Accountability Mapping" },
          ]}
        />
      </div>
    </>
  );
};

export default ProjectList;
