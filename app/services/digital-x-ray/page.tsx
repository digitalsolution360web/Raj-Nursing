import ServiceTemplate from "../ServiceTemplate";

export default function Page() {
    return (
        <ServiceTemplate
            title="Digital X-Ray"
            image="/medical.jpg"
            description="High-frequency digital X-rays with minimum radiation. Our digital processing ensures high clarity for accurate skeletal and internal imaging."
            features={[
                "Low Radiation",
                "Digital Clarity",
                "Quick Exposure",
                "Skilled Radiographers"
            ]}
        />
    );
}
