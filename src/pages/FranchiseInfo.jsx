import { useParams, Link } from 'react-router-dom';

const FranchiseInfo = () => {
    const { topic } = useParams();

    const contentMap = {
        'brand': {
            title: "ESTABLISHED BRAND – Viva Website",
            items: [
                "Recognized and trusted brand",
                "Educational service",
                {
                    text: "School with a strong reputation",
                    subItems: ["Includes sibling admission."]
                },
                {
                    text: "Long-term customer loyalty",
                    subItems: ["After school", "General tuition", "Classical dance", "etc."]
                },
                {
                    text: "Quality educational service",
                    subItems: ["Certified Phonic Trainer", "Well-qualified, trained teachers", "Multimedia-based teaching"]
                }
            ]
        },
        'no-royalty': {
            title: "Zero Royalty Model",
            items: [
                "100% Retained Earnings – Keep all your profits.",
                "No hidden charges or monthly franchise fees.",
                "Complete operational freedom with brand support.",
                "Affordable setup cost with high ROI.",
                "Focus on growth without financial burden."
            ]
        },
        'emi': {
            title: "Flexible EMI Options",
            items: [
                "Easy financing options available for franchise setup.",
                "Tie-ups with leading banks for loans.",
                "Pay in convenient monthly installments.",
                "Reduce initial financial stress.",
                "Start your journey with minimal upfront capital."
            ]
        },
        'quality': {
            title: "International Quality Standards",
            items: [
                "Best-in-class curriculum inspired by global standards.",
                "Child-safe infrastructure and eco-friendly materials.",
                "Regular quality audits and improvements.",
                "Holistic development focus: mental, physical, and social.",
                "Certified and experienced management team."
            ]
        },
        'training': {
            title: "Comprehensive Training Support",
            items: [
                "Initial setup training for owners and staff.",
                "Regular teacher training workshops.",
                "Curriculum implementation guidance.",
                "Marketing and operations training.",
                "Continuous support through online and offline channels."
            ]
        },
        'support': {
            title: "Extensive 360° Support",
            items: [
                "Site selection and interior design assistance.",
                "Marketing and advertising support (Digital & Print).",
                "Recruitment assistance for hiring qualified staff.",
                "Day-to-day operational guidance.",
                "Event planning and celebration support."
            ]
        }
    };

    const data = contentMap[topic];

    if (!data) {
        return <div className="min-h-screen bg-dark text-white pt-[100px] text-center"><h1>Content not found</h1></div>;
    }

    return (
        <div className="min-h-screen bg-dark text-white pt-[100px] px-4 overflow-x-hidden">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 font-bold">{data.title}</h2>
                <ul className="space-y-4 text-lg md:text-xl list-none">
                    {data.items.map((item, index) => (
                        <li key={index} className="relative pl-8">
                            <span className="absolute left-0 text-accent font-bold text-2xl">•</span>
                            {typeof item === 'string' ? item : (
                                <div>
                                    {item.text}
                                    <ul className="mt-2 space-y-2 pl-6">
                                        {item.subItems.map((sub, i) => (
                                            <li key={i} className="relative pl-6 text-base text-gray-300">
                                                <span className="absolute left-0 text-white">-</span>
                                                {sub}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="text-center mt-12">
                    <Link to="/franchise" className="inline-block bg-white text-dark font-bold py-3 px-8 rounded-full hover:bg-gray-200 hover:scale-105 transition-all">
                        Back to Franchise
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FranchiseInfo;
