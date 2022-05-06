import React from "react"
import Text from "../Text/Text.jsx";
import "../../css/Features.css";
import Search from "../../assets/home/features/search.svg";
import Select from "../../assets/home/features/select.svg";
import Stand from "../../assets/home/features/stand.png";

const features = [
  {
    id: 1,
    icon: Search,
    title: "Search",
    subTitle:
      "Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.",
  },
  {
    id: 2,
    icon: Select,
    title: "Select",
    subTitle:
      "Choose from thousands of options generated by the slogan maker that fit your needs.",
  },
  {
    id: 3,
    icon: Stand,
    title: "Stand out",
    subTitle: "Congrats on your new slogan. It's time to win the world!",
  },
];

export default function FeaturesContainer() {
  return (
    <div className="bg-primary-15">
      <div className="container flex items-center wrap">
        <div className="features">
          {features.map(({ icon, title, subTitle, id}) => (
            <div key={id} className="flex col items-center justify-center">
              <img src={icon} alt={title} />
              <h4>{title}</h4>
              <Text text={subTitle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
