export interface Experience {
  slug: string;
  company: string;
  role: string;
  period: string;
  highlights: string[];
  workContributions: string[];
  keyAchievements: string[];
  technologies: {
    category: string;
    items: string[];
  }[];
}

export const experiences: Experience[] = [
  {
    slug: "lums",
    company: "Lahore University of Management Sciences",
    role: "Research Assistant, EED",
    period: "May 2026 – Present",
    highlights: [
      "Engineered a six-node distributed P2P energy-trading prototype combining physical smart meters, embedded control, and Quorum blockchain",
      "Implemented end-to-end system integration across nodes — hardware, IoT transport, and multi-node coordination with relay-based load control",
      "Presented and demonstrated the working prototype at multiple events with live decentralized transactions",
    ],
    workContributions: [
      "Designed and built the physical smart energy meter around a Raspberry Pi platform, integrating measurement, control, and blockchain-client duties on a single embedded node.",
      "Engineered a six-node, grid-level laboratory prototype in which each Raspberry Pi acts simultaneously as an embedded energy-metering device and a full node of a Quorum-based consortium blockchain.",
      "Implemented end-to-end system integration across the six nodes — hardware, IoT transport, and multi-node coordination — including relay-based load control and safety protocols on each node.",
      "Executed testing and validation of smart contracts and on-chain transaction records, and produced formal documentation of the results for downstream research use.",
      "Presented and demonstrated the working six-node P2P energy-trading prototype at multiple events, running live decentralized transactions on the deployed cluster.",
    ],
    keyAchievements: [
      "Delivered a working six-node distributed P2P energy-trading prototype that combines a physical smart meter, embedded control, and a Quorum blockchain network — validated end-to-end in a live lab environment.",
      "Brought up Raspberry Pi–based smart energy meters as full participants in a permissioned blockchain, closing the loop from physical energy measurement to on-chain settlement.",
      "Integrated hardware-level safety protocols into the prototype, ensuring the embedded metering and switching subsystems operated safely alongside the decentralized trading logic.",
      "Verified smart-contract correctness and transaction-record integrity across the six-node cluster, and produced traceable validation documentation for research purposes.",
      "Diagnosed and resolved multi-node coordination issues arising at the boundary between embedded hardware, IoT protocols, and the blockchain client, keeping the six-node cluster stable during live demonstrations.",
      "Successfully demonstrated the prototype at multiple external events, using it as a reference platform to communicate the project's technical outcomes to non-technical audiences.",
    ],
    technologies: [
      { category: "Embedded / Hardware", items: ["Raspberry Pi", "Smart energy meter hardware", "Relay-based load switching", "Embedded node bring-up", "Enclosure integration"] },
      { category: "Firmware / Software", items: ["Python", "Linux (Raspberry Pi OS)", "Meter-polling scripts", "Deployment automation"] },
      { category: "Communication", items: ["Wi-Fi", "RS-485", "IP-based peer-to-peer networking"] },
      { category: "Distributed Systems", items: ["Quorum consortium blockchain", "IBFT consensus", "Solidity smart contracts", "Distributed six-node cluster", "P2P energy-trading protocol"] },
      { category: "Debugging & Validation", items: ["Multi-node integration testing", "Smart-contract validation", "On-chain transaction verification", "Safety-protocol testing", "Live-demo troubleshooting"] },
    ],
  },
  {
    slug: "smart-computing",
    company: "Smart Computing Pvt Ltd",
    role: "Trainee Embedded System Engineer",
    period: "Dec 2025 – May 2026",
    highlights: [
      "Developed custom firmware on STM32 microcontrollers for the INVEX metering project — MQTT, Ethernet, GSM, and LCD interfaces",
      "Resolved STM32 + DP83848 Ethernet bring-up failure by tracing a missing PHY reference-clock connection",
      "Built a reusable monochrome LCD driver on U8g2, characterized backlight power draw, and implemented auto-timeout for battery life",
    ],
    workContributions: [
      "Developed custom firmware on STM32 microcontrollers for the INVEX metering and control project, covering MQTT, Ethernet, and GSM communication paths as well as the LCD interface and interactive display layouts.",
      "Owned PCB-level debugging and bring-up on INVEX boards, working across power, reset, high-speed signalling, and peripheral interfaces to move boards from first-power to functional state.",
      "Brought up a 26-pin monochrome LCD from scratch: identified the correct controller documentation, resolved a wiring / driver integration issue, and validated the display end-to-end with real application screens.",
      "Wrote a reusable, universal monochrome LCD driver on top of U8g2 so the same interface layer could be used across future STM32-based products.",
      "Performed hands-on power measurements on the LCD subsystem and translated the results into a concrete firmware-level optimisation decision.",
    ],
    keyAchievements: [
      "Resolved an STM32 + DP83848 Ethernet bring-up failure by tracing the fault to a missing PHY reference-clock connection (DP83848 OSIN → STM32 PA1 REF_CLK); once corrected, the RMII link came up on first attempt and Ethernet operation was restored.",
      "Delivered a working 26-pin monochrome LCD interface on STM32 by identifying that an incorrect 28-pin datasheet had been referenced, sourcing the correct controller docs, and specifying the missing ceramic capacitors required by the LCD charge-pump / voltage circuit.",
      "Fixed a display initialisation bug by correcting the U8g2 byte callback to properly handle the A0 / command-mode line, after which the LCD came fully alive on the breadboard prototype.",
      "Validated the LCD subsystem against the real application UI — volume, temperature and pressure graphs, contrast control, and backlight operation — confirming driver readiness for product use.",
      "Characterised LCD backlight current draw at 0.160 A (ON) vs 0.002 A (OFF), and drove the engineering decision to add automatic backlight timeout and PWM dimming to extend battery life on the target device.",
      "Built out the INVEX firmware communication stack on STM32 across three transports — MQTT, Ethernet, and GSM — enabling the board to operate as a networked metering / control node.",
    ],
    technologies: [
      { category: "Embedded / Hardware", items: ["STM32 microcontrollers", "DP83848 Ethernet PHY", "26-pin monochrome LCD", "PCB-level bring-up", "Breadboard prototyping", "Ceramic-capacitor / charge-pump circuits", "Current-draw measurement"] },
      { category: "Firmware / Software", items: ["Embedded C/C++", "STM32Cube", "U8g2 graphics library", "Custom LCD driver development", "Interactive display layouts", "Real-time data handling"] },
      { category: "Communication", items: ["Ethernet (RMII)", "MQTT", "GSM", "UART", "Standard MCU peripheral buses"] },
      { category: "Debugging & Validation", items: ["PCB hardware debug (power rails, reset, RMII signalling)", "Datasheet-driven root-cause analysis", "Multimeter-based wiring verification", "Driver-level debugging", "Power-consumption analysis and optimisation"] },
    ],
  },
  {
    slug: "robotics-stellar",
    company: "Robotics Stellar Skills Pvt Ltd",
    role: "Robotics / IoT Engineer",
    period: "Jun 2025 – Nov 2025",
    highlights: [
      "Deployed ML models to the edge on ESP32 and Raspberry Pi platforms for real-time offline inference",
      "Built IoT network topologies spanning Wi-Fi Mesh, BLE, and ESP-NOW bridging sensor arrays to MySQL backends",
      "Led technical instruction on LEGO EV3 and Spike Prime platforms, diagnosing hardware and firmware issues in real time",
    ],
    workContributions: [
      "Deployed machine-learning models to the edge on ESP32 and Raspberry Pi platforms, optimised for real-time, offline inference without cloud dependency.",
      "Built IoT network topologies spanning Wi-Fi Mesh, BLE, and ESP-NOW to connect distributed sensor arrays to a MySQL-backed cloud/back-end environment.",
      "Integrated sensor front-ends with edge compute nodes and back-end services, keeping the physical, embedded, and cloud layers of each deployment aligned.",
      "Delivered technical instruction and hands-on troubleshooting on advanced robotics platforms, including LEGO EV3 and Spike Prime, in an educational / skills-development context.",
      "Provided embedded-system support during robotics activities, diagnosing hardware, firmware, and connectivity issues in real time.",
    ],
    keyAchievements: [
      "Ran ML inference offline on constrained edge hardware (ESP32, Raspberry Pi), avoiding the latency and connectivity cost of a cloud round-trip.",
      "Bridged distributed sensor arrays to a MySQL back-end over Wi-Fi Mesh, BLE, and ESP-NOW — three distinct wireless transports — chosen per deployment for range, power, and topology needs.",
      "Kept mixed IoT networks stable across the embedded, wireless, and cloud layers, resolving faults that spanned all three.",
      "Supported multi-platform robotics sessions on LEGO EV3 and Spike Prime, diagnosing platform-specific hardware and firmware issues under time pressure.",
      "Turned real deployment issues into teachable troubleshooting for trainees, reinforcing the link between embedded design decisions and observable system behaviour.",
    ],
    technologies: [
      { category: "Embedded / Hardware", items: ["ESP32", "Raspberry Pi", "Sensor integration", "LEGO EV3", "Spike Prime"] },
      { category: "Firmware / Software", items: ["Python", "C/C++", "On-device ML inference", "MySQL back-end integration"] },
      { category: "Communication", items: ["Wi-Fi Mesh", "BLE", "ESP-NOW", "Wi-Fi"] },
      { category: "AI / IoT", items: ["Edge AI", "Real-time offline ML inference", "Distributed sensor arrays", "Cloud-connected IoT"] },
      { category: "Debugging & Validation", items: ["Cross-layer IoT troubleshooting (device / network / back-end)", "Robotics platform diagnostics", "Live-session technical support"] },
    ],
  },
];
