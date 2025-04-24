import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0 transition delay-50 duration-300"
          unoptimized
          width={160}
          height={160}
          priority
        />
      <h1 className="mb-8 text-2xl font-medium">
          Welcome !
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          My name is Sean, I am a Full-stack developer based in Brussels, Belgium.
        </p>
        <p>
          I have worked on plenty of projects with scopes ranging across Front-end, Back-end, DevOps and so much {""} <a href="/projects">more</a>.
        </p>
        <p>
          I am also passionate about connecting with people and learn from them, I would not be the person I am now without all the people I have met throughout my life.
        </p>
        <p>
          Feel free to {""} <a href="/contact">contact</a> me, it's always a pleasure. 
        </p>
        <p>
          Thank you for reading !
        </p>
      </div>
    </section>
  );
}
