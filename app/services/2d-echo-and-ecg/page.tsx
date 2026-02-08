import ServiceTemplate from "../ServiceTemplate";

export default function Page() {
    return (
        <ServiceTemplate
            title="2D Echo & ECG"
            image="/heart-care.jpg"
            description="Non-invasive heart evaluations using high-end imaging. Our 2D Echo mapping and digital ECG provide precise data on heart health."
            features={[
                "Cardiac Imaging",
                "Digital Reports",
                "No Preparation Needed",
                "Expert Cardiologist Review"
            ]}
        />
    );
}
