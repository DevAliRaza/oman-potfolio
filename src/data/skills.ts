export interface SkillCategory {
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  { name: "Programming", items: ["Python", "C", "C++", "SQL", "Verilog HDL", "Solidity"] },
  { name: "AI / ML", items: ["TensorFlow", "TensorFlow Lite", "PyTorch", "TensorRT", "YOLOv7", "OpenCV", "Scikit-learn"] },
  { name: "Embedded Platforms", items: ["Raspberry Pi", "STM32", "ESP32", "Jetson Nano", "Arduino", "FPGA (Nexys A7, BASYS-3)"] },
  { name: "Protocols", items: ["CAN", "SPI", "I2C", "UART", "MQTT", "HTTP", "RS-485", "MAVLink", "Ethernet", "RS232"] },
  { name: "Tools", items: ["MATLAB / Simulink", "STM32Cube", "Xilinx Vivado", "ArduPilot / PX4", "Altium", "Cadence", "Proteus", "Linux"] },
  { name: "Blockchain", items: ["Quorum", "IBFT Consensus", "Solidity", "web3.py", "Smart Contract Design"] },
];
