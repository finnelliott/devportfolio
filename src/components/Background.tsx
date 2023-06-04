"use client";

import { Disclosure, Transition } from "@headlessui/react";
import Slide from "./Slide";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const experiences = [
    {
        role: "Freelance Marketer",
        date: "June 2022 - Present",
        body: <>I&apos;ve spent the past year supporting a number of small businesses with their marketing. I&apos;ve designed & developed websites for dentists, private investigators and pre-revenue startups. I&apos;ve also devised and implemented SEO and PPC marketing campaigns for dentists and lawyers.
        <ul>
            <li>Complete redesign and development of a local dental practice website. SEO site health increased from 63% to 99%. Search rankings for &apos;dentist in Gloucester&apos; and related terms increased significantly. Traffic increased by over 30%.</li>
            <li>MVP design and development for a beauty treatment talent recruitment platform. After months of time wasted by their previous contractor, I completed the build successfully within 3 weeks.</li>
            <li>Ongoing development work for a venture-backed property investment marketplace.</li>
        </ul></>
    },
    {
        role: "VC Analyst",
        company: "Capita Scaling Partner",
        date: "Jan 2021 - July 2021",
        body: <>Sourced and evaluated Series A startup investments for the corporate venturing arm of FTSE 250 company Capita.<ul><li>Outreach and initial meetings with startup founders.</li><li>Organisation and marketing of online &apos;Dragon&apos;s Den-style&apos; pitching events.</li><li>Financial modelling of investment opportunities. Presented findings to partners.</li></ul></>
    },
    {
        role: "BSc Business Administration",
        company: "University of Bath",
        date: "2018 - 2022",
        body: <><ul><li>Achieved a 2:1</li><li>Founded a profitable inter-city travel and events company for students. Built custom e-ticketing solution to minimise costs and sold out all events with effective social media marketing.</li></ul></>
    }
]

export default function Background() {
    return (
        <Slide>
            <h2 className="text-2xl font-medium text-gray-200 capitalize">Background</h2>
            <p className="text-gray-400 mt-2">These are a few of my most recent and relevant&nbsp;experiences.</p>
            <ul className="flex flex-col space-y-4">
                {experiences.map((experience, index) => (
                    <>
                        <Disclosure
                            as="li"
                            className="mt-8 group hover:bg-gray-950 rounded-md transition-all duration-500"
                        >
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="group flex w-full justify-between rounded-md transition-all duration-500 text-left text-sm font-medium focus:outline-none py-4 px-4">
                                    <div className="w-full flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <h3 className="text-xl font-medium text-gray-200">{experience.role}</h3>
                                            {experience.company && <p className="text-gray-400 text-sm mt-2">{experience.company}</p>}
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <p className="text-gray-400 text-sm">{experience.date}</p>
                                            <ChevronUpIcon
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-gray-500 group-hover:rotate-90 transition-all duration-500`}
                                            />
                                        </div>
                                    </div>
                                </Disclosure.Button>
                                <Transition
                                    show={open}
                                    enter="transition duration-500 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-500 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                <Disclosure.Panel static className={classNames(open ? "max-h-[24rem]" : "max-h-0", "h-full w-full transition-all duration-500")}>
                                    <div className="prose w-full px-4 pt-2 pb-4 text-sm text-gray-500">
                                    {experience.body}
                                    </div>
                                </Disclosure.Panel>
                                </Transition>
                                </>
                            )}
                        </Disclosure>
                    </>
                ))}
            </ul>
        </Slide>
    )
}