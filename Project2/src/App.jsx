import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
const users = [
  { img: "https://plus.unsplash.com/premium_photo-1663040518652-9bc24a06df88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nemo odio autem libero quos quidem deleniti expedita repellat, delectus labore distinctio magnam?", 
    tag: "SHUUUUUUU" 
  },
  { img: "https://images.unsplash.com/photo-1762170318123-616b97727044?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
    intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi tempora numquam rerum quis suscipit.", 
    tag: "LALALA" 
  },
  { img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi tempora numquam rerum quis suscipit.", 
    tag: "Shoot" 
  },

];
const App = () => {
  return (
    <div>
      <Section1 users ={users} />
      <Section2 />
    </div>
  );
};

export default App;
