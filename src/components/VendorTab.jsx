/* eslint-disable react/prop-types */
import { useState } from 'react';

const Tabs = ({ children, className, activeTabStyle='border-b-2 border-burgundy-100 text-burgundy-100', inactiveTabStyle='' }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full mx-auto">
      <div className={`flex ${className}`}>
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`text-sm lg:text-xl font-lato font-semibold py-2 ${child.props.className || ""} ${
              activeTab === child.props.label ? activeTabStyle : inactiveTabStyle
            }`}
            onClick={e => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map(child => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };