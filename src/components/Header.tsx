import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const NameSVG = (props: any) => <svg width="138" height="16" viewBox="0 0 138 16" {...props} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M0.9 0.959999H12.42V4.2H4.68V6.72H11.7V9.96H4.68V15H0.9V0.959999ZM14.0484 15V0.959999H17.8284V15H14.0484ZM19.6207 15V0.959999H23.2027L29.4127 8.628H29.5207V0.959999H33.3007V15H29.7367L23.5087 7.35H23.4007V15H19.6207ZM35.107 15V0.959999H38.689L44.899 8.628H45.007V0.959999H48.787V15H45.223L38.995 7.35H38.887V15H35.107ZM55.9898 0.959999H67.5098V4.2H59.7698V6.36H66.7898V9.42H59.7698V11.76H67.5458V15H55.9898V0.959999ZM69.1734 0.959999H72.9534V11.76H79.7934V15H69.1734V0.959999ZM80.775 0.959999H84.555V11.76H91.395V15H80.775V0.959999ZM92.3766 15V0.959999H96.1566V15H92.3766ZM104.879 3.804C101.873 3.804 101.549 4.218 101.549 7.98C101.549 11.742 101.873 12.156 104.879 12.156C107.885 12.156 108.209 11.742 108.209 7.98C108.209 4.218 107.885 3.804 104.879 3.804ZM97.5888 7.98C97.5888 2.184 99.0468 0.743999 104.879 0.743999C110.711 0.743999 112.169 2.184 112.169 7.98C112.169 13.776 110.711 15.216 104.879 15.216C99.0468 15.216 97.5888 13.776 97.5888 7.98ZM117.103 15V4.2H112.801V0.959999H125.221V4.2H120.883V15H117.103ZM129.706 15V4.2H125.404V0.959999H137.824V4.2H133.486V15H129.706Z" />
</svg>

const LinkedInSVG = (props: any) => 
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
<g clipPath="url(#clip0_1_157)">
<path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" />
</g>
<defs>
<clipPath id="clip0_1_157">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>

const TwitterSVG = (props: any) => 
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M23.953 4.57C23.0545 4.9656 22.1026 5.22674 21.128 5.345C22.1541 4.72825 22.9224 3.76104 23.291 2.622C22.34 3.177 21.286 3.581 20.164 3.806C19.4238 3.01443 18.4429 2.48942 17.3736 2.3125C16.3044 2.13558 15.2067 2.31665 14.2509 2.82759C13.2952 3.33853 12.5349 4.15075 12.0881 5.13812C11.6412 6.12549 11.533 7.23277 11.78 8.288C7.69 8.095 4.067 6.13 1.64 3.162C1.19879 3.91181 0.968664 4.76702 0.974 5.637C0.974 7.347 1.844 8.85 3.162 9.733C2.38086 9.70813 1.61697 9.49693 0.934 9.117V9.177C0.933557 10.3134 1.32627 11.4149 2.04551 12.2948C2.76474 13.1746 3.76621 13.7785 4.88 14.004C4.1583 14.1974 3.40241 14.2264 2.668 14.089C2.98412 15.067 3.59766 15.9219 4.42301 16.5345C5.24837 17.1471 6.24435 17.4867 7.272 17.506C5.53153 18.8719 3.38248 19.6133 1.17 19.611C0.78 19.611 0.391 19.588 0 19.544C2.25571 20.9883 4.87851 21.755 7.557 21.753C16.61 21.753 21.555 14.257 21.555 7.768C21.555 7.558 21.555 7.348 21.54 7.138C22.506 6.44286 23.3392 5.57981 24 4.59L23.953 4.57Z" />
</svg>

const GitHubSVG = (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
<path
  fillRule="evenodd"
  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
  clipRule="evenodd"
/>
</svg>

const navigation = [
    {
        name: 'Twitter',
        href: 'https://www.twitter.com/finnelliott0',
        icon: TwitterSVG,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/finnelliott',
        icon: LinkedInSVG,
    },
    {
        name: 'GitHub',
        href: 'https://www.github.com/finnelliott',
        icon: GitHubSVG,
    },
    {
        name: 'Email',
        href: 'mailto:finn@finnelliott.com',
        icon: EnvelopeIcon
    }
]


export default function Header() {
    return (
        <>
        <nav className="z-50 fixed top-0 w-full bg-gray-900 bg-opacity-20 border-b border-gray-400 border-opacity-25 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
                <Link href="/">
                    <span className="sr-only">Finn Elliott</span>
                    <NameSVG className="w-36 h-4 text-gray-50" />
                </Link>
                <ul className="flex space-x-6 items-center">
                    {navigation.map((item) => (
                        <li key={item.name} className="">
                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="w-5 h-5 text-gray-400 hover:text-gray-200 transition-all duration-200" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
        <div className="h-28"></div> {/* Spacer for nav bar */}
        </>
    )
}