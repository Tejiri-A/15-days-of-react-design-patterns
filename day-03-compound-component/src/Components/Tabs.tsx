// src/Components/Tabs.tsx
import React, { useState } from "react";

type TabsProps = {
  children: React.ReactElement[];
  defaultValue: string;
};

function Tabs({ children, defaultValue }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  // We map over direct children and inject the state/handler
  return (
    <div className="flex flex-col gap-4">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            activeTab,
            setActiveTab,
          });
        }
        return child;
      })}
    </div>
  );
}

function TabList({ children, activeTab, setActiveTab }: any) {
  return (
    <div className="tabs tabs-box" role="tablist">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isActive: activeTab === child.props.value,
            onSelect: () => setActiveTab(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
}

function TabTrigger({ children, isActive, onSelect }: any) {
  return (
    <button
      role="tab"
      className={`tab ${isActive ? "tab-active" : ""}`}
      onClick={onSelect}
    >
      {children}
    </button>
  );
}

function TabContent({ children, value, activeTab }: any) {
  if (activeTab !== value) return null;
  return (
    <div className="p-4 border border-base-200 rounded-lg">{children}</div>
  );
}

Tabs.List = TabList;
Tabs.Trigger = TabTrigger;
Tabs.Content = TabContent;

export default Tabs;
