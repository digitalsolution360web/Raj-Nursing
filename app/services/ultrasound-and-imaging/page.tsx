import ServiceTemplate from "../ServiceTemplate";

export default function Page() {
    return (
        <ServiceTemplate
            title="Ultrasound & Imaging"
            image="/ultrasound.jpg"
            description="High-resolution ultrasound imaging for clear diagnostics. Our senior specialists provide detailed reporting for all abdominal and maternity scans."
            features={[
                "Modern HD Scanners",
                "Expert Reporting",
                "Color Doppler",
                "Maternity Scans"
            ]}
        />
    );
}
