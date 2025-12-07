import React from 'react';
import { TubelightNavBar } from '../ui/tubelight-navbar';
import { Home, Star, BookOpen, GraduationCap, Trophy, Phone, MousePointerClick } from 'lucide-react';

const Navbar = () => {
    const items = [
        { name: "Home", url: "/#home", icon: Home },
        { name: "About", url: "/#about", icon: Star },
        { name: "Philosophy", url: "/#philosophy", icon: BookOpen },
        { name: "Programs", url: "/#programs", icon: GraduationCap },
        { name: "Admissions", url: "/admission", icon: MousePointerClick },
        { name: "Franchise", url: "/franchise", icon: Trophy },
        { name: "Contact", url: "/#contact", icon: Phone },
    ];

    return (
        <TubelightNavBar items={items} />
    );
};

export default Navbar;
