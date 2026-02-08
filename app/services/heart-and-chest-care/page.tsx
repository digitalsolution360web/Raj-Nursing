import ServiceTemplate from "../ServiceTemplate";

export default function Page() {
    return (
        <ServiceTemplate
            title="Heart & Chest Care"
            image="/heart-care.jpg"
            description="Comprehensive care for cardiac and respiratory conditions. We specialize in treating chest pain, hypertension, and complex breathing issues."
            features={[
                "Cardiac & Pulmonary Care",
                "Expert Monitoring",
                "Modern Diagnostics",
                "Emergency Stabilization"
            ]}
        />
    );
}
