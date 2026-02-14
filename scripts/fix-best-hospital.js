const fs = require("fs");
const path = "app/best-hospital-nursing-home-hapur/page.tsx";
let s = fs.readFileSync(path, "utf8");

// Fix emergency list - use unicode apostrophe
const oldList = `{[
                    "Monitor patients requiring intensive support.",
                    "Use advanced ventilators in case of life-saving situations.",
                    "Have a centralized oxygen supply system to provide constant vigilance.",
                    "Ensure that financial or logistical issues won\u2019t be a problem in life-saving care."
                  ].map((item, i) => (`;
const newList = `{[t("bestHospital.emergencyL1"), t("bestHospital.emergencyL2"), t("bestHospital.emergencyL3"), t("bestHospital.emergencyL4")].map((item, i) => (`;
if (s.includes(oldList)) {
  s = s.replace(oldList, newList);
  console.log("Replaced emergency list");
}

// Fix emergency paragraphs - use JSX so we need {t(...)} inside the <p>
const p1 = "A hospital's responsibilities are not just like some mere office's working hours. As a respected private hospital in Hapur, we keep the 24/7 emergency service active all the time without any delay.";
const p2 = "\"Whether it's a cardiac arrest or any type of tragic road accident, our emergency team is always ready to handle life-threatening situations.\"";
const p3 = "Also, we have the operations that we always keep active in the emergency ward to deliver smooth healthcare facilities without trouble, such as:";
if (s.includes(p1)) s = s.replace(p1, "{t(\"bestHospital.emergencyP1\")}");
if (s.includes(p2)) s = s.replace(p2, '{"\\""}{t("bestHospital.emergencyQuote")}{"\\""}');
if (s.includes(p3)) s = s.replace(p3, "{t(\"bestHospital.emergencyP2\")}");

// Fix intro: use regex to allow curly quotes so we match the file
const introRegex = /["\u201c]In Uttar Pradesh, <span className="text-\[#9d174d\] font-bold not-italic font-sans bg-red-50 px-2 py-1 rounded-lg">Raj Nursing Home<\/span> has risen[\s\S]*?Let['\u2019]s take a quick look[\s\S]*?the most!["\u201d]/;
if (introRegex.test(s)) {
  s = s.replace(introRegex, `{t("bestHospital.intro1")}
            <br /><br />
            {t("bestHospital.intro2")}
            <br /><br />
            {t("bestHospital.intro3")}`);
  console.log("Replaced intro");
}

// Women's section
s = s.replace(/\"At Raj Nursing Home, we don't just deliver babies; we nurture families\.\"/, "{\"\\\"\"}{t(\"bestHospital.womenQuote\")}{\"\\\"\"}");
s = s.replace(/This is not just a claim as we carry the initiative "caring for Women" all the time with the assistance of our gynecologists and nurses\. We are proud to be the top-rated nursing home in Hapur for safe, painless deliveries and neonatal support\./, "{t(\"bestHospital.womenPara\")}");
s = s.replace("Why Choose Us?", "{t(\"bestHospital.whyChooseUs\")}");
s = s.replace("Complex Gynecological Issues", "{t(\"bestHospital.complexGynae\")}");
s = s.replace(/\["Uterine fibroids", "Infertility", "Menstrual disorders"\]/, "[t(\"bestHospital.fibroids\"), t(\"bestHospital.infertility\"), t(\"bestHospital.menstrual\")]");
s = s.replace("Experts from our gynecology department are great at removing cysts and tumors with minimal recovery time.", "{t(\"bestHospital.expertsCysts\")}");
s = s.replace("Ensure both mother and baby transition smoothly into their new life together.", "{t(\"bestHospital.motherBaby\")}");
// newbornCta may have curly apostrophe in It's
const newbornOld = "\"It\u2019s time to give your newborn the best start in life with the expert maternity care at Raj Nursing Home. Schedule a prenatal visit today!\"";
if (s.includes(newbornOld)) s = s.replace(newbornOld, "{\"\\\"\"}{t(\"bestHospital.newbornCta\")}{\"\\\"\"}");

// Facilities section
s = s.replace("The modern healthcare system is now giving people the best experience at hospitals. In Hapur, Raj Nursing Home has provided the best range of treatment and delivered its loyalty towards every patient.", "{t(\"bestHospital.facilitiesP1\")}");
const facilitiesP2 = "We always ensure that every interaction is marked by respect and kindness. When you pick the best hospital and nursing home in Hapur, it's none other than Raj Nursing Home.";
const facilitiesP2Curly = facilitiesP2.replace("it's", "it\u2019s");
if (s.includes(facilitiesP2)) s = s.replace(facilitiesP2, "{t(\"bestHospital.facilitiesP2\")}");
else if (s.includes(facilitiesP2Curly)) s = s.replace(facilitiesP2Curly, "{t(\"bestHospital.facilitiesP2\")}");

// Facilities cards - replace the array with t() keys
const cardsOld = `{[
              {
                title: "Premium Facilities",
                desc: "We need to complete all the requirements on time with premium healthcare facilities, from wards to ICUs.",
                icon: <Building2 className="w-8 h-8" />
              },
              {
                title: "Transparent System",
                desc: "We are thankful to our management for building a transparent system that helps doctors and assists patients and families.",
                icon: <FileText className="w-8 h-8" />
              },
              {
                title: "Respect & Kindness",
                desc: "We always ensure that every interaction is marked by respect and kindness. We prioritize your comfort and budget.",
                icon: <HeartHandshake className="w-8 h-8" />
              },
              {
                title: "Ayushman Card Accepted",
                desc: "Raj Nursing Home is an Ayushman Bharat empanelled facility. Patients with Ayushman card can avail cashless treatment as per scheme guidelines. Quality healthcare for every family.",
                icon: <CreditCard className="w-8 h-8" />
              }
            ].map((feature, i) => (`;
const cardsNew = `{[
              { title: t("bestHospital.premiumFacilities"), desc: t("bestHospital.premiumDesc"), icon: <Building2 className="w-8 h-8" /> },
              { title: t("bestHospital.transparentSystem"), desc: t("bestHospital.transparentDesc"), icon: <FileText className="w-8 h-8" /> },
              { title: t("bestHospital.respectKindness"), desc: t("bestHospital.respectDesc"), icon: <HeartHandshake className="w-8 h-8" /> },
              { title: t("bestHospital.ayushmanTitle"), desc: t("bestHospital.ayushmanDesc"), icon: <CreditCard className="w-8 h-8" /> }
            ].map((feature, i) => (`;
if (s.includes(cardsOld)) {
  s = s.replace(cardsOld, cardsNew);
  console.log("Replaced facilities cards");
}

fs.writeFileSync(path, s);
console.log("Done.");
