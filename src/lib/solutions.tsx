import {
  Activity,
  BatteryCharging,
  Cog,
  Cpu,
  Gauge,
  Power,
  ShieldCheck,
  Sun,
  Wifi,
} from "lucide-react";

export const solutions = [
  {
    slug: "solar-epc-solutions",
    icon: Sun,
    title: "Solar EPC Solutions",
    shortTitle: "Solar EPC",
    desc: "Turnkey utility and C&I solar - design, supply, installation, commissioning, and O&M.",
    tag: "120MW+",
    intro:
      "End-to-end solar project delivery for industrial rooftops, ground-mounted plants, and commercial energy assets.",
    highlights: [
      "Site survey, shadow analysis, system sizing, and generation estimates",
      "Module, inverter, structure, cable, and protection system engineering",
      "Installation, testing, commissioning, documentation, and handover",
      "O&M support with performance tracking and preventive maintenance",
    ],
    outcomes: ["Lower grid dependency", "Predictable energy cost", "Reliable lifecycle support"],
  },
  {
    slug: "solar-bos-balance-of-system",
    icon: BatteryCharging,
    title: "Solar BOS(Balance of System)",
    shortTitle: "Solar BOS",
    desc: "Balance of system products for reliable solar plant connection, protection, and integration.",
    tag: "BOS",
    intro:
      "Solar BOS products engineered for safe power collection, disconnection, wiring, inverter integration, and battery connectivity.",
    highlights: [
      "Combiner/Recombiner Boxes",
      "Disconnects Boxes",
      "Wire Solutions",
      "Solar Inverter Solutions",
      "Battery Connection Panels",
    ],
    outcomes: ["Safer plant wiring", "Reliable system protection", "Cleaner inverter integration"],
  },
  {
    slug: "industrial-automation",
    icon: Cog,
    title: "Industrial Automation",
    shortTitle: "Industrial Automation",
    desc: "PLC, HMI, robotics and process control for the smart factory.",
    tag: "300+",
    intro:
      "Automation systems that improve repeatability, uptime, safety, and operator visibility across production lines.",
    highlights: [
      "PLC Panel",
      "Control Desk Panel",
      "MCC Panel",
      "PCC Panels",
      "APFC Panels",
      "Variable Frequency Drive Panels",
      "LT Panels",
    ],
    outcomes: ["Higher throughput", "Reduced manual errors", "Better process visibility"],
  },
  {
    slug: "scada-systems",
    icon: Activity,
    title: "SCADA Systems",
    shortTitle: "SCADA Systems",
    desc: "Distributed real-time supervisory control with secure architectures.",
    tag: "24x7",
    intro:
      "Real-time plant supervision for energy assets, utilities, and industrial operations that need dependable control rooms.",
    highlights: [
      "String Monitoring Solution",
      "Local Remote SCADA with Weather Monitoring Solution",
    ],
    outcomes: ["Live operational visibility", "Faster fault response", "Audit-ready reporting"],
  },
  {
    slug: "iot-monitoring",
    icon: Wifi,
    title: "IoT Monitoring",
    shortTitle: "IoT Monitoring",
    desc: "Edge-to-cloud telemetry, AI anomaly detection, and predictive maintenance.",
    tag: "1.2M/day",
    intro:
      "Connected monitoring systems that collect field data, detect abnormal behavior, and support smarter maintenance.",
    highlights: [
      "Sensor selection, gateway integration, and edge data acquisition",
      "Cloud dashboards for equipment, energy, environment, and production KPIs",
      "Alerting, trend analysis, anomaly detection, and maintenance triggers",
      "API-ready data pipelines for ERP, MES, and reporting systems",
    ],
    outcomes: ["Remote insight", "Less unplanned downtime", "Data-led maintenance"],
  },
  {
    slug: "smart-energy-solutions",
    icon: Gauge,
    title: "Smart Energy Solutions",
    shortTitle: "Smart Energy Monitoring",
    desc: "Energy analytics, demand response, intelligent load management, and consumption monitoring.",
    tag: "Live",
    intro:
      "Energy intelligence for facilities that want to monitor consumption, reduce waste, and manage peak demand.",
    highlights: [
      "Metering architecture for feeders, machines, utilities, and buildings",
      "Energy dashboards, load profiles, power quality, and cost reports",
      "Demand control, load scheduling, and efficiency opportunity tracking",
      "Integration with solar, DG, battery, and grid systems",
    ],
    outcomes: ["Lower energy waste", "Peak demand control", "Clear cost accountability"],
  },
  // {
  //   slug: "ev-infrastructure",
  //   icon: BatteryCharging,
  //   title: "EV Infrastructure",
  //   shortTitle: "EV Infrastructure",
  //   desc: "AC and DC charging stations from rooftops to highway corridors.",
  //   tag: "EV",
  //   intro:
  //     "Charging infrastructure for commercial sites, fleets, workplaces, residential campuses, and public locations.",
  //   highlights: [
  //     "Load assessment, charger selection, electrical design, and civil coordination",
  //     "AC chargers, DC fast chargers, feeder panels, protection, and earthing",
  //     "CMS integration, user access, billing readiness, and uptime monitoring",
  //     "Solar and energy management integration for optimized charging costs",
  //   ],
  //   outcomes: ["Reliable charging access", "Scalable site design", "Managed energy demand"],
  // },
  {
    slug: "electrical-panels",
    icon: Cpu,
    title: "Electrical Panels",
    shortTitle: "Electrical Panels",
    desc: "LT/MV panels, ATS, capacitor banks, and custom in-house engineered assemblies.",
    tag: "IEC",
    intro:
      "Engineered electrical panels designed for safety, serviceability, and dependable operation in demanding sites.",
    highlights: [
      "PCC, MCC, APFC, AMF, ATS, synchronizing, and distribution panels",
      "Component selection, GA drawings, control wiring, and factory testing",
      "Busbar sizing, protection coordination, metering, and interlocks",
      "Installation support, commissioning, and documentation",
      "Solar ACDB",
      "Solar DCDB",
      "Array Junction Boxes",
    ],
    outcomes: ["Safer power distribution", "Cleaner maintenance", "Built-to-site reliability"],
  },
  {
    slug: "dg-synchronization",
    icon: Power,
    title: "DG Synchronization",
    shortTitle: "DG Synchronization",
    desc: "Multi-DG sync, grid paralleling, and automatic load sharing.",
    tag: "Sync",
    intro:
      "Generator synchronization systems for facilities that need reliable backup power and intelligent load sharing.",
    highlights: [
      "Multi-DG synchronization panels with auto/manual operating modes",
      "Load sharing, load management, AMF logic, and grid paralleling",
      "Controller programming, breaker control, protection, and metering",
      "Commissioning, testing, operator training, and service support",
    ],
    outcomes: ["Stable backup power", "Optimized generator loading", "Reduced operator intervention"],
  },
  {
    slug: "zero-export-devices",
    icon: ShieldCheck,
    title: "Zero Export Devices",
    shortTitle: "Zero Export Devices",
    desc: "Compliant zero-export controllers for net-metering and utility policy requirements.",
    tag: "ZE",
    intro:
      "Zero-export control systems that prevent reverse power flow while keeping solar generation useful on site.",
    highlights: [
      "Controller selection, meter integration, CT/PT wiring, and inverter communication",
      "Dynamic export control based on real-time facility load",
      "Testing, utility coordination support, and compliance documentation",
      "Integration with monitoring dashboards and energy management systems",
    ],
    outcomes: ["Policy compliance", "Better solar utilization", "Reduced export risk"],
  },
] as const;

export type Solution = (typeof solutions)[number];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
