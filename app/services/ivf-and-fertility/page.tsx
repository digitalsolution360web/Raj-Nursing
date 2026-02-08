import ServiceTemplate from "../ServiceTemplate";

export default function Page() {
    return (
        <ServiceTemplate
            title="IVF & Fertility"
            image="/IVF2.jpg"
            description="Helping you build the family of your dreams. Our fertility experts use advanced IVF and reproductive technologies to provide world-class fertility treatments."
            features={[
                "Advanced IVF Lab",
                "Expert Embryologists",
                "Infertility Counseling",
                "High Success Rates"
            ]}
        />
    );
}
