import {
  Activity,
  BatteryCharging,
  CircuitBoard,
  Cog,
  Cpu,
  Gauge,
  Power,
  ShieldCheck,
  Sun,
  Wifi,
} from "lucide-react";
import apfcPanel from "@/assets/apfc_ia.jpg";
import batteryPanelBos from "@/assets/battery_panel_bos.jpg";
import bosGpt from "@/assets/bos_gpt.jpeg";
import controlDeskPanel from "@/assets/control_desk_ia.jpg";
import dgGpt from "@/assets/dg_gpt.jpeg";
import dgSyncPf from "@/assets/dg_syncpf.jpeg";
import disconnectBoxesBos from "@/assets/disconnect_boxes_bos.jpg";
import ltGpt from "@/assets/lt_gpt.jpeg";
import ltPanel from "@/assets/lt_panel_ia.jpg";
import mccPanel from "@/assets/mcc_ia.jpg";
import pccPanel from "@/assets/pcc_ia.jpg";
import plcPanel from "@/assets/plc_ia.jpg";
import scadaGpt from "@/assets/scada_gpt.jpeg";
import scadaReal from "@/assets/scada_real.jpg";
import rssIot from "@/assets/rss-iot.jpeg";
import rssIot1 from "@/assets/rss-iot1.jpeg";
import rssIot2 from "@/assets/rss-iot2.jpeg";
import rssIot3 from "@/assets/rss-iot3.jpeg";
import rssIot4 from "@/assets/rss-iot4.jpeg";
import variableFrequencyPanel from "@/assets/variable_freq_panel_ia.jpg";
import zeroExpertDevice from "@/assets/zero_expert_device.jpeg";
import zeroExpertDgPv from "@/assets/zero_expert_dgpv.png";

const zeroExpertDownloads = [
  {
    label: "Download Architecture",
    href: "https://rssindiacom-my.sharepoint.com/:b:/g/personal/ak_rss-india_com/IQDfZewU_TLORI5sNeEHnCubAd_LLL8PjmGTF2hNfdIO_o4?e=ZjcLGY",
    download: false,
  },
  {
    label: "Download rss-iot Datasheet",
    href: "https://rssindiacom-my.sharepoint.com/:b:/g/personal/sourabh_rss-india_com/IQDvDl8c3ryFTYdyt27ocGH1AR8zzgoyzJrih3SQb_9-Jo8?e=FFaqN2",
    download: true,
  },
] as const;

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
    images: [
      { src: disconnectBoxesBos, alt: "Solar disconnect boxes", title: "Disconnect Boxes" },
      { src: batteryPanelBos, alt: "Solar battery connection panel", title: "Battery Connection Panel" },
      { src: bosGpt, alt: "Solar BOS system", title: "Solar BOS" },
    ],
    outcomes: ["Safer plant wiring", "Reliable system protection", "Cleaner inverter integration"],
  },
  {
    slug: "string-monitoring-boxes",
    icon: CircuitBoard,
    title: "String Monitoring Boxes",
    shortTitle: "SMB",
    desc: "Solar string current, DC voltage, protection, and SCADA-ready monitoring for PV plants.",
    tag: "SMB",
    intro:
      "String Monitoring Boxes for solar PV plants, built to monitor individual string performance, detect faults early, and improve plant reliability.",
    highlights: [
      "Individual solar string current monitoring for performance comparison",
      "Fault detection for string failure, low generation, and open circuits",
      "DC bus voltage, internal temperature, SPD health, fuse status, and optional door status monitoring",
      "Integrated string fuses, DC isolator, surge protection device, current sensors, DAU, and power supply",
      "SCADA, data logger, and monitoring system communication through Modbus RTU over RS-485",
      "Architecture support from solar module strings to SMB, DC combiner or inverter, and central monitoring",
    ],
    outcomes: ["Early fault detection", "Reduced maintenance time", "Improved PV plant performance"],
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
    images: [
      { src: plcPanel, alt: "PLC panel", title: "PLC Panel" },
      { src: controlDeskPanel, alt: "Control desk panel", title: "Control Desk Panel" },
      { src: mccPanel, alt: "MCC panel", title: "MCC Panel" },
      { src: pccPanel, alt: "PCC panel", title: "PCC Panel" },
      { src: apfcPanel, alt: "APFC panel", title: "APFC Panel" },
      { src: variableFrequencyPanel, alt: "Variable frequency drive panel", title: "Variable Frequency Drive Panel" },
      { src: ltPanel, alt: "LT panel", title: "LT Panel" },
      { src: ltGpt, alt: "Industrial LT panel", title: "LT Panel GPT" },
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
    images: [
      {
        src: scadaReal,
        alt: "SCADA monitoring interface and control system",
        title: "SCADA Control System",
      },
      {
        src: scadaGpt,
        alt: "SCADA system monitoring",
        title: "SCADA System",
      },
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
    images: [
      {
        src: rssIot,
        alt: "IoT Monitoring Dashboard and Analytics",
        title: "IoT Monitoring System",
      },
      {
        src: rssIot1,
        alt: "IoT monitoring device and interface",
        title: "Unified Platform for All Sites",
      },
      {
        src: rssIot2,
        alt: "IoT monitoring dashboard",
        title: "Simple and Effective Dashboard",
      },
      {
        src: rssIot3,
        alt: "IoT gateway and sensors",
        title: "MPPT Monitoring",
      },
      {
        src: rssIot4,
        alt: "IoT real-time data monitoring",
        title: "Daily Power Generation",
      },
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
    downloads: [
      {
        label: "ACDB DCDB Datasheet",
        href: "https://rssindiacom-my.sharepoint.com/:b:/g/personal/ak_rss-india_com/IQAXHUsiNiIHQb6OJ4EZazZNARxV48F_iEZDGfhil1r_Oho?e=I0uNoQ",
        download: true,
      },
    ],
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
    images: [
      {
        src: zeroExpertDgPv,
        alt: "DG synchronization zero export and DG-PV control panel",
        title: "Zero Export DG-PV Panel",
      },
      {
        src: dgGpt,
        alt: "DG synchronization panel",
        title: "DG Synchronization",
      },
      {
        src: dgSyncPf,
        alt: "DG synchronization panel with power factor control",
        title: "DG Synchronization PF",
      },
    ],
    outcomes: ["Stable backup power", "Optimized generator loading", "Reduced operator intervention"],
    downloads: zeroExpertDownloads,
  },
  {
    slug: "zero-export-devices",
    icon: ShieldCheck,
    title: "Zero Export Device",
    shortTitle: "Zero Export Device",
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
    images: [
      {
        src: zeroExpertDevice,
        alt: "Zero Expert Device controller",
        title: "Zero Export Device",
      },
    ],
    outcomes: ["Policy compliance", "Better solar utilization", "Reduced export risk"],
    downloads: zeroExpertDownloads,
  },
] as const;

export type Solution = (typeof solutions)[number];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
