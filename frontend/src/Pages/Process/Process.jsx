import React from 'react';
import './Process.css';

// 💡 WORKAROUND: Import all icons from 'react-icons/fi' and assign them
// This often resolves Vite dependency pre-bundling issues.
import * as FeatherIcons from 'react-icons/fi';

const FiLayout = FeatherIcons.FiLayout;
const FiRuler = FeatherIcons.FiRuler;
const FiTool = FeatherIcons.FiTool;
const FiTruck = FeatherIcons.FiTruck;
const FiHeart = FeatherIcons.FiHeart;
const FiCheckCircle = FeatherIcons.FiCheckCircle;

const processSteps = [
    {
        step: 1,
        title: "Initial Consultation & Concept",
        description: "We start by listening. We discuss your vision, functional requirements, budget, and aesthetic preferences to solidify the project concept.",
        icon: FiLayout, // Use the assigned component
    },
    {
        step: 2,
        title: "Design & Material Selection",
        description: "Our designers produce detailed 3D renderings and technical drawings. We finalize wood species, hardware, fabrics, and finishes in collaboration with you.",
        icon: FiRuler, // Use the assigned component
    },
    {
        step: 3,
        title: "Master Craftsmanship",
        description: "The approved designs move to our workshop. Our master artisans meticulously handcraft every component, blending traditional skills with modern machinery.",
        icon: FiTool, // Use the assigned component
    },
    {
        step: 4,
        title: "Quality Assurance",
        description: "Every piece undergoes a multi-point quality control inspection to ensure it meets our rigorous standards for structural integrity, finish, and aesthetic perfection.",
        icon: FiCheckCircle, // Use the assigned component
    },
    {
        step: 5,
        title: "Seamless Installation & Delivery",
        description: "We manage the logistics. Our professional team delivers and installs your finished piece, ensuring a perfect fit and a clean handover.",
        icon: FiTruck, // Use the assigned component
    },
    {
        step: 6,
        title: "Aftercare & Relationship",
        description: "Our commitment doesn't end at delivery. We provide aftercare instructions and remain available for any future support or maintenance needs.",
        icon: FiHeart, // Use the assigned component
    },
];

const Process = () => {
    return (
        <section className="process-section">
            <div className="process-wrapper">
                
                <div className="process-header">
                    <span className="subtitle-tag">Our Methodology</span>
                    <h1>The Bravoke Bespoke Process</h1>
                    <p className="process-intro">
                        From the initial concept sketch to the final installation, our process is a meticulous journey of collaboration and precision, ensuring your custom furniture is nothing short of perfect.
                    </p>
                </div>

                <div className="process-timeline">
                    {processSteps.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={item.step} className="timeline-item">
                                <div className="timeline-icon">
                                    <div className="icon-circle">
                                        {/* Render the React Icon Component */}
                                        {IconComponent && <IconComponent size={24} />}
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <span className="step-number">Step {item.step}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Process;