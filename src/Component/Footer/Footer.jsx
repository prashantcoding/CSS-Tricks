import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
        <div style={{color:'white',margin:'0 auto',textAlign:'center',background:"#18181c",padding:'10px'}}>
      <p>&copy; {currentYear} Prashant Goswami. All rights reserved.</p>
    </div>
    </div>
  );
};

export default Footer;
