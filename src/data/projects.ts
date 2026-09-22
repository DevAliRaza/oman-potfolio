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
  video?: string;
}

export const projects: Project[] = [
  {
    slug: "retina-device",
    number: "01",
    title: "Edge AI Device for Retina Disease Detection",
    subtitle: "Portable embedded fundus camera running multi-model CNN inference on-device for diabetic retinopathy and cataract screening.",
    tags: ["Raspberry Pi 5", "CNN Ensemble", "TF Lite", "Offline"],
    cardImage: "/images/projects/retina-3d-render.jpg",
    video: "/videos/retina-device-3d.mp4",
    metrics: [
      { value: "< 2 s", label: "End-to-end inference" },
      { value: "5", label: "CNN models deployed" },
      { value: "96.3%", label: "Cataract accuracy" },
      { value: "< 950 g", label: "Device weight" },
    ],
    overview: [
      "The system is a portable, self-contained embedded device for point-of-care screening of vision-threatening retinal disease — specifically diabetic retinopathy and cataract. It combines a fundus-imaging optical front end with on-device deep-learning inference so that image capture, preprocessing, model execution, and result presentation all happen locally on the device, without any network or cloud dependency.",
      "Edge AI is central to the design: conventional AI-driven retinal screening pipelines assume workstation-class hardware or cloud inference, which is impractical in low-resource clinical settings. Deploying quantised CNN models on a Raspberry Pi–class platform preserves patient data locality, removes connectivity as a failure mode, and brings unit hardware cost to a level consistent with field-deployable screening.",
      "The demonstrated prototype captures fundus images through a Pi Camera V3 and a 20 D aspheric lens, runs a multi-model DR ensemble and a cataract classifier on-device, and reports a diagnosis with a per-class confidence score on an integrated LCD, driven by a joystick / button interface.",
    ],
    architecture: [
      "Optical Front End — 20 D aspheric lens · Pi Camera V3 (NoIR)",
      "Image Acquisition — OpenCV capture · preprocessing · normalisation",
      "Edge Inference Engine — TensorFlow Lite · quantised CNNs · on-device",
      "Ensemble & Decision — Majority-vote across 4 DR models + cataract head",
      "Local UI & Storage — LCD display · joystick / button control · timestamped log",
    ],
    hardwareTable: [
      { subsystem: "Processing platform", detail: "Raspberry Pi 5 (4 GB) — quad-core ARM SBC used as sole compute node for imaging, preprocessing, inference and UI" },
      { subsystem: "Imaging", detail: "Raspberry Pi Camera Module V3 (NoIR + Wide) paired with a 20 D double aspheric lens for optical magnification of the retina" },
      { subsystem: "User input MCU", detail: "Arduino Leonardo — analog-to-digital conversion for joystick axes, six programmable tactile buttons, forwarded to the SBC" },
      { subsystem: "Display", detail: "Integrated LCD screen for live preview, diagnosis, and confidence readout; touch-independent, driven from the SBC" },
      { subsystem: "Power", detail: "5 V / 5 A rechargeable Li-ion power pack sized for continuous inference under sustained load" },
      { subsystem: "Thermal", detail: "Passive cooling via aluminium heatsink; steady-state CPU temperature 61–65 °C under prolonged inference" },
      { subsystem: "Enclosure", detail: "3D-printed acrylic frame integrating optics, SBC, MCU, display, controls and battery in a hand-held form factor (< 950 g)" },
    ],
    images: [
      { src: "/images/projects/retina-3d-render.jpg", caption: "Fig 1.1 — 3D render of the retina screening device: front view with LCD display, joystick, control buttons and back view showing USB ports, Ethernet and optical lens assembly" },
    ],
    softwareAI: [
      "Application code runs on Raspberry Pi OS in Python 3.10. Image capture and preprocessing are implemented with OpenCV; the user interface is composed with PyGame and rendered directly to the LCD framebuffer. Inference uses TensorFlow Lite for the quantised models, with the training-time toolchain (TensorFlow / Keras, PyTorch for exploratory work) kept off-device.",
      "Five CNN classifiers were trained and deployed. Four architectures target diabetic retinopathy grading (MobileNetV2, EfficientNet-B0, EfficientNet-B3, EfficientNet-B5) against the APTOS 2019 Blindness Detection dataset; a fifth model, based on VGG19, performs binary cataract classification against ODIR-5K.",
      "Trained models are converted to TensorFlow Lite and quantised to reduce memory footprint and per-inference latency without a significant accuracy penalty. At run-time all four DR models execute against the captured frame and their outputs are combined by majority vote, which reduces sensitivity to any single model's misclassification.",
    ],
    keyWork: [
      "Model optimisation for edge deployment — conversion of five CNN classifiers to TensorFlow Lite with quantisation targeted at the Raspberry Pi 5 CPU inference path",
      "Multi-model ensemble arbitration — running four DR classifiers per frame and resolving them by majority vote to improve robustness against per-model bias",
      "Optical / sensor integration — mating a 20 D aspheric lens to the Pi Camera V3 to obtain a usable fundus field of view within a hand-held envelope",
      "SBC + MCU co-design — offloading analog joystick handling to an Arduino Leonardo so that the SBC's CPU budget is reserved for capture and inference",
      "Local UI stack — implementing a keyboard/mouse-free interaction model on the LCD with PyGame, suitable for use by non-technical operators",
      "Enclosure and thermal design — passive-cooled 3D-printed housing that keeps CPU temperatures within a safe steady-state band during continuous inference",
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
      {
        title: "System-level results",
        rows: [
          { metric: "End-to-end inference latency", value: "< 2 s" },
          { metric: "Continuous inference runtime", value: "~3.5 h" },
          { metric: "Steady-state CPU temperature", value: "61–65 °C" },
          { metric: "Total device weight", value: "< 950 g" },
        ],
      },
    ],
    resultsNotes: [
      "In clinical validation on 13 real patients, the ensemble correctly identified No-DR, Mild, Moderate and Severe cases at average confidence scores above 82%.",
      "Independent ophthalmologist review of the deployment placed overall end-to-end diagnostic accuracy at approximately 70% — consistent with the intended positioning of the device as a low-cost pre-screening tool rather than a definitive diagnostic.",
    ],
    techStack: [
      { category: "Hardware", items: ["Raspberry Pi 5 (4 GB)", "Pi Camera V3 (NoIR + Wide)", "20 D double aspheric lens", "Arduino Leonardo (HID / MCU)", "LCD panel, joystick + buttons", "5 V / 5 A Li-ion power pack", "3D-printed acrylic enclosure"] },
      { category: "Software", items: ["Raspberry Pi OS · Python 3.10", "OpenCV (image pipeline)", "PyGame (LCD UI)", "TensorFlow / Keras (training)", "TensorFlow Lite (edge inference)", "Quantisation toolchain", "Session logging + timestamped I/O"] },
      { category: "AI Models", items: ["MobileNetV2 (DR)", "EfficientNet-B0 (DR)", "EfficientNet-B3 (DR)", "EfficientNet-B5 (DR)", "VGG19 (cataract)", "Majority-vote ensemble", "APTOS 2019 · ODIR-5K datasets"] },
    ],
  },
  {
    slug: "energy-trading",
    number: "02",
    title: "Blockchain-Enabled P2P Decentralized Smart Energy Trading Platform",
    subtitle: "Consortium blockchain and smart-meter cluster on Raspberry Pi nodes with a double-auction matching algorithm.",
    tags: ["Quorum / IBFT", "10-node cluster", "Smart Meter", "Solidity"],
    cardImage: "/images/projects/energy-trading-enclosure.jpeg",
    metrics: [
      { value: "10", label: "Blockchain nodes" },
      { value: "IBFT", label: "BFT consensus" },
      { value: "~200 TPS", label: "Quorum capacity" },
      { value: "WEM3080", label: "Bi-directional meter" },
    ],
    overview: [
      "The project addresses the centralised, intermediary-heavy nature of conventional residential energy distribution. In a community with growing rooftop-solar penetration, individual households naturally become prosumers — producing surplus energy at some intervals and consuming it at others. Peer-to-peer (P2P) energy trading lets prosumers and consumers exchange energy directly, without a central utility broker acting as the trusted counterparty for every transaction.",
      "The engineered platform combines three layers: (i) a per-household embedded node that physically measures energy import and export via a bi-directional smart meter, (ii) a permissioned consortium blockchain running on the same nodes to record trading data immutably, and (iii) an off-chain double-auction matching algorithm that pairs buyers and sellers in each trading round.",
      "The demonstrated system is a 10-node Raspberry Pi cluster in which each Pi acts as a full blockchain node and as the embedded controller for its associated smart meter — a deliberately low-cost mapping of a residential household onto a single-board computer.",
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
      { subsystem: "Compute node", detail: "Raspberry Pi 4 (Cortex-A72, 64-bit SoC) — runs the Quorum full-node client, meter polling, control logic and local UI in one platform" },
      { subsystem: "Energy meter", detail: "WEM3080 single-phase net meter (150 A / 250 A CT variants). Measures V, I, instantaneous active power and cumulative import/export kWh" },
      { subsystem: "Communications", detail: "RS-485 (twisted-pair) via UART-to-RS-485 converter (MAX485-class) for wired Modbus; Wi-Fi used as the primary transport" },
      { subsystem: "Actuation", detail: "Single-channel relay (3.3 V / GPIO-driven) for load enable/disable per household" },
      { subsystem: "Power subsystem", detail: "3.7 V 5000 mAh Li-Po cells (2 in parallel → ~10 000 mAh) with a boost / power-bank module supplying 5 V USB rails" },
      { subsystem: "Local UI", detail: "3.5-inch RPi LCD display for status and console access; push-button control on the enclosure" },
      { subsystem: "Enclosure", detail: "3D-printed housing integrating SBC, meter, battery, RS-485 module, relay and display; screw terminals for AC input / output wiring" },
    ],
    images: [
      { src: "/images/projects/energy-trading-enclosure.jpeg", caption: "Fig 2.1 — Fully assembled node: 3D-printed enclosure with Raspberry Pi, LCD status display, USB ports, and hexagonal ventilation pattern" },
    ],
    keyWork: [
      "Running a full Quorum blockchain client on Raspberry Pi 4 — non-trivial given the ARM build target and the resource profile of a full Ethereum-family node",
      "Bootstrapping an IBFT-based consortium network from scratch: node key generation, genesis configuration, static-node peering, and account allocation across the cluster",
      "Deployment automation — replacing an entirely manual, command-line bring-up with Python and shell scripts that install toolchains, initialise nodes, clear state, and start the network reproducibly",
      "Smart-contract engineering in Solidity around a round + phase timing model keyed to block number, including deterministic serialisation for hash stability",
      "On-chain / off-chain co-design: keeping the double-auction algorithm off-chain and using hash-only submission with ⅔ agreement to bound gas cost",
      "Smart-meter integration: polling the WEM3080 over Wi-Fi from a Python client, extracting bidirectional kWh data and feeding it into the on-chain state",
      "Hardware iteration: revising the node from a PZEM-004T + Modbus wired design to a WEM3080 + Wi-Fi design, reducing physical wiring and SBC I/O load",
      "Contract deployment via web3.py, including AES-128-based key material handling during automated deploys",
    ],
    resultsTables: [
      {
        title: "Hardware Validation",
        rows: [
          { metric: "Blockchain nodes in cluster", value: "10" },
          { metric: "BFT consensus", value: "IBFT — reached and maintained" },
          { metric: "Required throughput (1 000 households)", value: "~1.67 TPS" },
          { metric: "Quorum envelope headroom", value: "~200 TPS" },
        ],
      },
    ],
    resultsNotes: [
      "Ten-node Quorum consortium reached and maintained IBFT consensus across Raspberry Pi 4 hardware, with each node acting simultaneously as a full validator and as the embedded controller for its household smart meter.",
      "Fully scripted network bring-up: tool installation, node initialisation, state clean-up, and smart-contract deployment run reproducibly from a single command.",
      "Phase-1 data submission works end-to-end on-chain, including the serialised, order-preserving hash-chaining that makes the round history tamper-evident.",
      "Phase-2 double-auction matching executes off-chain across the cluster and only its result hash is committed on-chain; ⅔ hash agreement is used to accept a round result.",
      "Smart-meter integration reads and reports bidirectional energy import / export kWh to the blockchain, providing the physical measurement that grounds every trade.",
      "Hardware revision from PZEM-004T (Modbus wired) to WEM3080 (Wi-Fi + RS-485) demonstrated the ability to iterate the field device without changing the blockchain layer.",
    ],
    techStack: [
      { category: "Hardware", items: ["Raspberry Pi 4 (per household)", "WEM3080 bi-directional meter", "Current transformers (150/250 A)", "UART ↔ RS-485 converter", "Single-channel GPIO relay", "3.7 V Li-Po (2× parallel)", "Power-bank / boost module", "3.5-inch RPi LCD"] },
      { category: "Blockchain", items: ["Quorum (Ethereum fork)", "Istanbul BFT (IBFT) consensus", "Solidity smart contracts", "solc + Remix compile pipeline", "web3.py deployment", "AES-128 keystore handling", "Genesis + static-nodes config"] },
      { category: "Software / Ops", items: ["Raspberry Pi OS (ARM)", "Go toolchain", "Python (meter poll, deploy scripts)", "Shell bring-up scripts", "Modbus over RS-485 (twisted pair)", "Wi-Fi meter transport", "Double-auction matcher (off-chain)"] },
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
      "A custom quadcopter platform engineered for security and surveillance workloads that would traditionally require an operator in the loop and a ground processing pipeline. The airframe carries an on-board AI companion computer running YOLOv7 for real-time object detection, license-plate reading and face recognition directly against the camera feed.",
      "A PX4-based flight controller handles autonomous mission execution and obstacle avoidance, while a MAVLink telemetry link streams position, video and system state back to a Mission-Planner-based ground control station.",
      "The design goal was operational autonomy: the drone plans and flies its own missions, makes perception decisions on-board without a cloud round-trip, and continues to operate meaningfully in GPS-degraded conditions using visual/inertial cues. The platform was built end-to-end — mechanical frame, avionics integration, perception stack and ground software — and validated in both simulation and outdoor field trials.",
    ],
    architecture: [
      "Camera Front End — Runcam Thumb — real-time video capture",
      "On-Board AI Engine — Raspberry Pi 5 · YOLOv7 · TensorRT-optimised inference",
      "Flight Controller — Cube Orange · PX4 firmware · EKF sensor fusion",
      "Sensor Suite — Neo-M8N GPS · IMU · barometer · ultrasonic obstacle sensing",
      "Telemetry Link — MAVLink over 433 MHz radio + Wi-Fi video, < 200 ms latency",
      "Ground Control Station — Mission Planner + custom Python/OpenCV dashboard",
    ],
    hardwareTable: [
      { subsystem: "Airframe", detail: "Custom 550 mm carbon-fibre quadcopter; CAD-designed and CNC-machined for precise motor/sensor placement and structural stiffness" },
      { subsystem: "Propulsion", detail: "Brushless DC (BLDC) motors, KV720, with foldable composite propellers; sized for the target thrust-to-weight and endurance envelope" },
      { subsystem: "Flight controller", detail: "Cube Orange running PX4 firmware — open-source autopilot with EKF-based state estimation" },
      { subsystem: "AI companion", detail: "Raspberry Pi 5 (8 GB) running YOLOv7 inference locally; connected to the flight controller over MAVLink" },
      { subsystem: "Camera", detail: "Runcam Thumb module streaming real-time video to the AI companion for object detection, tracking and recognition" },
      { subsystem: "Sensors", detail: "Neo-M8N GPS, IMU and barometer for state estimation; ultrasonic sensors for close-range obstacle detection (~4 m)" },
      { subsystem: "Power", detail: "4S 5200 mAh Li-Po pack feeding both propulsion and computation; sized for full-mission continuous inference" },
    ],
    images: [
      { src: "/images/projects/page22_img1.png", caption: "Fig 3.1 — Fully assembled and powered-up prototype on demonstration day" },
    ],
    softwareAI: [
      "The perception stack runs a custom-trained YOLOv7 model on the on-board Raspberry Pi, targeting surveillance-relevant classes (people, vehicles, bags, intruders) via transfer learning from COCO weights. Training-time augmentation covered rotation, brightness normalisation and motion blur to reflect real airborne footage. The deployed model is optimised with TensorRT to hit the frame-rate budget required for live detection during flight.",
      "A SORT (Simple Online and Realtime Tracking) layer maintains identity across frames for smoother tracking of moving subjects.",
      "Autonomous flight combines A*-based waypoint planning against the mission map, fuzzy-logic obstacle avoidance fed by IR and ultrasonic sensor data, and an EKF that fuses IMU, barometer and GPS into a robust pose estimate. The GCS was implemented as Mission Planner alongside a custom Python + OpenCV dashboard that overlays live YOLOv7 detections onto the video feed.",
    ],
    keyWork: [
      "End-to-end airframe engineering — SolidWorks-based design, CNC-machined carbon-fibre parts, and full mechanical / avionics integration into a flight-ready platform",
      "Custom YOLOv7 training pipeline (transfer learning from COCO, targeted augmentation) for surveillance classes, and TensorRT-optimised deployment on the Raspberry Pi 5",
      "SORT-based multi-object tracker layered on top of the detector to hold identity across frames during airborne motion",
      "Autonomous mission stack on PX4 with A* planning, fuzzy-logic obstacle avoidance and EKF-based state estimation fusing IMU, GPS and barometer",
      "Custom GCS dashboard combining Mission Planner with a Python/OpenCV overlay that unifies live detections, telemetry and mission state in one operator view",
      "Simulation-first validation strategy: MATLAB dynamic modelling, Simulink + PX4 software-in-the-loop, and hardware-in-the-loop testing before every outdoor flight",
    ],
    resultsTables: [
      {
        title: "Perception Performance",
        rows: [
          { metric: "mAP @ 0.5 (YOLOv7, custom set)", value: "91.2%" },
          { metric: "Precision", value: "90.4%" },
          { metric: "Recall", value: "88.7%" },
          { metric: "Field-test accuracy (varied light)", value: "90.87%" },
          { metric: "On-Pi inference throughput", value: "23 FPS (TensorRT)" },
        ],
      },
      {
        title: "Flight & Telemetry",
        rows: [
          { metric: "Autonomous mission success rate", value: "93%" },
          { metric: "Average navigation deviation", value: "1.0 m" },
          { metric: "Obstacle-avoidance success rate", value: "93%" },
          { metric: "Battery use per 10-min mission", value: "~17%" },
          { metric: "Telemetry range (stable)", value: "550 m" },
          { metric: "End-to-end telemetry latency", value: "< 200 ms" },
        ],
      },
    ],
    resultsNotes: [
      "Simulation results (MATLAB + Simulink + PX4 SITL + HIL) tracked field results within expected margins, giving high confidence that the on-board control loop matched the modelled dynamics prior to outdoor flight.",
    ],
    techStack: [
      { category: "Hardware", items: ["Custom 550 mm carbon-fibre airframe", "Cube Orange flight controller", "Raspberry Pi 5 AI companion", "Runcam Thumb camera", "Neo-M8N GPS · IMU · barometer", "Ultrasonic obstacle sensors", "BLDC motors + foldable props", "4S 5200 mAh Li-Po pack"] },
      { category: "Firmware & AI", items: ["PX4 (C/C++) autopilot firmware", "YOLOv7 object detection", "SORT multi-object tracker", "TensorRT inference optimisation", "OpenCV pre/post-processing", "A* path planning", "Fuzzy-logic obstacle avoidance", "EKF sensor fusion"] },
      { category: "Ground & Sim", items: ["Mission Planner GCS", "Custom Python + OpenCV dashboard", "MAVLink telemetry protocol", "433 MHz radio + Wi-Fi video", "MATLAB dynamic modelling", "Simulink + PX4 SITL", "Hardware-in-the-loop rig", "SolidWorks + CNC toolchain"] },
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
      "A custom RISC-V processor implemented in Verilog, refactored from a single-cycle baseline into a 3-stage pipelined microarchitecture to raise instruction throughput. The design was elaborated and verified in Xilinx Vivado and deployed on a Nexys A7 development board.",
      "The work covers the full RTL stack: fetch, decode/execute and memory/writeback pipeline stages, the register file, ALU and control unit, plus the pipeline registers and forwarding logic needed to make the pipelined datapath behave correctly.",
      "The engineering motivation is throughput without changing time-to-completion for any single instruction: by decomposing the single-cycle datapath into pipelined stages separated by registers, multiple instructions occupy different hardware resources in the same clock cycle, allowing the design to run at a higher operating frequency and raise overall IPC on non-dependent instruction streams.",
    ],
    architecture: [
      "Fetch (IF) — PC → instruction memory → IR; PC + 4 update path",
      "IF / ID Pipeline Register — Latches PC and IR at stage boundary",
      "Decode & Execute (ID/EX) — Register file read · immediate gen · ALU · branch condition",
      "EX / MEM Pipeline Register — Latches ALU result and control lines",
      "Memory & Writeback (MEM/WB) — Data-memory load/store · writeback mux into register file",
    ],
    hardwareTable: [
      { subsystem: "Fetch stage", detail: "Program counter, instruction memory interface, PC + 4 increment path, branch-taken handling" },
      { subsystem: "Decode / Execute", detail: "Register file (read ports), immediate generator, ALU (all supported RV opcodes), branch-condition unit, forwarding sources" },
      { subsystem: "Memory / Writeback", detail: "Data-memory interface for loads and stores, writeback mux selecting between ALU result and loaded data into the register file" },
      { subsystem: "Pipeline registers", detail: "PC and IR latches (IF↔ID), ALU-result and control latches (EX↔MEM), driven by the same clock with synchronous reset" },
      { subsystem: "Control unit", detail: "Decodes instruction fields into ALU op, register-write enable, source-operand selects, writeback-select, memory-write enable and branch type" },
      { subsystem: "Forwarding unit", detail: "Resolves EX-stage data hazards by selecting forwarded operands from later pipeline stages when register dependencies are detected" },
    ],
    images: [
      { src: "/images/projects/page28_img1.jpeg", caption: "Fig 4.1 — Vivado elaborated schematic of the top-level pipelined processor (6 cells, 245 nets)" },
    ],
    keyWork: [
      "RTL refactor of a single-cycle CPU into a 3-stage pipelined datapath with correctly sized pipeline registers at each stage boundary",
      "Full-CPU integration in Verilog — instruction memory, register file, immediate generator, ALU, branch unit, data memory and writeback path — assembled under a single configurable top-level",
      "Forwarding logic to resolve EX-stage data hazards without stalls on the common case, verified against dependent instruction streams",
      "Vivado-based synthesis, elaboration and implementation flow targeting the Xilinx Nexys A7 FPGA, with elaborated schematic review used as a design-intent check",
      "Verilog testbenches with waveform-driven debug for cycle-accurate verification and root-causing pipeline hazard behaviour",
    ],
    resultsNotes: [
      "Pipelined design successfully elaborated in Vivado as a hierarchical top-level containing Fetch, Decode_Execute, Forwarding_Unit, Memory_Writeback and Control_Unit modules (6 cells / 245 nets in the elaborated schematic).",
      "Cycle-accurate execution of a hazard-free assembly program verified in simulation, confirming correct pipeline register behaviour across stage boundaries.",
      "Configurable RTL (pipelined vs non-pipelined via a synthesis-time define) preserved as a bring-up and regression aid.",
      "Design successfully targeted the Xilinx Nexys A7 platform via the Vivado toolchain.",
    ],
    techStack: [
      { category: "RTL & ISA", items: ["Verilog / SystemVerilog", "Custom RISC-V core", "3-stage pipelined datapath", "Pipeline registers", "Forwarding unit", "ALU, register file, control unit"] },
      { category: "FPGA Toolchain", items: ["Xilinx Vivado", "Elaborated schematic review", "Synthesis + implementation", "Waveform simulation", "Configurable top-level defines"] },
      { category: "Target Platform", items: ["Xilinx Nexys A7 (7-series)", "On-board clocks and I/O", "Instruction / data memory modelled in RTL", "Bring-up and regression testbenches"] },
    ],
  },
];
