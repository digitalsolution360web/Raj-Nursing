import ServiceTemplate from "../ServiceTemplate";

export default function Page() {
    return (
        <ServiceTemplate
            title="Heart Specialist"
            image="/heart-care.jpg"
            description="Advanced cardiac care focused on heart health. Our specialists use the latest technology to diagnose and treat various cardiovascular conditions, ensuring your heart stays strong."
            features={[
                "ECG & 2D Echo Monitoring",
                "Cardiac Risk Assessment",
                "Expert Cardiologists",
                "24/7 Emergency Support"
            ]}
        />
    );
}
