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
      imageSrc: "/stone-square-logo.svg",
      imageAlt: "Stone logo",
      title: "Stone - Fullstack Developer",
      period: "January 2024 - Present / Rio de Janeiro, Brazil.",
      description:
        "Today I'm part of the platform team called CodeFlow. We are responsible for creating products and services for the engineering teams, for analyzing and granting access to the company's assets, and for creating security solutions for the company.",
    },
    {
      imageSrc: "/pagarme-square-logo.svg",
      imageAlt: "Pagar.me logo",
      title: "Pagar.me - Backend Developer",
      period: "September 2022 - December 2023 / Rio de Janeiro, Brazil.",
      description:
        "I was part of the Atlas team and we were responsible for the entire reading layer, for attacking technical debts and for making performance improvements across all systems, working horizontally with the other teams in the company.",
    },
    {
      imageSrc: "/mais-retorno-square-logo.svg",
      imageAlt: "Mais Retorno logo",
      title: "Mais Retorno - Fullstack Developer",
      period: "June 2021 - August 2022 / São Paulo, Brazil.",
      description:
        "I actively participated in the frontend (Site) and backend (APIs), creating new features, making performance improvements, refactoring the code with good practices, improving SEO on the pages, and creating new tools such as the asset comparator, income simulator, user signatures, share sheets, government bonds and direct treasury.",
    },
  ];

  return (
    <main className="min-h-screen min-w-full w-full bg-black overflow-hidden">
      <Header />

      <section className="mx-auto max-w-7xl h-screen flex flex-col items-center justify-center p-5 gap-5">
        <h1 className="text-white text-center text-4xl sm:text-5xl font-semibold">
          Software Engineer
        </h1>

        <p className="max-w-[800px] text-center leading-7 text-slate-11 font-normal">
          I create experience through lines of code! In addition, I&apos;m
          always studying and looking for new challenges, because in technology
          change is always present and evolution must be continuous!
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
            href="https://www.linkedin.com/in/gezielelyon/?locale=en_US"
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

      <figure className="pointer-events-none absolute -top-20 left-0 right-0 z-0 mx-auto hidden h-full w-full select-none lg:block">
        <Image
          src="/bghero.png"
          alt="Light ray background"
          width={2048}
          height={1000}
          priority
          className="top-0 right-0 absolute"
        />
      </figure>

      <section
        id="companies"
        className="mx-auto max-w-7xl flex flex-col items-center p-5 mb-5"
      >
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-white text-3xl font-semibold">Companies</h2>
          <p className="max-w-[420px] text-center leading-7 lg:text-left text-slate-11 font-normal">
            Companies that trusted and trust my work.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center mt-10 gap-10 md:gap-20">
          <Image
            src="/mais-retorno.svg"
            alt="Mais Retorno logo"
            width={250}
            height={100}
            priority
            className="max-w-52 sm:max-w-64"
          />
          <Image
            src="/pagarme.svg"
            alt="Pagar.me logo"
            width={250}
            height={100}
            priority
            className="max-w-52 sm:max-w-64"
          />
          <Image
            src="/stone.svg"
            alt="Stone logo"
            width={250}
            height={100}
            priority
            className="max-w-52 sm:max-w-64"
          />
          <Image
            src="/zero-tributo.svg"
            alt="Zero Tributo logo"
            width={250}
            height={100}
            priority
            className="max-w-52 sm:max-w-64"
          />
        </div>
      </section>

      <section
        id="technologies"
        className="mx-auto max-w-7xl flex flex-col items-center p-5 mt-12 md:mt-20 mb-16 md:mb-5"
      >
        <div className="flex flex-col items-center gap-2">
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
        <div className="flex flex-col items-center gap-2">
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
              description={experience.description}
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
