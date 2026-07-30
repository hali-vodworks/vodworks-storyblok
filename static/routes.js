export default {
    navigationItems: [
        {
            name: "Services",
            path: "/services/",
            mobilePath: "/services/",
            hasDropDown: true,
            isMegaMenu: true,
            list: [
                {
                    // name: "Consulting",
                    name: "Tech Consultancy and Advisory",
                    description: "Make confident, informed tech decisions",
                    path: "/services/consulting/",
                },
                {
                    // name: "Engineering",
                    name: "Custom Software Development",
                    description: "Turn ideas into tailored products that drive impact ",
                    path: "/services/engineering/",
                },
                {
                    // name: "Data",
                    name: "Analytics and Business Intelligence",
                    description: "Transform data into actionable insight",
                    path: "/services/data/",
                },
                {
                    name: "AI Readiness",
                    description: "Get your data, systems, and people ready for AI success",
                    path: "/services/ai-readiness/",
                },
                {
                    // name: "Teams",
                    name: "Team Augmentation",
                    description: "Expand your team with trusted experts",
                    path: "/services/teams/",
                },
                {
                    // name: "Cybersecurity",
                    name: "Cybersecurity",
                    description: "Secure your applications, data, and infrastructure",
                    path: "/services/cyber-security/",
                }
            ]
        },
        {
            name: "Industries",
            path: "/industries/",
            mobilePath: "/industries/",
            hasDropDown: true,
            isMegaMenu: true,
            list: [
                {
                    name: "Media & Entertainment",
                    description: "Launch streaming platforms with proven engineering support.",
                    path: "/industries/media-and-entertainment/",
                },
                {
                    name: "Telecommunications",
                    description: "Accelerate telecom transformation from roadmap to release.",
                    path: "/industries/telecommunications/",
                },
                {
                    name: "Gaming",
                    description: "Bring your game from pre-production to launch and beyond.",
                    path: "/industries/gaming/",
                },
                {
                    name: "Fintech and Compliance",
                    description: "Scale fintech safely with AML, compliance, and risk controls.",
                    path: "/industries/fintech-and-compliance/",
                },
                {
                    name: "Ecommerce & Retail",
                    description: "Drive ecommerce and retail success with full-cycle support.",
                    path: "/industries/ecommerce-and-retail/",
                },
                {
                    name: "Sustainability",
                    description: "Shape sustainability strategy and execute with confidence.",
                    path: "/industries/sustainability/",
                }
            ]
        },
        {
            name: "Case Studies",
            path: "/cases/",
            mobilePath: "/cases/",
            hasDropDown: false,
        },
        {
            name: "Blog",
            path: "/blogs/",
            mobilePath: "/blogs/",
            hasDropDown: false,
            // isMegaMenu: true,
            // list: [
            //     {
            //         name: "Articles",
            //         description: "Insights and ideas shaping technology and innovation",
            //         path: "/blogs/",
            //     },
            //     {
            //         name: "Videos",
            //         description: "Conversations, stories, and demos from us and industry innovators ",
            //         path: "javascript:void(0)",
            //     },
            //     {
            //         name: "Practical Resources",
            //         description: "Downloadable tools to help you put ideas into action",
            //         path: "javascript:void(0)",
            //     },
            // ]
        },
        {
            name: "Company",
            path: "/about/",
            mobilePath: "#",
            hasDropDown: true,
            isMegaMenu: true,
            list: [
                {
                    name: "About Us",
                    description: "Our story, mission and core team",
                    path: "/about/",
                },
                {
                    name: "How We Work",
                    description: "Our approach to software delivery",
                    path: "/how-we-work/",
                },
                {
                    name: "For Startups",
                    description: "Software development services & solutions",
                    path: "/for-startups/",
                },
                {
                    name: "For Enterprise",
                    description: "Software development solutions",
                    path: "/for-enterprise/",
                },
                {
                    name: "Social Projects",
                    description: "Technology that made an impact",
                    path: "/social-projects/",
                },
                {
                    name: "Careers",
                    description: "Our values, benefits and current openings",
                    path: "/careers/",
                }
            ]
        },
        {
            name: "Shipyard",
            isNew: true,
            path: "/shipyard/",
            mobilePath: "/shipyard/",
            hasDropDown: false,
            newTab: true
        },
    ],
    quick_links: {
        list: [
            {
                name: "Industries",
                path: "/industries/",
            },
            {
                name: "Case Studies",
                path: "/cases/",
            },
            {
                name: "Blog",
                path: "/blogs/",
            },
            {
                name: "Contact Us",
                path: "/contact/",
            },
            {
                name: "Privacy Policy",
                path: "/privacy-policy/"
            }
        ]
    },
    socials: [
        {
            name: "LinkedIn",
            path: "https://www.linkedin.com/company/vodworks"
        },
        {
            name: "Twitter",
            path: "https://twitter.com/vodworksit"
        },
        {
            name: "Facebook",
            path: "https://www.facebook.com/vodworks/"
        }
    ]
}
