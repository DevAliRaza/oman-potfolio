export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Lahore University of Management Sciences",
    role: "Research Assistant, EED",
    period: "May 2026 – Present",
    highlights: [
      "Engineered a six-node distributed P2P energy-trading prototype combining physical smart meters, embedded control, and Quorum blockchain",
      "Implemented end-to-end system integration across nodes — hardware, IoT transport, and multi-node coordination with relay-based load control",
      "Presented and demonstrated the working prototype at multiple events with live decentralized transactions",
    ],
  },
  {
    company: "Smart Computing Pvt Ltd",
    role: "Trainee Embedded System Engineer",
    period: "Dec 2025 – May 2026",
    highlights: [
      "Developed custom firmware on STM32 microcontrollers for the INVEX metering project — MQTT, Ethernet, GSM, and LCD interfaces",
      "Resolved STM32 + DP83848 Ethernet bring-up failure by tracing a missing PHY reference-clock connection",
      "Built a reusable monochrome LCD driver on U8g2, characterized backlight power draw, and implemented auto-timeout for battery life",
    ],
  },
  {
    company: "Robotics Stellar Skills Pvt Ltd",
    role: "Robotics / IoT Engineer",
    period: "Jun 2025 – Nov 2025",
    highlights: [
      "Deployed ML models to the edge on ESP32 and Raspberry Pi platforms for real-time offline inference",
      "Built IoT network topologies spanning Wi-Fi Mesh, BLE, and ESP-NOW bridging sensor arrays to MySQL backends",
      "Led technical instruction on LEGO EV3 and Spike Prime platforms, diagnosing hardware and firmware issues in real time",
    ],
  },
];
