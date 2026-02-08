import ServiceTemplate from "../ServiceTemplate";

export default function Page() {
    return (
        <ServiceTemplate
            title="Diagnostic Services"
            image="/Diagnostic3.jpg"
            description="Reliable and accurate diagnostic reports. Our facility is equipped with modern lab equipment for all types of blood tests and specialized screenings."
            features={[
                "Modern Lab Tests",
                "Home Collection Service",
                "Accurate Reports",
                "Quick Turnaround"
            ]}
        />
    );
}
