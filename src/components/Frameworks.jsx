import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "css3",
    "jupyter",
    "java",
    "git",
    "html5",
    "javascript",
    "python",
    "react",
    "tensorflow",
    "tailwindcss",
    "vitejs",
    "pandas",
    "dl",
    "ml",
    "go",
    "docker",
    "kotlin",
    "opencv",
    "yolo",
    "n8n",
    "render",
    "polkadot",
    "postman",
    
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.jpg`} />
          
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={50}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
