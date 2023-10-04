"use client"
import { useState, Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Dialog, Transition } from "@headlessui/react"
import { TfiPackage } from "react-icons/tfi"
import { FiPlusSquare, FiCalendar } from "react-icons/fi"
import { FaTable } from "react-icons/fa"
import { MdOutlineWebStories, MdOutlineFolderSpecial } from "react-icons/md"
import { HiOutlineDocumentReport } from "react-icons/hi"
import { BsCalendarDate } from "react-icons/bs"

import {
	CalendarIcon,
	ChartPieIcon,
	Cog6ToothIcon,
	DocumentDuplicateIcon,
	FolderIcon,
	HomeIcon,
	UsersIcon,
	XMarkIcon,
	ChatBubbleLeftRightIcon,
	XCircleIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	SparklesIcon,
	ClipboardDocumentCheckIcon,
	ClipboardDocumentListIcon,
	ClipboardDocumentIcon,
	ArchiveBoxXMarkIcon,
	ReceiptRefundIcon,
} from "@heroicons/react/24/outline"

import bikeShopLogo from "../../../assets/Images/bikeShopLogo.png"
import { Bars3Icon } from "@heroicons/react/20/solid"

const navigation = [
	{ name: "Dashboard", href: "/admin/dashboard", icon: HomeIcon },
	{
		name: "Products",
		href: "/admin/products",
		icon: TfiPackage,
		subLinks: [
			{ label: "Add New", route: "/admin/products/add-new", icon: FiPlusSquare },
			{ label: "Product Table", route: "/admin/products/table", icon: FaTable },
			{ label: "Product Rollout", route: "/admin/products/rollout", icon: MdOutlineWebStories },
			{ label: "Promotions", route: "/admin/products/promotions", icon: MdOutlineFolderSpecial },
		],
	},
	{ name: "Ads", href: "/admin/ads", icon: SparklesIcon },
	{
		name: "Orders",
		href: "/admin/orders",
		icon: FolderIcon,
		subLinks: [
			{ label: "All Orders", route: "/admin/orders", icon: ClipboardDocumentListIcon },
			{ label: "Pending Orders", route: "/admin/orders/pending", icon: ClipboardDocumentIcon },
			{ label: "Completed Orders", route: "/admin/orders/completed", icon: ClipboardDocumentCheckIcon },
			{ label: "Cancelled Orders", route: "/admin/orders/cancelled", icon: ArchiveBoxXMarkIcon },
			{ label: "Refunded Orders", route: "/admin/orders/refunded", icon: ReceiptRefundIcon },
		],
	},
	{
		name: "Calendar",
		href: "/admin/calendar",
		icon: CalendarIcon,
		subLinks: [
			{ label: "My Calendar", route: "/admin/calendar/myCalendar", icon: FiCalendar },
			{ label: "Company Calendar", route: "/admin/calendar/CoCalendar", icon: BsCalendarDate },
		],
	},
	{ name: "Documents", href: "/admin/documents", icon: DocumentDuplicateIcon },
	{
		name: "Reports",
		href: "/admin/reports",
		icon: ChartPieIcon,
		subLinks: [{ label: "Saved Reports", route: "/admin/reports/savedReports", icon: HiOutlineDocumentReport }],
	},
	{ name: "Users", href: "/admin/users", icon: UsersIcon },
	{ name: "Chat", href: "/admin/chat", icon: ChatBubbleLeftRightIcon },
]

const teams = [
	{ id: 1, name: "Sales", href: "/admin/chat/sales", initial: "S" },
	{ id: 2, name: "Warehouse", href: "/admin/chat/warehouse", initial: "W" },
	{ id: 3, name: "Management", href: "/admin/chat/management", initial: "M" },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

const TailwindUISidebarLayout = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const [activeNavItem, setActiveNavItem] = useState(null) // Initialize with null
	const [expandedItems, setExpandedItems] = useState({})

	const handleNavItemClick = (item) => {
		setActiveNavItem(item)
		setSidebarOpen(false) // Close the sidebar when an item is clicked
		console.log(item)
	}

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen)
	}

	const toggleAccordion = (itemName) => {
		setExpandedItems((prevExpandedItems) => ({
			...prevExpandedItems,
			[itemName]: !prevExpandedItems[itemName],
		}))
	}

	return (
		<div>
			{/* Mobile Sidebar */}
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog as="div" className="fixed inset-0 z-50" onClose={setSidebarOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-gray-900/80" />
					</Transition.Child>

					<Transition.Child
						as={Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full">
						<div className="flex flex-col h-screen w-72 bg-white dark:bg-zinc-900 dark:border-black shadow-lg">
							{/* Close Icon */}
							<div className="flex right-2 absolute">
								<button onClick={toggleSidebar}>
									<XMarkIcon
										className="h-12 w-12 outline-none focus:outline-none text-gray-400 rounded-lg border-2 hover:bg-white hover:border-zinc-400 hover:text-zinc-600"
										aria-hidden="true"
									/>
								</button>
							</div>

							{/* Sidebar Content */}
							<div className="flex-grow overflow-y-auto px-6 pb-4 pt-10">
								<div className="flex h-16 items-center">
									<Link href="/" className="cursor-pointer">
										<Image className="h-30 w-auto" height={64} width={90} src={bikeShopLogo} alt="Bike Shop" />
									</Link>
								</div>
								<nav className="flex flex-1 flex-col pt-10">
									<ul role="list" className="flex flex-1 flex-col gap-y-7 w-full">
										<li>
											<ul role="list" className="-mx-2 space-y-1">
												{navigation.map((item) => (
													<div key={item.name}>
														<li>
															<div className="group cursor-pointer flex w-full rounded-md p-2 text-sm leading-6 font-semibold">
																<Link
																	href={item.href}
																	onClick={() => handleNavItemClick(item)}
																	className={classNames(
																		activeNavItem === item
																			? "bg-gray-50 text-teal-400"
																			: "text-gray-500 hover:text-teal-400 hover:bg-gray-50",
																		"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
																	)}>
																	<item.icon
																		className={classNames(
																			activeNavItem === item
																				? "bg-gray-50 text-teal-400"
																				: "text-gray-500 hover:text-teal-400 hover:bg-gray-50",
																			"text-gray-400 group-hover:text-teal-400 h-6 w-6 shrink-0"
																		)}
																		aria-hidden="true"
																	/>
																	{item.name}
																</Link>
																{item.subLinks?.length > 0 && (
																	<div
																		className="ml-auto mt-2"
																		onClick={() => toggleAccordion(item.name)}>
																		{expandedItems[item.name] ? (
																			<ChevronUpIcon className="h-6 w-6 text-zinc-400 hover:text-zinc-600 scale-105" />
																		) : (
																			<ChevronDownIcon className="h-6 w-6 text-zinc-400 hover:text-zinc-600 scale-105" />
																		)}
																	</div>
																)}
															</div>
														</li>

														{/* Sub-item-content */}
														{item.subLinks?.length > 0 && expandedItems[item.name] && (
															<ul
																role="list"
																className="ml-4 bg-zinc-50 rounded-xl space-y-1 duration-200 ease-in-out transition-all">
																{item.subLinks.map((subItem) => (
																	<li key={subItem.label}>
																		<Link
																			href={subItem.route}
																			onClick={() => handleNavItemClick(subItem)}
																			className={classNames(
																				activeNavItem === subItem
																					? "bg-gray-50 text-teal-400"
																					: "text-gray-500 hover:text-teal-400 hover:bg-gray-50",
																				"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
																			)}>
																			<subItem.icon
																				className={classNames(
																					activeNavItem === subItem
																						? "text-teal-400"
																						: "text-gray-400 group-hover:text-teal-400",
																					"h-5 w-5 shrink-0"
																				)}
																				aria-hidden="true"
																			/>
																			{subItem.label}
																		</Link>
																	</li>
																))}
															</ul>
														)}
													</div>
												))}
											</ul>
										</li>
										<li>
											<div className="text-xs font-semibold leading-6 text-gray-400">Team Chat</div>
											<ul role="list" className="-mx-2 mt-2 space-y-1">
												{teams.map((team) => (
													<li key={team.name}>
														<Link
															href={team.href}
															className={classNames(
																team.current
																	? "bg-gray-50 text-teal-400"
																	: "text-gray-700 hover:text-teal-400 hover:bg-gray-50",
																"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
															)}>
															<span
																className={classNames(
																	team.current
																		? "text-teal-400 border-teal-400"
																		: "text-gray-400 border-gray-200 group-hover:border-teal-400 group-hover:text-teal-400",
																	"flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
																)}>
																{team.initial}
															</span>
															<span className="truncate">{team.name}</span>
														</Link>
													</li>
												))}
											</ul>
										</li>
										<li className="mt-auto">
											<Link
												href="/admin/settings"
												className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-teal-400">
												<Cog6ToothIcon
													className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-teal-400"
													aria-hidden="true"
												/>
												Settings
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition.Root>

			{/* Hamburger Icon when Sidebar is closed */}
			{!sidebarOpen && (
				<button className="lg:hidden absolute text-2xl" onClick={toggleSidebar}>
					<div className="text-zinc-400 cursor-pointer h-12 px-1 border-2 hover:border-zinc-400 hover:bg-white hover:shadow-lg hover:shadow-black/10 hover:text-zinc-600 border-zinc-100 rounded-lg items-center flex justify-center">
						<Bars3Icon className="h-10 w-10" aria-hidden="true" />
					</div>
				</button>
			)}

			{/* Static sidebar for desktop */}
			<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className="flex-grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white dark:bg-zinc-900 dark:border-black px-6 pb-4">
					<div className="flex h-16 items-center justify-between">
						<Link href="/" className="cursor-pointer">
							<Image className="h-28 pt-10 w-auto" height={64} width={120} src={bikeShopLogo} alt="Bike Shop" />
						</Link>
						{/* <XCircleIcon className="h-6 w-6 text-gray-400 cursor-pointer" aria-hidden="true" onClick={toggleSidebar} /> */}
					</div>
					<nav className="flex flex-1 flex-col">
						<ul role="list" className="flex flex-1 flex-col gap-y-7 pt-12">
							<li>
								<ul role="list" className="-mx-2 space-y-1">
									{navigation.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className={classNames(
													activeNavItem === item
														? "bg-gray-50 dark:bg-black text-teal-400"
														: "text-gray-700 hover:text-teal-400 hover:bg-gray-50 hover:dark:bg-zinc-800",
													"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
												)}>
												<item.icon
													className={classNames(
														activeNavItem === item
															? "text-teal-400"
															: "text-gray-400 group-hover:text-teal-400",
														"h-6 w-6 shrink-0"
													)}
													aria-hidden="true"
												/>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</li>
							<li>
								<div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
								<ul role="list" className="-mx-2 mt-2 space-y-1">
									{teams.map((team) => (
										<li key={team.name}>
											<Link
												href={team.href}
												className={classNames(
													team.current
														? "bg-gray-50 dark:bg-black text-teal-400"
														: "text-gray-700 hover:text-teal-400 hover:bg-gray-50 dark:hover:bg-black dark:text-white",
													"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
												)}>
												<span
													className={classNames(
														team.current
															? "text-teal-400 border-teal-400"
															: "text-gray-400 border-gray-200 group-hover:border-teal-400 group-hover:text-teal-400",
														"flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
													)}>
													{team.initial}
												</span>
												<span className="truncate">{team.name}</span>
											</Link>
										</li>
									))}
								</ul>
							</li>
							<li className="mt-auto">
								<Link
									href="/admin/settings"
									className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-teal-400">
									<Cog6ToothIcon
										className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-teal-400"
										aria-hidden="true"
									/>
									Settings
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="lg:pl-72">
				<main className="">
					<div className="mx-auto ">{children}</div>
				</main>
			</div>
		</div>
	)
}

export default TailwindUISidebarLayout
