import Link from "next/link";
import Image from "next/image";
import { GitHub, Linkedin, Instagram } from "react-feather";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TechnologyCard } from "@/components/technology-card";
import { ExperienceCard } from "@/components/experience-card";

export default function Home() {
  const technologies = [
    {
      imageSrc: "/technologies/js.svg",
      imageAlt: "Javascript logo",
      name: "Javascript",
    },
    {
      imageSrc: "/technologies/ts.svg",
      imageAlt: "Typescript logo",
      name: "Typescript",
    },
    {
      imageSrc: "/technologies/node.svg",
      imageAlt: "NodeJS logo",
      name: "NodeJS",
    },
    {
      imageSrc: "/technologies/nest.svg",
      imageAlt: "NestJS logo",
      name: "NestJS",
    },
    {
      imageSrc: "/technologies/adonis.svg",
      imageAlt: "Adonis logo",
      name: "Adonis",
    },
    {
      imageSrc: "/technologies/apollo-graphql.svg",
      imageAlt: "Apollo GraphQL logo",
      name: "Apollo GraphQL",
    },
    {
      imageSrc: "/technologies/html.svg",
      imageAlt: "HTML logo",
      name: "HTML",
    },
    {
      imageSrc: "/technologies/css.svg",
      imageAlt: "CSS logo",
      name: "CSS",
    },
    {
      imageSrc: "/technologies/react.svg",
      imageAlt: "React logo",
      name: "React",
    },
    {
      imageSrc: "/technologies/next.svg",
      imageAlt: "Next logo",
      name: "Next",
    },
    {
      imageSrc: "/technologies/vite.svg",
      imageAlt: "Vite logo",
      name: "Vite",
    },
    {
      imageSrc: "/technologies/gatsby.svg",
      imageAlt: "Gatsby logo",
      name: "Gatsby",
    },
    {
      imageSrc: "/technologies/tailwind.svg",
      imageAlt: "Tailwind logo",
      name: "Tailwind",
    },
    {
      imageSrc: "/technologies/radix.svg",
      imageAlt: "Radix UI logo",
      name: "Radix UI",
    },
    {
      imageSrc: "/technologies/shadcn.svg",
      imageAlt: "Shadcn UI logo",
      name: "Shadcn UI",
    },
    {
      imageSrc: "/technologies/jest.svg",
      imageAlt: "Jest logo",
      name: "Jest",
    },
    {
      imageSrc: "/technologies/cypress.svg",
      imageAlt: "Cypress logo",
      name: "Cypress",
    },
    {
      imageSrc: "/technologies/k6.svg",
      imageAlt: "K6 logo",
      name: "K6",
    },
    {
      imageSrc: "/technologies/npm.svg",
      imageAlt: "NPM logo",
      name: "NPM",
    },
    {
      imageSrc: "/technologies/yarn.svg",
      imageAlt: "Yarn logo",
      name: "Yarn",
    },
    {
      imageSrc: "/technologies/pnpm.svg",
      imageAlt: "Pnpm logo",
      name: "Pnpm",
    },
    {
      imageSrc: "/technologies/docker.svg",
      imageAlt: "Docker logo",
      name: "Docker",
    },
    {
      imageSrc: "/technologies/kubernetes.svg",
      imageAlt: "Kubernetes logo",
      name: "Kubernetes",
    },
    {
      imageSrc: "/technologies/aws.svg",
      imageAlt: "AWS logo",
      name: "AWS",
    },
    {
      imageSrc: "/technologies/terraform.svg",
      imageAlt: "Terraform logo",
      name: "Terraform",
    },
    {
      imageSrc: "/technologies/golang.svg",
      imageAlt: "Golang logo",
      name: "Golang",
    },
    {
      imageSrc: "/technologies/elastic.svg",
      imageAlt: "Elastic logo",
      name: "Elastic",
    },
    {
      imageSrc: "/technologies/elasticsearch.svg",
      imageAlt: "Elasticsearch logo",
      name: "Elasticsearch",
    },
    {
      imageSrc: "/technologies/logstash.svg",
      imageAlt: "Logstash logo",
      name: "Logstash",
    },
    {
      imageSrc: "/technologies/kibana.svg",
      imageAlt: "Kibana logo",
      name: "Kibana",
    },
    {
      imageSrc: "/technologies/kafka.svg",
      imageAlt: "Kafka logo",
      name: "Kafka",
    },
    {
      imageSrc: "/technologies/rabbitmq.svg",
      imageAlt: "RabbitMQ logo",
      name: "RabbitMQ",
    },
    {
      imageSrc: "/technologies/redis.svg",
      imageAlt: "Redis logo",
      name: "Redis",
    },
    {
      imageSrc: "/technologies/postgres.svg",
      imageAlt: "Postgres logo",
      name: "Postgres",
    },
    {
      imageSrc: "/technologies/graphql.svg",
      imageAlt: "GraphQL logo",
      name: "GraphQL",
    },
    {
      imageSrc: "/technologies/mongodb.svg",
      imageAlt: "MongoDB logo",
      name: "MongoDB",
    },
    {
      imageSrc: "/technologies/google-firebase.svg",
      imageAlt: "Firebase logo",
      name: "Firebase",
    },
    {
      imageSrc: "/technologies/prisma.svg",
      imageAlt: "Prisma logo",
      name: "Prisma",
    },
    {
      imageSrc: "/technologies/git.svg",
      imageAlt: "Git logo",
      name: "Git",
    },
    {
      imageSrc: "/technologies/github.svg",
      imageAlt: "Github logo",
      name: "Github",
    },
    {
      imageSrc: "/technologies/gitlab.svg",
      imageAlt: "Gitlab logo",
      name: "Gitlab",
    },
    {
      imageSrc: "/technologies/github-actions.svg",
      imageAlt: "Github Actions logo",
      name: "Github Actions",
    },
    {
      imageSrc: "/technologies/linux.svg",
      imageAlt: "Linux logo",
      name: "Linux",
    },
    {
      imageSrc: "/technologies/vercel.svg",
      imageAlt: "Vercel logo",
      name: "Vercel",
    },
    {
      imageSrc: "/technologies/datadog.svg",
      imageAlt: "Datadog logo",
      name: "Datadog",
    },
    {
      imageSrc: "/technologies/argocd.svg",
      imageAlt: "Argo logo",
      name: "Argo",
    },
    {
      imageSrc: "/technologies/figma.svg",
      imageAlt: "Figma logo",
      name: "Figma",
    },
  ];

  const experiences = [
    {
      imageSrc: "/wellhub-square-logo.svg",
      imageAlt: "Wellhub logo",
      title: "Wellhub - Software Engineer",
      period: "August 2025 - Present / New York, US.",
      context:
        "Wellhub is a global corporate wellness platform, present in 12 countries, connecting employees to gyms, therapy, nutrition, mindfulness, and sleep through a single subscription. I joined the Billing Platform team, responsible for the billing experience that serves the entire business, processing millions of transactions for users and companies worldwide. Our focus is to deliver efficient checkout and account management solutions, ensuring optimized conversion and scalability to support global growth.",
      activities: [
        "Develop and maintain solutions focused on payments, billing, and the checkout experience.",
        "Work with cross-functional teams and payment providers to improve global conversion and efficiency in billing flows.",
        "Research and execute strategic projects that impact B2B and B2C, including the creation of new payment mechanisms.",
        "Implement prototypes and experiments using practices such as MVP, A/B testing, and feature toggles for controlled rollout.",
        "Solve challenges related to scalability, systems architecture, and code quality.",
        "Ensure quality through automated testing and best engineering practices.",
      ],
    },
    {
      imageSrc: "/stone-square-logo.svg",
      imageAlt: "Stone logo",
      title: "Stone - Software Engineer",
      period: "January 2024 - August 2025 / Rio de Janeiro, Brazil.",
      context:
        "Stone is one of the biggest payments and finance companies in Brazil and Latin America. It offers payments and banking services to other big companies, so there are millions of users using its systems every day. I'm part of the platform and experience team.",
      achievements: [
        "I created security automations systems to validate and protect the company's intellectual property such as Codes, Assets and importante services.",
        "I created new products for engineering teams including applications to facilitate the analyzing, granting, revoking and auditing the access to company assets.",
        "I did code refactoring and performance improvements in several legacy applications using good practices such as Clean Code, Clean Architecture, Design Patterns and SOLID.",
      ],
    },
    {
      imageSrc: "/pagarme-square-logo.svg",
      imageAlt: "Pagar.me logo",
      title: "Pagar.me - Software Engineer",
      period: "September 2022 - December 2023 / Rio de Janeiro, Brazil.",
      context:
        "Pagar.me is one of the biggest payments and finance companies in Brazil. I was responsible for all the entire reading layer, for making performance improvements, code refactoring and attacking technical debts in several applications and services, working horizontally with all the company's teams.",
      achievements: [
        "I created a new reading layer model based on an event architecture using queue technologies that increased the performance by 30%, reduced operational cost and brought more reliability and consistency in storage data.",
        "I created important payments solutions that brought more clients and money to the company such as payment split, finance reports and dashboards, transfer security validations and authorization services.",
        "I did code refactoring and performance improvements in several legacy applications using good practices such as Clean Code, Clean Architecture, Design Patterns and SOLID.",
      ],
    },
    {
      imageSrc: "/mais-retorno-square-logo.svg",
      imageAlt: "Mais Retorno logo",
      title: "Mais Retorno - Fullstack Developer",
      period: "June 2021 - August 2022 / São Paulo, Brazil.",
      context:
        "Mais Retorno is a financial market and education company. It offers many tools for investors. I was responsible for planning, developing and improving new tools and products for the financial market, for fixing bugs and for helping my coworkers.",
      achievements: [
        "I built new and complex tools for the financial market that brought more clients and money to the company such as the assets and funds comparator, income simulator, fund tracker, fund and stock sheets, government bonds and direct treasury.",
        "I created a complete recurring subscription system so that members can have access to private financial tools, exclusive benefits and the company has a recurring monthly income.",
        "I did performance, SEO, accessibility, design and code refactoring in several web applications and services using good practices such as Clean Code, Clean Architecture, Design Patterns and SOLID.",
      ],
    },
  ];

  return (
    <main className="min-h-screen min-w-full w-full bg-black overflow-hidden">
      <Header />

      <section className="mx-auto max-w-7xl h-screen flex flex-col items-center justify-center p-5 gap-8 max-sm:mt-5">
        <h1 className="text-white text-center text-3xl sm:text-5xl font-semibold">
          Software Engineer
        </h1>

        <p className="max-w-5xl text-center leading-7 text-slate-11 font-normal">
          Brazilian software engineer with more than 5 years of professional experience and a background in planning, architecting, developing, scaling, securing, and maintaining large-scale web applications, microservices, and APIs in critical environments, serving millions of users daily, for the financial, banking, payment, e-commerce, education, security, health and wellbeing sectors.
        </p>

        <div className="flex flex-row gap-4">
          <Link
            href="https://github.com/gezielelyon"
            target="_blank"
            prefetch={false}
            aria-label="GitHub"
            className="p-3 rounded-lg border border-solid border-slate-6 hover:border-white transition duration-150 ease-in-out bg-black"
          >
            <GitHub size={22} color="#fff" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/gezielelyon"
            target="_blank"
            prefetch={false}
            aria-label="Linkedin"
            className="p-3 rounded-lg border border-solid border-slate-6 hover:border-white transition duration-150 ease-in-out bg-black"
          >
            <Linkedin size={22} color="#fff" />
          </Link>

          <Link
            href="https://www.instagram.com/gezielelyon/"
            target="_blank"
            prefetch={false}
            aria-label="Instagram"
            className="p-3 rounded-lg border border-solid border-slate-6 hover:border-white transition duration-150 ease-in-out bg-black"
          >
            <Instagram size={22} color="#fff" />
          </Link>
        </div>
      </section>

      <section
        id="companies"
        className="mx-auto max-w-7xl flex flex-col items-center p-5 mb-5"
      >
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-white text-3xl font-semibold">Companies</h2>
          <p className="max-w-[420px] text-center leading-7 lg:text-left text-slate-11 font-normal">
            Companies that trusted and trust my work.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-center mt-10 gap-10 lg:gap-16 xl:gap-20">
          <Image
            src="/mais-retorno.svg"
            alt="Mais Retorno logo"
            width={250}
            height={100}
            priority
            className="max-w-52 sm:max-w-72"
          />
          <Image
            src="/pagarme.svg"
            alt="Pagar.me logo"
            width={250}
            height={100}
            priority
            className="max-w-52 sm:max-w-72"
          />
          <Image
            src="/stone.svg"
            alt="Stone logo"
            width={250}
            height={100}
            priority
            className="max-w-52 sm:max-w-72"
          />
          <Image
            src="/wellhub.svg"
            alt="Wellhub logo"
            width={250}
            height={100}
            priority
            className="max-w-52 sm:max-w-72"
          />
        </div>
      </section>

      <section
        id="technologies"
        className="mx-auto max-w-7xl flex flex-col items-center p-5 mt-12 md:mt-20 mb-16 md:mb-5"
      >
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-white text-3xl font-semibold">Technologies</h2>
          <p className="text-center leading-7 lg:text-left text-slate-11 font-normal">
            Technologies that I have proficiency in, have worked with and/or
            work with.
          </p>
        </div>

        <div className="relative flex flex-wrap items-center justify-center mt-10 gap-3">
          {technologies.map((technology, index) => (
            <TechnologyCard
              key={index}
              imageSrc={technology.imageSrc}
              imageAlt={technology.imageAlt}
              name={technology.name}
            />
          ))}
        </div>
      </section>

      <section
        id="experiences"
        className="mx-auto max-w-7xl flex flex-col items-center p-5 mt-12 md:mt-20 mb-16 md:mb-5"
      >
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-white text-3xl font-semibold">Experiences</h2>
          <p className="text-center leading-7 lg:text-left text-slate-11 font-normal">
            Brief summary of the main experiences of my career.
          </p>
        </div>

        <div className="flex flex-col items-center mt-10 gap-5">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              imageSrc={experience.imageSrc}
              imageAlt={experience.imageAlt}
              title={experience.title}
              period={experience.period}
              context={experience.context}
              achievements={experience.achievements}
              activities={experience.activities}
            />
          ))}
        </div>
      </section>

      <section
        id="about-me"
        className="mx-auto max-w-7xl flex flex-col items-center p-5 mt-12 md:mt-20 mb-12 md:mb-20 gap-2"
      >
        <h2 className="text-white text-3xl font-semibold">About me</h2>

        <p className="text-center leading-7 text-slate-11 font-normal">
          I&apos;m passionate about programming and creating products and
          services that have value and solve some type of problem in society. I
          am always looking for new challenges that make me evolve as a person
          and professional. I hope to find people who, like me, have the desire
          to build great things.
        </p>
      </section>

      <Footer />
    </main>
  );
}
