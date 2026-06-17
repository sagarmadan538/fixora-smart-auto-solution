import oilChange from "../assets/oil-change.jpg";
import clutchPlate from "../assets/clutch-plate.jpg";
import tyreFix from "../assets/tire-fix.jpg";
import tyreReplacement from "../assets/tire-replacement.jpg";
import fullEngine from "../assets/full-engine.jpg";
import halfEngine from "../assets/half-engine.jpg";
import engineTuning from "../assets/engine-tuning.jpg";
import battery from "../assets/battery.jpg";
import chain from "../assets/chain.jpg";

const services = [
  {
    id: 1,
    title: "Engine Oil Change",
    image: oilChange,
    description: "Premium engine oil replacement with complete inspection.",
    duration: "20 - 30 Minutes",
    warranty: "7 Days",
    price: "Rs. 800+",
    features: [
      "Oil Replacement",
      "Engine Check",
      "Fluid Inspection"
    ]
  },

  {
    id: 2,
    title: "Battery Replacement",
    image: battery,
    description: "Battery testing and replacement service.",
    duration: "15 Minutes",
    warranty: "6 Months",
    price: "Rs. 3,000+",
    features: [
      "Battery Check",
      "Voltage Test",
      "Terminal Cleaning"
    ]
  },

  {
    id: 3,
    title: "Chain Service",
    image: chain,
    description: "Chain cleaning, lubrication and adjustment.",
    duration: "30 Minutes",
    warranty: "7 Days",
    price: "Rs. 500+",
    features: [
      "Chain Cleaning",
      "Lubrication",
      "Adjustment"
    ]
  },

  {
    id: 4,
    title: "Clutch Plate Replacement",
    image: clutchPlate,
    description: "Complete clutch plate replacement and adjustment.",
    duration: "2 - 3 Hours",
    warranty: "30 Days",
    price: "Rs. 2,500+",
    features: [
      "Clutch Plate Change",
      "Adjustment",
      "Performance Check"
    ]
  },

  {
    id: 5,
    title: "Tyre Puncture Repair",
    image: tyreFix,
    description: "Tube and tubeless tyre puncture repair.",
    duration: "15 - 20 Minutes",
    warranty: "Same Day",
    price: "Rs. 150+",
    features: [
      "Puncture Repair",
      "Pressure Check",
      "Leak Inspection"
    ]
  },

  {
    id: 6,
    title: "Tyre Replacement",
    image: tyreReplacement,
    description: "Tyre replacement and wheel balancing service.",
    duration: "30 Minutes",
    warranty: "Manufacturer Warranty",
    price: "Rs. 2,000+",
    features: [
      "Tyre Installation",
      "Wheel Balance",
      "Pressure Setup"
    ]
  },

  {
    id: 7,
    title: "Half Engine Repair",
    image: halfEngine,
    description: "Half engine repair and maintenance service.",
    duration: "5 - 6 Hours",
    warranty: "15 Days",
    price: "Rs. 4,000+",
    features: [
      "Engine Inspection",
      "Parts Repair",
      "Testing"
    ]
  },

  {
    id: 8,
    title: "Full Engine Repair",
    image: fullEngine,
    description: "Complete engine overhaul and restoration.",
    duration: "1 Day",
    warranty: "30 Days",
    price: "Rs. 8,000+",
    features: [
      "Engine Overhaul",
      "Parts Replacement",
      "Performance Test"
    ]
  },

  {
    id: 9,
    title: "Engine Tuning",
    image: engineTuning,
    description: "Engine tuning and performance optimization.",
    duration: "45 - 60 Minutes",
    warranty: "7 Days",
    price: "Rs. 800+",
    features: [
      "Engine Tune Up",
      "Adjustment",
      "Performance Boost"
    ]
  }
];

export default services;