import ServiceTemplate from "../ServiceTemplate";

export default function Page() {
    return (
        <ServiceTemplate
            title="PFT Testing"
            image="/medical.jpg"
            description="Pulmonary Function Testing for respiratory health. We evaluate lung capacity and air flow to diagnose asthma, COPD, and other lung conditions."
            features={[
                "Modern Spirometry",
                "Expert Lung Care",
                "Digital Graphing",
                "Quick Testing"
            ]}
        />
    );
}
