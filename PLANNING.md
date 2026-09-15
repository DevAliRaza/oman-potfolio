# Oman Khalid Butt — Portfolio Website Plan

## 1. Structure Decision: Hybrid (Single-Page Home + Dedicated Project Pages)

**Choice:** A single-page scrolling homepage that serves as the primary landing experience, with four dedicated project case-study pages linked from the projects section.

**Reasoning:**
- Oman has **four substantial engineering projects**, each with rich technical detail, architecture diagrams, hardware photos, and quantified results. Cramming all four into a single scroll would create an overwhelming wall of content that dilutes the impact of each project.
- A single-page home keeps the first impression fast and scannable — visitors (recruiters, hiring managers, research leads) see the full picture in one scroll: who Oman is, what he does, his experience timeline, project highlights as cards, skills, and contact.
- Each project then gets a dedicated case-study page where the depth of his work can breathe: system architecture, hardware photos, software stack, key engineering decisions, and measured results. This mirrors how the portfolio PDF is structured and plays to the strength of his documentation.
- The homepage project cards act as a "hook" — enough to show scope and impact — and a clear CTA takes the visitor into the full case study when they want detail.

## 2. Sitemap

```
/                       → Home (single-page scroll)
/projects/retina-device → Project 01: Edge AI Retina Device
/projects/energy-trading→ Project 02: P2P Energy Trading Platform
/projects/drone         → Project 03: Autonomous Surveillance Drone
/projects/risc-v        → Project 04: RISC-V Processor on FPGA
```

## 3. Homepage Sections (scroll order)

### 3.1 Hero
- Name: **Oman Khalid Butt**
- Title: **Embedded Systems Engineer**
- One-liner: "Building intelligent hardware — from edge AI medical devices to blockchain-powered energy networks"
- Subtle animated background (circuit-board pattern or grid lines)
- CTA buttons: "View Projects" (scrolls to projects) + "Get in Touch" (scrolls to contact)

### 3.2 About
- Short professional bio (3-4 sentences):

> Electrical engineer from UET Lahore with hands-on experience spanning embedded systems, edge AI, autonomous robotics, and blockchain-integrated IoT. Currently a Research Assistant at LUMS, engineering distributed P2P energy trading prototypes on Raspberry Pi clusters with Quorum blockchain. Previously built custom firmware on STM32 microcontrollers at Smart Computing and deployed edge ML models at Robotics Stellar Skills. I design systems that work at the intersection of hardware, software, and real-world constraints.

- Key stats row: "4 Projects" | "3 Roles" | "10+ Platforms" | "UET Lahore '25"

### 3.3 Experience (vertical timeline)
Three entries, each showing company, role, date range, and 2-3 bullet highlights:
1. **LUMS** — Research Assistant, EED (May 2026 – Present)
2. **Smart Computing Pvt Ltd** — Trainee Embedded System Engineer (Dec 2025 – May 2026)
3. **Robotics Stellar Skills Pvt Ltd** — Robotics / IoT Engineer (Jun 2025 – Nov 2025)

### 3.4 Projects (card grid — 2×2)
Each card shows:
- Project number label (e.g., "PROJECT 01")
- Title
- One-line description
- 3-4 tech tags (e.g., "Raspberry Pi 5 · CNN · TF Lite · Offline")
- A key metric badge (e.g., "< 2s inference")
- Hero image from the project
- "View Case Study →" link

### 3.5 Skills
Grouped into categories matching his resume:
- **Programming:** Python, C, C++, SQL, Verilog HDL, TensorFlow, PyTorch, Scikit-learn
- **Software Tools:** MATLAB/Simulink, ArduPilot, STM32Cube, Linux, Proteus, Cadence, Altium, Xilinx Vivado
- **Embedded Systems:** Raspberry Pi, FPGA (Nexys A7, BASYS-3), STM32, ESP32, Jetson Nano, IoT devices
- **Protocols:** CAN, SPI, ISOSPI, I2C, Ethernet, UART, MQTT, HTTP, RS232, MAVLink
- **AI/ML:** TensorFlow Lite, TensorRT, YOLOv7, OpenCV, CNN ensembles, edge inference

### 3.6 Education & Certificates
- BSc Electrical Engineering, UET Lahore (CGPA 3.2, Graduated 2025)
- Winner, Robotics Competition 2023 — IEEE UET RCET Student Branch

### 3.7 Contact
- Email: omanbutt44@gmail.com
- Phone: +92 302 680 2896
- LinkedIn: Oman Khalid (link from resume)
- Simple contact form (mailto-based, no backend needed)

## 4. Project Case-Study Page Template

Each project page follows this layout:
1. **Hero banner** with project title, subtitle, and 4 key metric badges
2. **Overview** — 2-3 paragraph professional write-up
3. **System Architecture** — flow diagram (recreated in CSS/SVG from the PDF diagrams)
4. **Hardware** — subsystem table + photos from the PDF
5. **Software & AI** (where applicable) — stack description, model details
6. **Key Engineering Work** — bulleted list of technically interesting contributions
7. **Results & Validation** — metrics table + key outcome stats
8. **Technical Stack** — three-column layout (Hardware | Software | AI/Other)
9. **Back to Projects** navigation

## 5. Project Write-ups (polished copy)

### Project 01: Edge AI Device for Retina Disease Detection
A portable, self-contained embedded device for point-of-care screening of diabetic retinopathy and cataract. The system pairs a fundus-imaging optical front end with on-device deep-learning inference, so image capture, preprocessing, model execution, and result presentation all happen locally on a Raspberry Pi 5 — with zero cloud dependency.

Five CNN classifiers (MobileNetV2, EfficientNet-B0/B3/B5, VGG19) were trained, quantised to TensorFlow Lite, and deployed on-device. Four DR models run per frame and resolve by majority vote, improving robustness over any single classifier. The device captures fundus images through a Pi Camera V3 and a 20 D aspheric lens, reports a diagnosis with per-class confidence scores on an integrated LCD, and logs every session with a timestamped record. Clinically validated on 13 real patients with ophthalmologist review placing end-to-end diagnostic accuracy at approximately 70% — positioning the device as a low-cost pre-screening tool for underserved clinical settings.

### Project 02: Blockchain-Enabled P2P Decentralized Smart Energy Trading Platform
A full-stack peer-to-peer energy trading platform that lets residential prosumers and consumers exchange energy directly, without a central utility intermediary. The system combines per-household embedded nodes with bi-directional smart meters, a permissioned Quorum blockchain running IBFT consensus, and an off-chain double-auction matching algorithm — all deployed on a 10-node Raspberry Pi cluster.

Each node is a self-contained product: 3D-printed enclosure housing an SBC, WEM3080 smart meter, communications converter, battery pack, control relay, and operator display. Smart contracts written in Solidity manage round-based trading with phase boundaries keyed to block number. The on-chain/off-chain split — matching off-chain, hash-only submission on-chain with ⅔ agreement — bounds gas costs while preserving verifiability. The platform demonstrated end-to-end: physical energy measurement to on-chain settlement across the full cluster.

### Project 03: AI-Driven Autonomous Surveillance Drone
A custom quadcopter platform engineered for autonomous security surveillance. The airframe — designed in SolidWorks, CNC-machined from carbon fibre — carries an on-board Raspberry Pi 5 running YOLOv7 for real-time object detection, license-plate reading, and face recognition directly against the camera feed. A PX4-based Cube Orange flight controller handles autonomous mission execution via A* path planning and fuzzy-logic obstacle avoidance, while MAVLink telemetry streams position, video, and system state to a Mission Planner ground control station.

The perception stack achieved 91.2% mAP@0.5 with 23 FPS on-device inference via TensorRT optimisation, and SORT-based tracking maintains identity across frames. Flight validation showed 93% autonomous mission success rate, 1.0 m average navigation deviation, and stable telemetry at 550 m range — all validated through a simulation-first pipeline (MATLAB, Simulink + PX4 SITL, hardware-in-the-loop) before outdoor trials.

### Project 04: High-Performance RISC-V Processor with 3-Stage Pipeline on FPGA
A custom RISC-V processor implemented in Verilog, refactored from a single-cycle baseline into a 3-stage pipelined microarchitecture to raise instruction throughput. The design covers the full RTL stack: fetch, decode/execute, and memory/writeback pipeline stages, the register file, ALU and control unit, plus pipeline registers and a forwarding unit to resolve data hazards without stalls.

The processor was elaborated in Xilinx Vivado (6 cells, 245 nets) and targeted at the Nexys A7 development board. A configurable top-level supports pipelined and non-pipelined elaboration via a synthesis-time define, used during bring-up to isolate functional issues from pipeline hazards. Cycle-accurate execution was verified in simulation against golden reference programs.

## 6. Image Placement

| Image | Source | Placement |
|-------|--------|-----------|
| Retina device internals (Fig 1.1) | PDF p5 | Project 01 case study — Hardware section |
| Retina device LCD (Fig 1.2) | PDF p5 | Project 01 case study — Hardware section |
| Retina device controls (Fig 1.3) | PDF p5 | Project 01 case study — Hardware section |
| Ensemble output chart (Fig 1.4) | PDF p7 | Project 01 case study — Results section |
| Energy node RS-485 (Fig 2.1) | PDF p11 | Project 02 case study — Hardware section |
| Energy node relay (Fig 2.2) | PDF p11 | Project 02 case study — Hardware section |
| Energy node battery (Fig 2.3) | PDF p12 | Project 02 case study — Hardware section |
| Energy node RPi (Fig 2.4) | PDF p12 | Project 02 case study — Hardware section |
| Energy meter internals (Fig 2.5-2.8) | PDF p14 | Project 02 case study — Smart Meter section |
| Drone prototype (Fig 3.1) | PDF p22 | Project 03 card + case study hero |
| GCS screenshots (Fig 3.2-3.3) | PDF p23 | Project 03 case study — Software section |
| YOLOv7 aerial detection (Fig 3.4) | PDF p23 | Project 03 case study — Results section |
| Vivado schematic (Fig 4.1) | PDF p28 | Project 04 case study — Design section |

Homepage project cards will use: Fig 1.2 (retina), Fig 2.8 (energy), Fig 3.1 (drone), Fig 4.1 (RISC-V).

## 7. Visual Design Direction

**Theme:** Dark mode primary (inspired by his portfolio PDF's dark aesthetic), with a blue accent color (#3B82F6) matching the PDF's "PROJECT 01" labels.

**Typography:**
- Headings: Inter or similar geometric sans-serif, bold weight
- Body: Inter, regular weight
- Code/tech tags: JetBrains Mono or similar monospace

**Color Palette:**
- Background: #0F172A (slate-900)
- Surface/cards: #1E293B (slate-800)
- Border/dividers: #334155 (slate-700)
- Primary text: #F8FAFC (slate-50)
- Secondary text: #94A3B8 (slate-400)
- Accent: #3B82F6 (blue-500)
- Accent hover: #60A5FA (blue-400)

**Layout:**
- Max content width: 1200px centered
- Project cards: 2-column grid on desktop, single column on mobile
- Case study pages: single-column reading layout with full-bleed images
- Generous whitespace between sections
- Subtle scroll-triggered fade-in animations via CSS

## 8. Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** CSS transitions + intersection observer for scroll reveals
- **Fonts:** Inter (Google Fonts) + JetBrains Mono
- **Deployment-ready:** Static export compatible
- **No external dependencies beyond Next.js + Tailwind**

## 9. Assumptions Made

1. **LinkedIn URL:** The resume shows "Oman Khalid" on LinkedIn but no full URL — will use a placeholder link.
2. **No headshot photo** found in the source documents — will use initials avatar or a placeholder section.
3. **Contact form:** Will use a mailto link since there's no backend — keeps it simple and deployable anywhere.
4. **Images:** Extracted from the portfolio PDF. Quality depends on the embedded resolution; will use as-is since they are photographs of actual prototypes (authentic > stock).
