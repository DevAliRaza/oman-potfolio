export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  caption: string;
}

export interface TechStack {
  category: string;
  items: string[];
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  cardImage: string;
  metrics: ProjectMetric[];
  overview: string[];
  architecture: string[];
  hardwareTable: { subsystem: string; detail: string }[];
  images: ProjectImage[];
  softwareAI?: string[];
  keyWork: string[];
  resultsIntro?: string;
  resultsTables?: { title: string; rows: { metric: string; value: string }[] }[];
  resultsNotes?: string[];
  techStack: TechStack[];
}

export const projects: Project[] = [
  {
    slug: "retina-device",
    number: "01",
    title: "Edge AI Device for Retina Disease Detection",
    subtitle: "Portable embedded fundus camera running multi-model CNN inference on-device for diabetic retinopathy and cataract screening.",
    tags: ["Raspberry Pi 5", "CNN Ensemble", "TF Lite", "Offline"],
    cardImage: "/images/projects/page5_img2.png",
    metrics: [
      { value: "< 2 s", label: "End-to-end inference" },
      { value: "5", label: "CNN models deployed" },
      { value: "96.3%", label: "Cataract accuracy" },
      { value: "< 950 g", label: "Device weight" },
    ],
    overview: [
      "A portable, self-contained embedded device for point-of-care screening of diabetic retinopathy and cataract. The system pairs a fundus-imaging optical front end with on-device deep-learning inference, so image capture, preprocessing, model execution, and result presentation all happen locally on a Raspberry Pi 5 — with zero cloud dependency.",
      "Five CNN classifiers (MobileNetV2, EfficientNet-B0/B3/B5, VGG19) were trained, quantised to TensorFlow Lite, and deployed on-device. Four DR models run per frame and resolve by majority vote, improving robustness over any single classifier. The device captures fundus images through a Pi Camera V3 and a 20 D aspheric lens, reports a diagnosis with per-class confidence scores on an integrated LCD, and logs every session with a timestamped record.",
      "Clinically validated on 13 real patients with ophthalmologist review placing end-to-end diagnostic accuracy at approximately 70% — positioning the device as a low-cost pre-screening tool for underserved clinical settings.",
    ],
    architecture: [
      "Optical Front End — 20 D aspheric lens · Pi Camera V3 (NoIR)",
      "Image Acquisition — OpenCV capture · preprocessing · normalisation",
      "Edge Inference Engine — TensorFlow Lite · quantised CNNs · on-device",
      "Ensemble & Decision — Majority-vote across 4 DR models + cataract head",
      "Local UI & Storage — LCD display · joystick / button control · timestamped log",
    ],
    hardwareTable: [
      { subsystem: "Processing", detail: "Raspberry Pi 5 (4 GB) — quad-core ARM SBC for imaging, preprocessing, inference and UI" },
      { subsystem: "Imaging", detail: "Pi Camera Module V3 (NoIR + Wide) paired with a 20 D double aspheric lens" },
      { subsystem: "User Input", detail: "Arduino Leonardo — analog-to-digital conversion for joystick axes and tactile buttons" },
      { subsystem: "Display", detail: "Integrated LCD screen for live preview, diagnosis, and confidence readout" },
      { subsystem: "Power", detail: "5 V / 5 A rechargeable Li-ion power pack for continuous inference" },
      { subsystem: "Enclosure", detail: "3D-printed acrylic frame integrating all components (< 950 g)" },
    ],
    images: [
      { src: "/images/projects/page5_img1.png", caption: "Fig 1.1 — Internal layout: Raspberry Pi 5, display driver PCB, and camera ribbon inside the 3D-printed enclosure" },
      { src: "/images/projects/page5_img2.png", caption: "Fig 1.2 — Integrated LCD panel for live preview and diagnostic output" },
      { src: "/images/projects/page5_img3.png", caption: "Fig 1.3 — Rear control panel: dual analog joysticks and tactile pushbuttons" },
      { src: "/images/projects/page7_img1.jpeg", caption: "Fig 1.4 — On-device ensemble output: per-model probability distribution across DR severity classes" },
    ],
    softwareAI: [
      "Application code runs on Raspberry Pi OS in Python 3.10. Image capture and preprocessing are implemented with OpenCV; the user interface is composed with PyGame and rendered directly to the LCD framebuffer.",
      "Five CNN classifiers were trained and deployed: four architectures target diabetic retinopathy grading (MobileNetV2, EfficientNet-B0, EfficientNet-B3, EfficientNet-B5) against the APTOS 2019 dataset; a fifth model (VGG19) performs binary cataract classification against ODIR-5K.",
      "Trained models are converted to TensorFlow Lite and quantised. At run-time all four DR models execute per frame and their outputs are combined by majority vote, reducing sensitivity to single-model misclassification.",
    ],
    keyWork: [
      "Model optimisation for edge deployment — conversion of five CNN classifiers to TensorFlow Lite with quantisation targeted at the Raspberry Pi 5 CPU inference path",
      "Multi-model ensemble arbitration — running four DR classifiers per frame and resolving by majority vote",
      "Optical / sensor integration — mating a 20 D aspheric lens to the Pi Camera V3 for fundus imaging",
      "SBC + MCU co-design — offloading analog joystick handling to an Arduino Leonardo",
      "Local UI stack — keyboard/mouse-free interaction model on the LCD with PyGame",
      "Enclosure and thermal design — passive-cooled 3D-printed housing (61–65 °C steady-state)",
    ],
    resultsTables: [
      {
        title: "Per-model performance (deployed on Raspberry Pi 5)",
        rows: [
          { metric: "MobileNetV2 — DR (5-class)", value: "75.4% accuracy · 1.2 s · 9.2 MB" },
          { metric: "EfficientNet-B3 — DR (5-class)", value: "73.4% accuracy · 1.2 s · 23.0 MB" },
          { metric: "EfficientNet-B5 — DR (5-class)", value: "82.0% accuracy · 1.3 s · 28.7 MB" },
          { metric: "VGG19 — Cataract (binary)", value: "96.3% accuracy · 2.0 s · 95.5 MB" },
        ],
      },
    ],
    resultsNotes: [
      "In clinical validation on 13 real patients, the ensemble correctly identified No-DR, Mild, Moderate and Severe cases at average confidence scores above 82%.",
      "Independent ophthalmologist review placed overall end-to-end diagnostic accuracy at approximately 70% — consistent with positioning as a low-cost pre-screening tool.",
    ],
    techStack: [
      { category: "Hardware", items: ["Raspberry Pi 5 (4 GB)", "Pi Camera V3 (NoIR + Wide)", "20 D aspheric lens", "Arduino Leonardo", "LCD panel + joystick", "5 V / 5 A Li-ion pack", "3D-printed enclosure"] },
      { category: "Software", items: ["Raspberry Pi OS", "Python 3.10", "OpenCV", "PyGame", "TensorFlow / Keras", "TensorFlow Lite", "Quantisation toolchain"] },
      { category: "AI Models", items: ["MobileNetV2 (DR)", "EfficientNet-B0/B3/B5 (DR)", "VGG19 (cataract)", "Majority-vote ensemble", "APTOS 2019 · ODIR-5K datasets"] },
    ],
  },
  {
    slug: "energy-trading",
    number: "02",
    title: "Blockchain-Enabled P2P Decentralized Smart Energy Trading Platform",
    subtitle: "Consortium blockchain and smart-meter cluster on Raspberry Pi nodes with a double-auction matching algorithm.",
    tags: ["Quorum / IBFT", "10-node cluster", "Smart Meter", "Solidity"],
    cardImage: "/images/projects/page14_img4.jpeg",
    metrics: [
      { value: "10", label: "Blockchain nodes" },
      { value: "IBFT", label: "BFT consensus" },
      { value: "~200 TPS", label: "Quorum capacity" },
      { value: "WEM3080", label: "Bi-directional meter" },
    ],
    overview: [
      "A full-stack peer-to-peer energy trading platform that lets residential prosumers and consumers exchange energy directly, without a central utility intermediary. The system combines per-household embedded nodes with bi-directional smart meters, a permissioned Quorum blockchain running IBFT consensus, and an off-chain double-auction matching algorithm — all deployed on a 10-node Raspberry Pi cluster.",
      "Each node is a self-contained product: 3D-printed enclosure housing an SBC, WEM3080 smart meter, communications converter, battery pack, control relay, and operator display. Smart contracts written in Solidity manage round-based trading with phase boundaries keyed to block number.",
      "The on-chain/off-chain split — matching off-chain, hash-only submission on-chain with ⅔ agreement — bounds gas costs while preserving verifiability. The platform demonstrated end-to-end: physical energy measurement to on-chain settlement across the full cluster.",
    ],
    architecture: [
      "Physical Energy Layer — WEM3080 bi-directional smart meter (I, V, kWh, import/export)",
      "Embedded Node — Raspberry Pi 4 · RS-485 / Wi-Fi bridge · relay control · local UI",
      "Blockchain Layer — Quorum (Ethereum fork) · IBFT consensus · 10-node consortium",
      "Smart-Contract Logic — Solidity contracts · round + phase timing tied to block number",
      "Off-Chain Matching — Double-auction algorithm · hash-only result submission on-chain",
      "P2P Settlement — Buyer/seller verification · real-world energy exchange",
    ],
    hardwareTable: [
      { subsystem: "Compute", detail: "Raspberry Pi 4 — runs Quorum full-node client, meter polling, control logic and local UI" },
      { subsystem: "Energy Meter", detail: "WEM3080 single-phase net meter (150/250 A CT) — V, I, power, import/export kWh" },
      { subsystem: "Communications", detail: "RS-485 via UART-to-RS-485 converter + Wi-Fi as primary transport" },
      { subsystem: "Actuation", detail: "Single-channel 3.3 V GPIO-driven relay for per-household load control" },
      { subsystem: "Power", detail: "3.7 V 5000 mAh Li-Po (2× parallel) with boost / power-bank module" },
      { subsystem: "Enclosure", detail: "3D-printed housing with screw terminals for AC input/output" },
    ],
    images: [
      { src: "/images/projects/page11_img1.jpeg", caption: "Fig 2.1 — UART-to-RS-485 converter module" },
      { src: "/images/projects/page11_img2.jpeg", caption: "Fig 2.2 — Single-channel relay for load switching" },
      { src: "/images/projects/page12_img1.jpeg", caption: "Fig 2.3 — Battery subsystem with boost module" },
      { src: "/images/projects/page12_img2.jpeg", caption: "Fig 2.4 — Raspberry Pi 4 household node" },
      { src: "/images/projects/page14_img1.jpeg", caption: "Fig 2.5 — Power-bank module inside enclosure" },
      { src: "/images/projects/page14_img2.jpeg", caption: "Fig 2.6 — 3.5-inch RPi LCD for status readout" },
      { src: "/images/projects/page14_img3.jpeg", caption: "Fig 2.7 — Fully assembled node, internal view" },
      { src: "/images/projects/page14_img4.jpeg", caption: "Fig 2.8 — Closed enclosure with LCD and terminals" },
    ],
    keyWork: [
      "Running a full Quorum blockchain client on Raspberry Pi 4 — non-trivial given the ARM build target",
      "Bootstrapping an IBFT-based consortium network from scratch: key generation, genesis config, static-node peering",
      "Deployment automation — replacing manual bring-up with Python and shell scripts",
      "Smart-contract engineering in Solidity around a round + phase timing model keyed to block number",
      "On-chain / off-chain co-design: double-auction off-chain, hash-only submission with ⅔ agreement",
      "Smart-meter integration: polling the WEM3080 over Wi-Fi, feeding bidirectional kWh data on-chain",
      "Hardware iteration: PZEM-004T + Modbus → WEM3080 + Wi-Fi, reducing wiring and I/O load",
    ],
    resultsNotes: [
      "Ten-node Quorum consortium reached and maintained IBFT consensus across Raspberry Pi 4 hardware.",
      "Fully scripted network bring-up: tool installation, node initialisation, state clean-up, and smart-contract deployment from a single command.",
      "Phase-1 data submission works end-to-end on-chain with serialised, order-preserving hash-chaining.",
      "Phase-2 double-auction matching executes off-chain with hash-only on-chain commitment.",
    ],
    techStack: [
      { category: "Hardware", items: ["Raspberry Pi 4", "WEM3080 meter", "Current transformers", "RS-485 converter", "GPIO relay", "Li-Po batteries", "3.5-inch LCD"] },
      { category: "Blockchain", items: ["Quorum (Ethereum fork)", "Istanbul BFT consensus", "Solidity contracts", "solc + Remix", "web3.py deployment", "AES-128 keystore"] },
      { category: "Software / Ops", items: ["Raspberry Pi OS (ARM)", "Go toolchain", "Python scripts", "Shell automation", "Modbus / Wi-Fi transport", "Double-auction matcher"] },
    ],
  },
  {
    slug: "drone",
    number: "03",
    title: "AI-Driven Autonomous Surveillance Drone",
    subtitle: "Custom quadcopter running YOLOv7 on-board, autonomous navigation on PX4, and low-latency MAVLink telemetry.",
    tags: ["YOLOv7", "PX4 / Cube Orange", "MAVLink", "Raspberry Pi 5"],
    cardImage: "/images/projects/page22_img1.png",
    metrics: [
      { value: "91.2%", label: "mAP@0.5 (YOLOv7)" },
      { value: "23 FPS", label: "On-Pi inference" },
      { value: "93%", label: "Mission success" },
      { value: "550 m", label: "Telemetry range" },
    ],
    overview: [
      "A custom quadcopter platform engineered for autonomous security surveillance. The airframe — designed in SolidWorks, CNC-machined from carbon fibre — carries an on-board Raspberry Pi 5 running YOLOv7 for real-time object detection, license-plate reading, and face recognition directly against the camera feed.",
      "A PX4-based Cube Orange flight controller handles autonomous mission execution via A* path planning and fuzzy-logic obstacle avoidance, while MAVLink telemetry streams position, video, and system state to a Mission Planner ground control station.",
      "The perception stack achieved 91.2% mAP@0.5 with 23 FPS on-device inference via TensorRT optimisation, and SORT-based tracking maintains identity across frames. Flight validation showed 93% autonomous mission success rate, 1.0 m average navigation deviation, and stable telemetry at 550 m range.",
    ],
    architecture: [
      "Camera Front End — Runcam Thumb · real-time video capture",
      "On-Board AI Engine — Raspberry Pi 5 · YOLOv7 · TensorRT-optimised inference",
      "Flight Controller — Cube Orange · PX4 firmware · EKF sensor fusion",
      "Sensor Suite — Neo-M8N GPS · IMU · barometer · ultrasonic obstacle sensing",
      "Telemetry Link — MAVLink over 433 MHz radio + Wi-Fi video, < 200 ms latency",
      "Ground Control Station — Mission Planner + custom Python/OpenCV dashboard",
    ],
    hardwareTable: [
      { subsystem: "Airframe", detail: "Custom 550 mm carbon-fibre quadcopter, CAD-designed and CNC-machined" },
      { subsystem: "Propulsion", detail: "BLDC motors, KV720, with foldable composite propellers" },
      { subsystem: "Flight Controller", detail: "Cube Orange running PX4 firmware with EKF state estimation" },
      { subsystem: "AI Companion", detail: "Raspberry Pi 5 (8 GB) running YOLOv7 inference locally" },
      { subsystem: "Camera", detail: "Runcam Thumb module for real-time video" },
      { subsystem: "Sensors", detail: "Neo-M8N GPS, IMU, barometer, ultrasonic sensors (~4 m range)" },
      { subsystem: "Power", detail: "4S 5200 mAh Li-Po pack for propulsion and computation" },
    ],
    images: [
      { src: "/images/projects/page22_img1.png", caption: "Fig 3.1 — Fully assembled prototype on demonstration day" },
      { src: "/images/projects/page23_img1.jpeg", caption: "Fig 3.2 — Ground Control Station with PFD and satellite map" },
      { src: "/images/projects/page23_img2.jpeg", caption: "Fig 3.3 — Autonomous waypoint mission plan in Mission Planner" },
      { src: "/images/projects/page23_img3.jpeg", caption: "Fig 3.4 — On-board YOLOv7 detections on aerial frame" },
    ],
    softwareAI: [
      "The perception stack runs a custom-trained YOLOv7 model targeting surveillance-relevant classes via transfer learning from COCO weights. The deployed model is optimised with TensorRT for live detection during flight.",
      "A SORT (Simple Online and Realtime Tracking) layer maintains identity across frames for smoother tracking of moving subjects.",
      "Autonomous flight combines A*-based waypoint planning, fuzzy-logic obstacle avoidance fed by IR and ultrasonic sensor data, and an EKF that fuses IMU, barometer and GPS into a robust pose estimate.",
    ],
    keyWork: [
      "End-to-end airframe engineering — SolidWorks design, CNC-machined carbon-fibre parts, full mechanical/avionics integration",
      "Custom YOLOv7 training pipeline with transfer learning and targeted augmentation for surveillance classes",
      "TensorRT-optimised deployment on Raspberry Pi 5 achieving 23 FPS",
      "SORT-based multi-object tracker for identity persistence across frames",
      "Autonomous mission stack on PX4 with A* planning, fuzzy-logic obstacle avoidance, and EKF sensor fusion",
      "Custom GCS dashboard combining Mission Planner with Python/OpenCV overlay",
      "Simulation-first validation: MATLAB, Simulink + PX4 SITL, and hardware-in-the-loop testing",
    ],
    resultsTables: [
      {
        title: "Perception Performance",
        rows: [
          { metric: "mAP @ 0.5", value: "91.2%" },
          { metric: "Precision", value: "90.4%" },
          { metric: "Recall", value: "88.7%" },
          { metric: "Field-test accuracy", value: "90.87%" },
          { metric: "On-Pi throughput", value: "23 FPS (TensorRT)" },
        ],
      },
      {
        title: "Flight & Telemetry",
        rows: [
          { metric: "Mission success rate", value: "93%" },
          { metric: "Navigation deviation", value: "1.0 m avg" },
          { metric: "Obstacle avoidance", value: "93%" },
          { metric: "Telemetry range", value: "550 m stable" },
          { metric: "End-to-end latency", value: "< 200 ms" },
        ],
      },
    ],
    techStack: [
      { category: "Hardware", items: ["550 mm carbon-fibre airframe", "Cube Orange flight controller", "Raspberry Pi 5 companion", "Runcam Thumb camera", "Neo-M8N GPS · IMU", "Ultrasonic sensors", "4S 5200 mAh Li-Po"] },
      { category: "Firmware & AI", items: ["PX4 autopilot", "YOLOv7 detection", "SORT tracker", "TensorRT optimisation", "OpenCV pipeline", "A* path planning", "Fuzzy-logic avoidance", "EKF sensor fusion"] },
      { category: "Ground & Sim", items: ["Mission Planner GCS", "Python + OpenCV dashboard", "MAVLink protocol", "433 MHz + Wi-Fi", "MATLAB modelling", "Simulink + PX4 SITL", "HIL testing", "SolidWorks + CNC"] },
    ],
  },
  {
    slug: "risc-v",
    number: "04",
    title: "High-Performance RISC-V Processor with 3-Stage Pipeline on FPGA",
    subtitle: "Custom Verilog implementation with fetch, decode/execute and memory/writeback stages, verified on Xilinx Nexys A7.",
    tags: ["RISC-V", "Verilog", "3-Stage Pipeline", "Nexys A7"],
    cardImage: "/images/projects/page28_img1.jpeg",
    metrics: [
      { value: "3", label: "Pipeline stages" },
      { value: "6", label: "RTL cells" },
      { value: "245", label: "Nets in design" },
      { value: "RISC-V", label: "Custom ISA" },
    ],
    overview: [
      "A custom RISC-V processor implemented in Verilog, refactored from a single-cycle baseline into a 3-stage pipelined microarchitecture to raise instruction throughput. The design covers the full RTL stack: fetch, decode/execute, and memory/writeback pipeline stages, the register file, ALU and control unit, plus pipeline registers and a forwarding unit to resolve data hazards without stalls.",
      "The processor was elaborated in Xilinx Vivado (6 cells, 245 nets) and targeted at the Nexys A7 development board. A configurable top-level supports pipelined and non-pipelined elaboration via a synthesis-time define, used during bring-up to isolate functional issues from pipeline hazards.",
      "Cycle-accurate execution was verified in simulation against golden reference programs, with pipeline hazards debugged from waveform simulation in Vivado.",
    ],
    architecture: [
      "Fetch (IF) — PC → instruction memory → IR; PC + 4 update path",
      "IF / ID Pipeline Register — Latches PC and IR at stage boundary",
      "Decode & Execute (ID/EX) — Register file read · immediate gen · ALU · branch condition",
      "EX / MEM Pipeline Register — Latches ALU result and control lines",
      "Memory & Writeback (MEM/WB) — Data-memory load/store · writeback mux into register file",
    ],
    hardwareTable: [
      { subsystem: "Fetch Stage", detail: "Program counter, instruction memory interface, PC + 4 increment, branch-taken handling" },
      { subsystem: "Decode / Execute", detail: "Register file (read ports), immediate generator, ALU, branch-condition unit, forwarding sources" },
      { subsystem: "Memory / Writeback", detail: "Data-memory interface for loads/stores, writeback mux selecting ALU result or loaded data" },
      { subsystem: "Pipeline Registers", detail: "PC and IR latches (IF↔ID), ALU-result and control latches (EX↔MEM), synchronous reset" },
      { subsystem: "Control Unit", detail: "Instruction field decode → ALU op, register-write enable, source selects, memory-write enable" },
      { subsystem: "Forwarding Unit", detail: "Resolves EX-stage data hazards by selecting forwarded operands from later stages" },
    ],
    images: [
      { src: "/images/projects/page28_img1.jpeg", caption: "Fig 4.1 — Vivado elaborated schematic of the pipelined processor (6 cells, 245 nets)" },
    ],
    keyWork: [
      "RTL refactor of a single-cycle CPU into a 3-stage pipelined datapath with correctly sized pipeline registers",
      "Full-CPU integration in Verilog — instruction memory, register file, ALU, branch unit, data memory, writeback path",
      "Forwarding logic to resolve EX-stage data hazards without stalls, verified against dependent instruction streams",
      "Vivado-based synthesis and implementation targeting the Xilinx Nexys A7 FPGA",
      "Verilog testbenches with waveform-driven debug for cycle-accurate verification",
    ],
    resultsNotes: [
      "Pipelined design successfully elaborated in Vivado as a hierarchical top-level (6 cells / 245 nets).",
      "Cycle-accurate execution of hazard-free assembly programs verified in simulation.",
      "Configurable RTL (pipelined vs non-pipelined via synthesis-time define) preserved as a bring-up aid.",
      "Design successfully targeted the Xilinx Nexys A7 platform via the Vivado toolchain.",
    ],
    techStack: [
      { category: "RTL & ISA", items: ["Verilog / SystemVerilog", "Custom RISC-V core", "3-stage pipeline", "Pipeline registers", "Forwarding unit", "ALU, register file, control unit"] },
      { category: "FPGA Toolchain", items: ["Xilinx Vivado", "Elaborated schematic review", "Synthesis + implementation", "Waveform simulation", "Configurable top-level"] },
      { category: "Target Platform", items: ["Xilinx Nexys A7 (7-series)", "On-board clocks and I/O", "RTL-modelled memories", "Regression testbenches"] },
    ],
  },
];
