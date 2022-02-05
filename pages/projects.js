import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSeo } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSeo title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <div>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Some of the projects I have worked on as a software developer.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              You can find more on my github.
            </p>
          </div>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
