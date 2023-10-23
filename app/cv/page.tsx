"use client";

export default function Cv() {
  const cv = {
    about: {
      name: "Jordi Enric",
      title: "Senior Frontend Developer - 7 years of experience",
      website: "https://jordienric.com",
      email: "jordi.err@gmail.com",
      github: "github.com/jordienr",
      linkedin: "linkedin.com/in/jordienric",
    },
    techSkills: {
      title: "Tech Skills",
      items: [
        "React",
        "Typescript",
        "NextJS",
        "React Query, Zustand",
        "TailwindCSS",
        "RadixUI & ShadcnUI",
        "SEO, SEM, GTM",
        "Accessibility",
        "Jest",
        "React Testing Library",
        "Cypress & Playwright",
        "Git",
        "Storybook",
        "Figma",
        "Turborepo",
        "Leadership",
        "Technical writing",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Senior Frontend Developer",
          company: "Clidrive + Clibrain",
          date: "November 2022 - Present",
          description:
            "I am responsible for the frontend architecture, code quality, performance, SEO and documentation. I also lead the frontend team and do code reviews, mentoring and interviewing candidates. My team at Clidrive became Clibrain AI in June 2023.",
          achievements: [
            "Leading a multidisciplinary team of 5 building APIs and web apps",
            "Built a ChatGPT-like app which reached 300 B2B customers in 2 months",
            "Built the documentation website for our APIs",
            "Wrote the docs in English and Spanish for our APIs",
            "Built a dashboard for developers to manage API keys, monitor usage, manage billing, etc.",
            "Set up all observability tooling, product analytics and error tracking for the frontend",
          ],
        },
        {
          role: "Senior Frontend Developer",
          company: "Ninety Nine",
          date: "July 2020 - November 2022",
          description:
            "I was responsible for the frontend architecture, code quality, performance and building of the web trading application. I also led the frontend team and did code reviews, mentoring and interviews.",
          achievements: [
            "Built the first version of the web trading application in 6 months",
            "Built a component library in VueJS and Web Components",
            "Designed and developed an API Client in TypeScript for banks to use our APIs in their trading applications",
            "Led the development and implementation of the new design system",
          ],
        },
        {
          role: "Senior Frontend Developer",
          company: "Innovation.es",
          date: "July 2019 - July 2020",
          description:
            "I was responsible for building a mobile PWA for public transport drivers in Barcelona, Paris and many european cities to manage their routes and schedules in real time.",
          achievements: [
            "Built a mobile PWA and component library in React and Typescript",
            "Built a TypeScript SDK for other teams to integrate with the APIs",
            "Led the development and implementation of the first consumer-facing application",
            "Built the documentation and storybook websites for our APIs",
          ],
        },
        {
          role: "Frontend Developer",
          company: "Previous companies",
          date: "2016 - 2019",
          description:
            "Working as a frontend developer in different companies in Mallorca. Sometimes full-time, sometimes as a freelance developer.",
          achievements: [
            "Built a MICE management platform in React and Typescript for Meliá Hotels International",
            "Built a React Native app for a local startup",
            "Built websites as a freelance developer for local businesses",
          ],
        },
      ],
      education: {
        title: "Education",
        items: [],
      },
    },
  };

  return (
    <div className="bg-slate-100 m-4 mb-24 print:bg-white print:m-0 print:mb-0">
      <div className="print:hidden max-w-4xl mx-auto flex justify-end">
        <button
          onClick={() => window.print()}
          className="px-3 py-1 rounded-lg text-sm mb-2 bg-white shadow-sm"
        >
          Print
        </button>
      </div>
      <div className="px-4 text-sm text-slate-700 max-w-4xl print:max-w-none print:py-1 print:shadow-none mx-auto bg-white py-2 shadow-sm space-y-4">
        <section className="my-4 flex justify-between">
          <div>
            <h1 className="font-medium">{cv.about.name}</h1>
            <p className="text-slate-700">{cv.about.title}</p>
          </div>
          <div className="text-right text-xs">
            <ul>
              <li>{cv.about.email}</li>
              <li>{cv.about.github}</li>
              <li>{cv.about.linkedin}</li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="font-medium border-b">Skills</h2>
          <ul className="grid grid-cols-5 mt-2 text-xs">
            {cv.techSkills.items.map((skill) => (
              <li className="my-0.5" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-medium border-b">{cv.experience.title}</h2>
          <ul className="text-sm divide-y">
            {cv.experience.items.map((item) => (
              <li className="py-3" key={item.company}>
                <div className="flex gap-2 items-center">
                  <h3 className="font-medium text-base">
                    {item.role} @ {item.company}
                  </h3>{" "}
                  ·<p>{item.date}</p>
                </div>
                <p className="mt-2">{item.description}</p>
                <ul className="flex flex-col gap-1 mt-2">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>· {achievement}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
