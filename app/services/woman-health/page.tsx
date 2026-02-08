import ServiceTemplate from "../ServiceTemplate";

export default function Page() {
    return (
        <ServiceTemplate
            title="Woman's Health"
            image="/raj/gyne-2.jpg"
            description="Comprehensive healthcare for women at every stage of life. From maternity and prenatal care to gynecological treatments, we provide compassionate and expert medical services."
            features={[
                "Maternity & Delivery",
                "Painless Labor Options",
                "Gynecology Surgery",
                "Antenatal Check-ups"
            ]}
        />
    );
}
