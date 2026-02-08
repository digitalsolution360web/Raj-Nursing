import ServiceTemplate from "../ServiceTemplate";

export default function Page() {
    return (
        <ServiceTemplate
            title="Internal Medicine"
            image="/internal1.jpg"
            description="Holistic management of chronic and complex diseases. Our physicians specialize in treating cardiac, pulmonary, renal, and diabetic conditions."
            features={[
                "Chronic Disease Management",
                "Expert Consultation",
                "Diabetes Clinic",
                "Adult Vaccinations"
            ]}
        />
    );
}
