export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  items: Skill[];
}

export interface SimpleSkillCategory {
  name: string;
  items: string[];
}

const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}`;

export const skills: SkillCategory[] = [
  {
    name: "Programming",
    items: [
      { name: "Python", icon: devicon("python/python-original.svg") },
      { name: "C", icon: devicon("c/c-original.svg") },
      { name: "C++", icon: devicon("cplusplus/cplusplus-original.svg") },
      { name: "SQL", icon: devicon("azuresqldatabase/azuresqldatabase-original.svg") },
      { name: "Verilog HDL" },
      { name: "Solidity", icon: devicon("solidity/solidity-original.svg") },
    ],
  },
  {
    name: "AI / ML",
    items: [
      { name: "TensorFlow", icon: devicon("tensorflow/tensorflow-original.svg") },
      { name: "TF Lite", icon: devicon("tensorflow/tensorflow-original.svg") },
      { name: "PyTorch", icon: devicon("pytorch/pytorch-original.svg") },
      { name: "TensorRT" },
      { name: "YOLOv7" },
      { name: "OpenCV", icon: devicon("opencv/opencv-original.svg") },
      { name: "Scikit-learn", icon: devicon("scikitlearn/scikitlearn-original.svg") },
    ],
  },
  {
    name: "Embedded Platforms",
    items: [
      { name: "Raspberry Pi", icon: devicon("raspberrypi/raspberrypi-original.svg") },
      { name: "STM32" },
      { name: "ESP32" },
      { name: "Jetson Nano" },
      { name: "Arduino", icon: devicon("arduino/arduino-original.svg") },
      { name: "FPGA (Nexys A7, BASYS-3)" },
    ],
  },
  {
    name: "Protocols",
    items: [
      { name: "CAN" },
      { name: "SPI" },
      { name: "I2C" },
      { name: "UART" },
      { name: "MQTT" },
      { name: "HTTP" },
      { name: "RS-485" },
      { name: "MAVLink" },
      { name: "Ethernet" },
      { name: "RS232" },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "MATLAB / Simulink", icon: devicon("matlab/matlab-original.svg") },
      { name: "STM32Cube" },
      { name: "Xilinx Vivado" },
      { name: "ArduPilot / PX4" },
      { name: "Altium" },
      { name: "Cadence" },
      { name: "Proteus" },
      { name: "Linux", icon: devicon("linux/linux-original.svg") },
    ],
  },
  {
    name: "Blockchain",
    items: [
      { name: "Quorum" },
      { name: "IBFT Consensus" },
      { name: "Solidity", icon: devicon("solidity/solidity-original.svg") },
      { name: "web3.py" },
      { name: "Smart Contract Design" },
    ],
  },
];

export const skillCategories: SimpleSkillCategory[] = skills.map((cat) => ({
  name: cat.name,
  items: cat.items.map((s) => s.name),
}));
