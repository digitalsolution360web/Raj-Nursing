import ServiceTemplate from "../ServiceTemplate";

export default function Page() {
    return (
        <ServiceTemplate
            title="Laparoscopic Surgery"
            image="/laparoscopic2.jpg"
            description="Modern minimally invasive surgeries that ensure faster recovery and less pain. Our senior surgeons are experts in various laparoscopic procedures."
            features={[
                "No Major Scars",
                "Quick Recovery",
                "Safe Anesthesia",
                "Same Day Discharge"
            ]}
        />
    );
}
