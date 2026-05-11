import {
    FaReact,
    FaCode,
    FaDesktop,
    FaShoppingCart,
    FaPalette,
    FaSchool,
    FaProjectDiagram,
} from 'react-icons/fa';

import profileImg from '../assets/profile.jpeg';

export const assets = {
    profileImg,
};

export const navMenus = ['Home', 'Work', 'Skills', 'About', 'Contact'];

export const skillsData = [
    {
        icon: FaReact,
        title: 'Frontend Development',
        technologies: [
            'React JS',
            'JavaScript (ES6+)',
            'HTML5',
            'CSS3',
            'Tailwind CSS',
            'Responsive Design',
        ],
    },

    {
        icon: FaShoppingCart,
        title: 'Shopify Development',
        technologies: [
            'Shopify',
            'Liquid',
            'Theme Customization',
            'Custom Sections',
            'Store Setup',
            'App Integration',
        ],
    },

    {
        icon: FaDesktop,
        title: 'WordPress Development',
        technologies: [
            'WordPress',
            'Elementor',
            'Theme Customization',
            'Plugin Management',
            'Responsive Websites',
        ],
    },

    {
        icon: FaCode,
        title: 'Programming & Tools',
        technologies: [
            'JavaScript',
            'Git',
            'GitHub',
            'VS Code',
        ],
    },

    {
        icon: FaPalette,
        title: 'UI / UX Design',
        technologies: [
            'Modern UI Design',
            'Figma Basics',
            'User Experience',
        ],
    },
];

export const projectData = [
    {
        title: 'Luxury Furniture Store',
        description:
            'A premium Shopify furniture store with a modern UI, smooth shopping experience, and fully responsive design.',
        image:
            'https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?w=500&auto=format&fit=crop&q=60',
        tech: ['Shopify', 'Liquid', 'CSS', 'JavaScript'],
    },

    {
        title: 'Modern Decor Store',
        description:
            'An elegant home decor e-commerce website focused on premium aesthetics, fast performance, and conversions.',
        image:
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=60',
        tech: ['React', 'Tailwindcss', 'JavaScript'],
    },

    {
        title: 'Portfolio Website',
        description:
            'A modern developer portfolio with smooth animations, responsive layouts, and premium UI design.',
        image:
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60',
        tech: ['React', 'Tailwindcss'],
    },

    {
        title: 'Fashion E-Commerce',
        description:
            'A stylish fashion store built with Shopify featuring custom sections, predictive search, and optimized UX.',
        image:
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60',
        tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    },
];

export const profileData = [
    {
        icon: FaCode,
        title: 'Experience',
        technologies: [
            'Shopify',
            'WordPress',
            'React JS',
            'JavaScript',
            'Tailwindcss',
            'HTML',
            'CSS',
        ],
    },

    {
        icon: FaSchool,
        title: 'Education',
        technologies: ['Matric'],
    },

    {
        icon: FaProjectDiagram,
        title: 'Projects',
        technologies: [
            'Built 25+ Shopify Stores',
            'Custom Shopify Sections',
            'Responsive Websites',
            'Modern Portfolio Designs',
        ],
    },
];